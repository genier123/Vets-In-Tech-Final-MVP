import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  serverTimestamp,
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const CONFIG = window.__EMAIL_POPUP_FIREBASE_CONFIG;
const SUBSCRIBERS_COLLECTION = "subscribers";
const LOCAL_SUBMITTED_KEY = "email_popup_submitted";
const SESSION_CLOSED_KEY = "email_popup_closed";
const SCROLL_TRIGGER = 0.4;

if (!isUsableFirebaseConfig(CONFIG)) {
  console.warn(
    "Email popup disabled: missing or placeholder window.__EMAIL_POPUP_FIREBASE_CONFIG"
  );
} else {
  const app = initializeApp(CONFIG);
  const db = getFirestore(app);
  initEmailPopup(db);
}

function initEmailPopup(db) {
  if (localStorage.getItem(LOCAL_SUBMITTED_KEY) || sessionStorage.getItem(SESSION_CLOSED_KEY)) {
    return;
  }

  const popup = buildPopup();
  const form = popup.querySelector("#emailCaptureForm");
  const emailInput = popup.querySelector("#emailCaptureInput");
  const closeBtn = popup.querySelector("#emailCaptureClose");
  const status = popup.querySelector("#emailCaptureStatus");

  let visible = false;

  function showPopup() {
    if (visible) return;
    visible = true;
    popup.classList.add("is-visible");
  }

  function hidePopup() {
    popup.classList.remove("is-visible");
    sessionStorage.setItem(SESSION_CLOSED_KEY, "1");
  }

  function onScroll() {
    if (visible) return;

    const docEl = document.documentElement;
    const maxScroll = docEl.scrollHeight - window.innerHeight;
    if (maxScroll <= 0) return;

    const depth = window.scrollY / maxScroll;
    if (depth >= SCROLL_TRIGGER) {
      showPopup();
      window.removeEventListener("scroll", onScroll);
    }
  }

  closeBtn.addEventListener("click", hidePopup);

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const rawEmail = emailInput.value;
    const email = rawEmail.trim().toLowerCase();

    if (!isValidEmail(email)) {
      setStatus(status, "Please enter a valid email.", true);
      return;
    }

    const subscriberId = encodeURIComponent(email);
    const subscriberRef = doc(db, SUBSCRIBERS_COLLECTION, subscriberId);

    setStatus(status, "Saving...", false);

    try {
      const existing = await getDoc(subscriberRef);
      if (existing.exists()) {
        setStatus(status, "This email is already subscribed.", true);
        return;
      }

      await setDoc(subscriberRef, {
        email,
        pageUrl: window.location.href,
        timestamp: serverTimestamp(),
      });

      localStorage.setItem(LOCAL_SUBMITTED_KEY, email);
      setStatus(status, "Thanks! You are subscribed.", false);
      form.reset();

      setTimeout(() => {
        popup.classList.remove("is-visible");
      }, 1200);
    } catch (error) {
      console.error("Email capture failed:", error);
      setStatus(status, "Could not save your email. Please try again.", true);
    }
  });

  window.addEventListener("scroll", onScroll, { passive: true });
}

function buildPopup() {
  const wrapper = document.createElement("div");
  wrapper.className = "email-popup";
  wrapper.setAttribute("role", "dialog");
  wrapper.setAttribute("aria-modal", "true");
  wrapper.setAttribute("aria-labelledby", "emailCaptureTitle");

  wrapper.innerHTML = `
    <div class="email-popup__panel">
      <button id="emailCaptureClose" class="email-popup__close" type="button" aria-label="Close">&times;</button>
      <h3 id="emailCaptureTitle">Stay in the loop</h3>
      <p>Get updates and trending stories.</p>
      <form id="emailCaptureForm" novalidate>
        <input id="emailCaptureInput" type="email" name="email" placeholder="you@example.com" required>
        <button type="submit">Subscribe</button>
      </form>
      <p id="emailCaptureStatus" class="email-popup__status" aria-live="polite"></p>
    </div>
  `;

  document.body.appendChild(wrapper);
  return wrapper;
}

function setStatus(node, message, isError) {
  node.textContent = message;
  node.classList.toggle("email-popup__status--error", isError);
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isUsableFirebaseConfig(config) {
  if (!config) return false;
  const requiredKeys = [
    "apiKey",
    "authDomain",
    "projectId",
    "storageBucket",
    "messagingSenderId",
    "appId",
  ];

  return requiredKeys.every((key) => {
    const value = config[key];
    return (
      typeof value === "string" &&
      value.length > 0 &&
      !value.startsWith("YOUR_")
    );
  });
}
