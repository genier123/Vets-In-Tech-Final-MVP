// Select the container with id="news-item2-insert"
const container = document.getElementById("news-item2-insert");

// The exact HTML you want to inject
const htmlContent = `
<article class="news-item2">
    <a href="https://www.hotclubtracks.com/bestpartysongsofthe2000s" class="news-link2">
        <img src="../img/Top_2000s_Icon.jpg" alt="Eminem">
        <h2>Best 2000s Party Songs</h2>
    </a>
</article>
<br>
<article class="news-item2">
    <a href="https://www.hotclubtracks.com/best90ssongs" class="news-link2">
        <img src="/img/Top_90s_Icon.jpg" alt="Tupac">
        <h2>Best 90s Party Songs</h2>
    </a>
</article>
<br>
<article class="news-item2">
    <a href="https://www.hotclubtracks.com/pay-raise-calculator.html" class="news-link2">
        <img src="https://cdn.pixabay.com/photo/2015/02/02/18/58/money-621349_960_720.jpg" alt="Pay raise">
        <h2>Loven On Me Lyrics</h2>
    </a>
</article>
<br>
<article class="news-item2">
    <a href="https://www.hotclubtracks.com/lyrics/LovenOnMeJackHarlowLyrics.html" class="news-link2">
        <img src="https://upload.wikimedia.org/wikipedia/en/7/72/%22Lovin_On_Me%22_by_Jack_Harlow_-_cover_art.png" alt="Pay raise">
        <h2>Loven On Me Lyrics</h2>
    </a>
</article>
`;

// Insert into the container
if (container) {
    container.innerHTML += htmlContent;
}
