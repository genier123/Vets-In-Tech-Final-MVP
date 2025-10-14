const sectionsContainer = document.getElementById("sectionsContainer");

document.getElementById("addSectionButton").onclick = function () {
    const h2Input = prompt("Enter H2 (optional):");
    const pInput = prompt("Enter Paragraph:");

    if (pInput) {
        const section = document.createElement("section");
        section.setAttribute("draggable", "true");

        // If H2 is provided, include it; otherwise only add paragraph
        section.innerHTML = `
            ${h2Input ? `<h2>${h2Input}</h2>` : ""}
            <p>${pInput}</p>
            <button class="deleteSectionButton">Delete Section</button>
        `;

        sectionsContainer.appendChild(section);

        // Delete section button
        section.querySelector(".deleteSectionButton").onclick = function () {
            sectionsContainer.removeChild(section);
        };

        addDragAndDropHandlers(section);
    } else {
        alert("Paragraph must be provided.");
    }
};

// --- DRAG & DROP ORDERING ---
function addDragAndDropHandlers(section) {
    section.addEventListener("dragstart", function () {
        section.classList.add("dragging");
    });

    section.addEventListener("dragend", function () {
        section.classList.remove("dragging");
    });

    sectionsContainer.addEventListener("dragover", function (e) {
        e.preventDefault();
        const draggingElement = document.querySelector(".dragging");
        const afterElement = getDragAfterElement(sectionsContainer, e.clientY);

        if (afterElement == null) {
            sectionsContainer.appendChild(draggingElement);
        } else {
            sectionsContainer.insertBefore(draggingElement, afterElement);
        }
    });
}

function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll("section:not(.dragging)")];

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}

// --- GENERATE FINAL HTML ---
document.getElementById("generateHtmlButton").onclick = function () {
    const title = document.getElementById("titleInput").value;
    const mainPicture = document.getElementById("main-picture").value;
    const description = document.getElementById("descriptionInput").value;
    const keywords = document.getElementById("keywordsInput").value;
    const author = document.getElementById("authorInput").value;
    const ogTitle = document.getElementById("ogTitleInput").value;
    const ogDescription = document.getElementById("ogDescriptionInput").value;
    const ogUrlInput = document.getElementById("ogUrlInput");
    const ogImage = document.getElementById("ogImageInput").value;
    const h1 = document.getElementById("h1Input").value;
    const date = document.getElementById("dateInput").value;
    const linkName = document.getElementById("linkName").value.replace(/\s+/g, "-");

    // Get selected category
    const category = document.querySelector('input[name="category"]:checked').value;
    const baseUrl = `https://www.hotclubtracks.com/${category}/`;
    const finalOgUrl = baseUrl + linkName;
    ogUrlInput.value = finalOgUrl;

    // Clone sections but remove delete buttons
    const sectionsClone = Array.from(sectionsContainer.children).map(section => {
        const clone = section.cloneNode(true);
        const delBtn = clone.querySelector(".deleteSectionButton");
        if (delBtn) delBtn.remove();
        return clone.outerHTML;
    }).join("");

    const generatedHtml = `
<!DOCTYPE html>
<html lang="en">
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>${title}</title>
<meta name="description" content="${description}">
<meta name="keywords" content="${keywords}">
<meta name="author" content="${author}">
<meta property="og:title" content="${ogTitle || title}">
<meta property="og:description" content="${ogDescription}">
<meta property="og:url" content="${finalOgUrl}">
<meta property="og:type" content="article">
<meta property="og:image" content="${mainPicture}">
<link rel="stylesheet" href="../stylesheets/articlesTemplate.css">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Teko:wght@700&display=swap" rel="stylesheet">
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2474604734581000" crossorigin="anonymous"></script>

</head>
<body>
<header class="myMenu">
  <a href="https://www.hotclubtracks.com/"><h1>Hot Club Tracks</h1></a>
</header>
<div id="buttonMenu"></div><br>

<article>
  ${h1 ? `<h1>${h1}</h1>` : ""}
  <div class="totalLayout">
    <div class="col-1">
      <br>
      <img class="mainPicture" src="${mainPicture}" alt="${title}">
      <br><br>
      <p><i>By Hot Club Tracks - Published on: ${date}</i></p>
      <br>
      <article><section>${sectionsClone}</section></article>
      <br>
      <div class="share-buttons">
        <a href="https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${finalOgUrl}" class="btn social-twitter" target="_blank">Share on Twitter</a>
        <a href="https://www.facebook.com/sharer/sharer.php?u=${finalOgUrl}" class="btn social-facebook" target="_blank">Share on Facebook</a>
      </div>
      <br>
      <div class="return-button-container">
        <a href="#" onclick="window.history.back(); return false;" class="back-to-stories">Return to Last Page</a>
      </div>
      <br>
      <div class="mainAd">
        <a href="https://join.robinhood.com/patricg1405/">
          <img class="adArtMain" src="../addimages/robinhoodaddimage1a.jpg" alt="Robinhood Ad">
        </a>
      </div>
      <br>
    </div>
    <div class="col-2">
      <div class="otherStories"><h1>Other Stories</h1></div>
      <div class="news-container2"><div id="news-item2-insert"></div></div>
    </div>
  </div>
  <br><hr>
  <div class="otherAdsTitle"><h2>GIFs of the Week!</h2></div>
  <div class="otherAdsLayout">
    <div id="otherAdsIcon"><img src="../GIFs/Dancing GIF-downsized.gif" height="75px"></div>
    <div id="otherAdsIcon"><img src="../GIFs/Advertise GIF-downsized.gif" height="75px"></div>
    <div id="otherAdsIcon"><img src="../GIFs/Wtf GIF-downsized.gif" height="75px"></div>
    <div id="otherAdsIcon"><img src="../GIFs/Way2Sexy.gif" height="75px"></div>
  </div>
  <br>
  <div class="mainfooter" id="dynamic-footer"></div>
  <div class="privacy-cookie-banner" id="privacyCookieBanner">
    <p>We do not use cookies on our website. For more information about how we handle your data, please visit our <a href="./privacypolicy.html">Privacy Policy</a>.</p>
    <button onclick="acceptPrivacyCookies()">Got it!</button>
  </div>
<script src="../scripts/menuItems.js"></script>
<script src="../scripts/other-articles.js"></script>
<script src="../scripts/create-footer.js"></script>
<script src="../scripts/articlesTemplate.js"></script>
</body>
</html>
`;

    document.getElementById("generatedHtml").value = generatedHtml;

    // Show link section
    const linkContainer = document.getElementById("generatedLinkContainer");
    const linkField = document.getElementById("generatedLink");
    linkField.value = finalOgUrl;
    linkContainer.style.display = "block";
};

// Copy HTML
document.getElementById("copyHtmlButton").onclick = function () {
    const generatedHtml = document.getElementById("generatedHtml");
    generatedHtml.select();
    document.execCommand("copy");
    alert("HTML code copied to clipboard!");
};

// Copy link
document.getElementById("copyLinkButton").onclick = function () {
    const linkField = document.getElementById("generatedLink");
    linkField.select();
    document.execCommand("copy");
    alert("Page link copied to clipboard!");
};

// Clear all inputs
document.getElementById("clearButton").onclick = function () {
    sectionsContainer.innerHTML = "";
    document.querySelectorAll("input, textarea").forEach(el => el.value = "");
    document.querySelectorAll('input[name="category"]').forEach(r => r.checked = false);
    document.getElementById("generatedHtml").value = "";
    document.getElementById("generatedLinkContainer").style.display = "none";
    alert("All inputs and sections have been cleared!");
};
