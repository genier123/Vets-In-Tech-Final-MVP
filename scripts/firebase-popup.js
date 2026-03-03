/*
  Hot Club Tracks - Firebase Newsletter Popup
  --------------------------------------------------
  How to use on any HTML page:
  1) Include this file near the end of <body>:
     <script src="/scripts/firebase-popup.js"></script>
  2) Paste your real firebaseConfig values below.

  This script:
  - Loads Firebase v9 (compat) from CDN
  - Shows a popup at 40% scroll depth
  - Saves email + timestamp + pageUrl to Firestore "subscribers"
  - Prevents duplicate submissions
*/

(function () {
  "use strict";

  // --------------------------------------------------
  // 1) Firebase config (replace with your provided config)
  // --------------------------------------------------
  const firebaseConfig = {
    apiKey: "AIzaSyCciK6wYVBAH8NooofLpBIg7_HfejGGMGw",
    authDomain: "hot-club-tracks.firebaseapp.com",
    projectId: "hot-club-tracks",
    storageBucket: "hot-club-tracks.firebasestorage.app",
    messagingSenderId: "1054223558496",
    appId: "1:1054223558496:web:05fcb694d0750b42556005",
    measurementId: "G-SYZCGR7B08",
  };

  // --------------------------------------------------
  // 2) Constants for behavior/settings
  // --------------------------------------------------
  const FIREBASE_VERSION = "9.23.0";
  const COLLECTION_NAME = "subscribers";
  const SCROLL_TRIGGER_RATIO = 0.4; // 40%
  const LOCAL_SUBSCRIBED_KEY = "hct_newsletter_subscribed_email";
  const SESSION_CLOSED_KEY = "hct_newsletter_popup_closed";

  // --------------------------------------------------
  // 3) Early config validation
  // --------------------------------------------------
  if (!isValidFirebaseConfig(firebaseConfig)) {
    console.warn(
      "[firebase-popup] Disabled: add your real firebaseConfig values in /scripts/firebase-popup.js"
    );
    return;
  }

  // --------------------------------------------------
  // 4) Start flow: load Firebase, then initialize popup
  // --------------------------------------------------
  init();

  async function init() {
    try {
      await loadFirebaseCompatIfNeeded();
      const db = initFirestore();
      mountPopupUI(db);
    } catch (err) {
      console.error("[firebase-popup] Initialization failed:", err);
    }
  }

  // --------------------------------------------------
  // 5) Load Firebase v9 compat scripts from CDN (if not already loaded)
  // --------------------------------------------------
  async function loadFirebaseCompatIfNeeded() {
    if (window.firebase && typeof window.firebase.initializeApp === "function") {
      return;
    }

    const appUrl = `https://www.gstatic.com/firebasejs/${FIREBASE_VERSION}/firebase-app-compat.js`;
    const firestoreUrl = `https://www.gstatic.com/firebasejs/${FIREBASE_VERSION}/firebase-firestore-compat.js`;

    await loadScript(appUrl);
    await loadScript(firestoreUrl);
  }

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const existing = document.querySelector(`script[src=\"${src}\"]`);
      if (existing) {
        if (existing.dataset.loaded === "true") {
          resolve();
          return;
        }
        existing.addEventListener("load", () => resolve(), { once: true });
        existing.addEventListener("error", () => reject(new Error(`Failed to load ${src}`)), {
          once: true,
        });
        return;
      }

      const s = document.createElement("script");
      s.src = src;
      s.async = true;
      s.onload = function () {
        s.dataset.loaded = "true";
        resolve();
      };
      s.onerror = function () {
        reject(new Error(`Failed to load ${src}`));
      };
      document.head.appendChild(s);
    });
  }

  // --------------------------------------------------
  // 6) Initialize Firebase app + Firestore
  // --------------------------------------------------
  function initFirestore() {
    if (!window.firebase.apps.length) {
      window.firebase.initializeApp(firebaseConfig);
    }
    return window.firebase.firestore();
  }

  // --------------------------------------------------
  // 7) Build popup UI + styles + event listeners
  // --------------------------------------------------
  function mountPopupUI(db) {
    // Do not show popup if user already subscribed or closed it this session.
    if (localStorage.getItem(LOCAL_SUBSCRIBED_KEY) || sessionStorage.getItem(SESSION_CLOSED_KEY)) {
      return;
    }

    injectStyles();

    const root = document.createElement("div");
    root.id = "hctEmailPopup";
    root.className = "hct-popup-overlay";
    root.setAttribute("aria-hidden", "true");

    root.innerHTML =
      '<div class="hct-popup-modal" role="dialog" aria-modal="true" aria-labelledby="hctPopupTitle">' +
      '  <button type="button" class="hct-popup-close" aria-label="Close popup">&times;</button>' +
      '  <h3 id="hctPopupTitle">Join the Hot Club Tracks Newsletter</h3>' +
      '  <p>Get trending stories and music updates by email.</p>' +
      '  <form id="hctPopupForm" novalidate>' +
      '    <input id="hctPopupEmail" type="email" placeholder="you@example.com" required />' +
      '    <button type="submit">Subscribe</button>' +
      '  </form>' +
      '  <p id="hctPopupStatus" class="hct-popup-status" aria-live="polite"></p>' +
      '</div>';

    document.body.appendChild(root);

    const closeBtn = root.querySelector(".hct-popup-close");
    const form = root.querySelector("#hctPopupForm");
    const emailInput = root.querySelector("#hctPopupEmail");
    const status = root.querySelector("#hctPopupStatus");

    // Show popup when user scrolls to 40% of page.
    function onScroll() {
      if (isPopupVisible(root)) return;

      const docEl = document.documentElement;
      const maxScroll = docEl.scrollHeight - window.innerHeight;
      if (maxScroll <= 0) return;

      const depth = window.scrollY / maxScroll;
      if (depth >= SCROLL_TRIGGER_RATIO) {
        showPopup(root);
        window.removeEventListener("scroll", onScroll);
      }
    }

    closeBtn.addEventListener("click", function () {
      hidePopup(root);
      sessionStorage.setItem(SESSION_CLOSED_KEY, "1");
    });

    // Submit email to Firestore with duplicate protection.
    form.addEventListener("submit", async function (event) {
      event.preventDefault();

      const email = (emailInput.value || "").trim().toLowerCase();
      if (!isValidEmail(email)) {
        setStatus(status, "Please enter a valid email address.", true);
        return;
      }

      // Local duplicate block for faster UX.
      if (localStorage.getItem(LOCAL_SUBSCRIBED_KEY) === email) {
        setStatus(status, "This email is already subscribed.", true);
        return;
      }

      setStatus(status, "Saving...", false);

      try {
        // Using normalized email as doc ID guarantees uniqueness.
        // We intentionally skip a pre-read because rules block reads.
        // With create-only rules, this set succeeds for new docs and
        // fails for existing docs (treated as update).
        const docId = encodeURIComponent(email);
        const ref = db.collection(COLLECTION_NAME).doc(docId);

        await ref.set({
          email: email,
          timestamp: window.firebase.firestore.FieldValue.serverTimestamp(),
          pageUrl: window.location.href,
        });

        localStorage.setItem(LOCAL_SUBSCRIBED_KEY, email);
        setStatus(status, "Thanks. You are subscribed.", false);
        form.reset();

        setTimeout(function () {
          hidePopup(root);
        }, 1000);
      } catch (err) {
        console.error("[firebase-popup] Save failed:", {
          code: err && err.code ? err.code : "unknown",
          message: err && err.message ? err.message : String(err),
        });
        setStatus(status, mapSaveError(err), true);
      }
    });

    window.addEventListener("scroll", onScroll, { passive: true });
  }

  function injectStyles() {
    if (document.getElementById("hctPopupStyles")) return;

    const style = document.createElement("style");
    style.id = "hctPopupStyles";
    style.textContent =
      ".hct-popup-overlay{position:fixed;inset:0;display:none;align-items:center;justify-content:center;background:rgba(0,0,0,.45);z-index:9999;padding:16px;}" +
      ".hct-popup-overlay.is-visible{display:flex;}" +
      ".hct-popup-modal{position:relative;width:min(100%,380px);background:#fff;color:#111;border-radius:10px;padding:18px;box-shadow:0 10px 30px rgba(0,0,0,.2);font-family:Arial,sans-serif;}" +
      ".hct-popup-modal h3{margin:0 0 8px;font-size:1.1rem;}" +
      ".hct-popup-modal p{margin:0 0 12px;line-height:1.4;}" +
      ".hct-popup-close{position:absolute;top:8px;right:10px;border:0;background:transparent;font-size:24px;line-height:1;cursor:pointer;}" +
      ".hct-popup-modal form{display:flex;gap:8px;}" +
      ".hct-popup-modal input{flex:1;min-width:0;padding:10px;border:1px solid #cfcfcf;border-radius:8px;}" +
      ".hct-popup-modal button[type='submit']{padding:10px 12px;border:0;border-radius:8px;background:#111827;color:#fff;cursor:pointer;}" +
      ".hct-popup-status{min-height:16px;margin-top:10px;font-size:.9rem;color:#166534;}" +
      ".hct-popup-status.error{color:#b91c1c;}";

    document.head.appendChild(style);
  }

  // --------------------------------------------------
  // 8) Small helpers
  // --------------------------------------------------
  function showPopup(root) {
    root.classList.add("is-visible");
    root.setAttribute("aria-hidden", "false");
  }

  function hidePopup(root) {
    root.classList.remove("is-visible");
    root.setAttribute("aria-hidden", "true");
  }

  function isPopupVisible(root) {
    return root.classList.contains("is-visible");
  }

  function setStatus(node, message, isError) {
    node.textContent = message;
    node.classList.toggle("error", Boolean(isError));
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function isValidFirebaseConfig(config) {
    if (!config || typeof config !== "object") return false;

    const requiredKeys = [
      "apiKey",
      "authDomain",
      "projectId",
      "storageBucket",
      "messagingSenderId",
      "appId",
    ];

    return requiredKeys.every(function (key) {
      const value = config[key];
      return (
        typeof value === "string" &&
        value.length > 0 &&
        value.indexOf("YOUR_") !== 0
      );
    });
  }

  function mapSaveError(err) {
    const code = err && err.code ? err.code : "";

    if (code === "permission-denied") {
      return "This email may already be subscribed, or Firestore rules blocked the save.";
    }
    if (code === "failed-precondition") {
      return "Firestore is not fully set up yet for this project.";
    }
    if (code === "unavailable") {
      return "Network/service unavailable. Try again in a moment.";
    }
    return "Could not save right now. Please try again.";
  }
})();
