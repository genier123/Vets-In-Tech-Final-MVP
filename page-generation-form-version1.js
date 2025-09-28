const sectionsContainer = document.getElementById("sectionsContainer");

document.getElementById("addSectionButton").onclick = function () {
    const h2Input = prompt("Enter H2:");
    const pInput = prompt("Enter Paragraph:");
    
    if (h2Input && pInput) {
        const section = document.createElement("section");
        section.setAttribute("draggable", "true");

        section.innerHTML = `
            <h2>${h2Input}</h2>
            <p>${pInput}</p>
            <button class="deleteSectionButton">Delete Section</button>
        `;

        sectionsContainer.appendChild(section);

        section.querySelector(".deleteSectionButton").onclick = function () {
            sectionsContainer.removeChild(section);
        };

        addDragAndDropHandlers(section);
    } else {
        alert("Both H2 and Paragraph must be provided.");
    }
};

function addDragAndDropHandlers(section) {
    section.addEventListener("dragstart", function (e) {
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
    const linkName = document.getElementById("linkName").value.replace(/\s+/g, '-'); // Replaces spaces with hyphens
    
    // Get the selected category from radio buttons
    const category = document.querySelector('input[name="category"]:checked').value;

    // Create the base URL
    const baseUrl = `https://www.hotclubtracks.com/${category}/`;

    // Construct the final URLs
    const finalOgUrl = baseUrl + linkName;

    ogUrlInput.value = finalOgUrl; // Update the Open Graph URL input with the constructed URL

    // Clone sections without delete buttons
    const sectionsClone = Array.from(sectionsContainer.children).map(section => {
        const sectionClone = section.cloneNode(true);
        const deleteButton = sectionClone.querySelector(".deleteSectionButton");
        if (deleteButton) sectionClone.removeChild(deleteButton);
        return sectionClone.outerHTML;
    }).join("");

    const generatedHtml = `
    
<!DOCTYPE html>
<html lang="en">
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- Title optimized for SEO -->
<title>${title}</title>

<!-- Meta description optimized for SEO -->
<meta name="description" content="${description}">

<!-- Meta keywords optimized for SEO -->
<meta name="keywords" content="${keywords}">

<meta name="author" content="${author}">

<!-- Open Graph data for social sharing -->
<meta property="og:title" content="${title}">
<meta property="og:description" content="${ogDescription}">
<meta property="og:url" content="${finalOgUrl}">
<meta property="og:type" content="article">
<meta property="og:image" content="${mainPicture}">

<!-- Preconnect and CSS stylesheets -->
<link rel="stylesheet" href="../newsArticles/articlesTemplate.css">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Teko:wght@700&display=swap" rel="stylesheet">

<!-- Google AdSense -->
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2474604734581000" crossorigin="anonymous"></script>

</head>
<body>
    <!-- Logo/Menu Section -->
    <header class="myMenu">
        <a href="https://www.hotclubtracks.com/">
        <h1>Hot Club Tracks</h1>
        </a>
    </header>
            <div id="buttonMenu">
                <!-- Menu buttons will be added here by JavaScript -->
            </div>
        <br>
    <!-- Logo/Menu Section End-->
<article>
    <h1>${h1}</h1>
        <div class="totalLayout">
            <div class="col-1">
                <br>
                    <img class="mainPicture" src="${mainPicture}" alt="${title}">
                <br>
                <br>
                    <p><i>By Hot Club Tracks - Published on: ${date}</i></p>
                <br>
                    <article>
                        <section>
                    ${sectionsClone} <!-- Use the cleaned-up clone here -->
                        </section>
                    </article>                                      
                <br>
                    <div class="share-buttons">
                        <a href="https://twitter.com/intent/tweet?text=%20%202024%20&url=${finalOgUrl}" class="btn social-twitter" target="_blank">Share on Twitter</a>
                        <a href="https://www.facebook.com/sharer/sharer.php?u=${finalOgUrl}" class="btn social-facebook" target="_blank">Share on Facebook</a>
                    </div>
                <br>
                        <div class="return-button-container">
                        <!-- <a href="./index.html" class="back-to-stories">Back to Home</a> -->
                        <a href="#" onclick="window.history.back(); return false;" class="back-to-stories">Return to Last Page</a>
                        </div>
                <br>
                    <div class="mainAd">
                        <a href="https://join.robinhood.com/patricg1405/"> <img class="adArtMain" src="../addimages/robinhoodaddimage1a.jpg" alt="Robinhood Ad"></a>
                    </div>
                <br>
            </div>
            <div class="col-2">
                <div class="otherStories">
                    <h1>Other Stories</h1>
                </div>
                <div class="news-container2">
                    <div id="news-item2-insert"></div>
                </div>
            </div>
        </div>
    <br>
    <hr>
        <p>
            <div class="otherAdsTitle"><h2>GIFs of the Week!</h2></div>
            <div class="otherAdsLayout">
                <div id="otherAdsIcon">
                    <img src="../GIFs/Dancing GIF-downsized.gif" alt="" height="75px">
                </div>
                <div id="otherAdsIcon">
                    <img src="../GIFs/Advertise GIF-downsized.gif" alt="" height="75px">
                </div>
                <div id="otherAdsIcon">
                    <img src="../GIFs/Wtf GIF-downsized.gif" alt="" height="75px">
                </div>
                <div id="otherAdsIcon">
                    <img src="../GIFs/Way2Sexy.gif" alt="" height="75px">
                </div>
            </div>
        </p>
        <br>
        <div class="mainfooter" id="dynamic-footer">
            <!-- The footer will be generated here by JavaScript -->
        </div>
        <!-- Privacy Cookie Statement -->
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
};

document.getElementById("copyHtmlButton").onclick = function () {
    const generatedHtml = document.getElementById("generatedHtml");
    generatedHtml.select();
    document.execCommand("copy");
    alert("HTML code copied to clipboard!");
};

document.getElementById("clearButton").onclick = function () {
    // Clear all sections in the sectionsContainer
    sectionsContainer.innerHTML = "";

    // Reset all input fields to their default values
    document.getElementById("titleInput").value = "";
    document.getElementById("main-picture").value = "";
    document.getElementById("descriptionInput").value = "";
    document.getElementById("keywordsInput").value = "";
    document.getElementById("authorInput").value = "";
    document.getElementById("ogTitleInput").value = "";
    document.getElementById("ogDescriptionInput").value = "";
    document.getElementById("ogUrlInput").value = "";
    document.getElementById("ogImageInput").value = "";
    document.getElementById("h1Input").value = "";
    document.getElementById("dateInput").value = "";
    document.getElementById("linkName").value = "";

    // Reset radio buttons (category selection)
    const categoryRadios = document.querySelectorAll('input[name="category"]');
    categoryRadios.forEach(radio => (radio.checked = false));

    // Clear the generated HTML preview
    document.getElementById("generatedHtml").value = "";

    alert("All inputs and sections have been cleared!");
};
