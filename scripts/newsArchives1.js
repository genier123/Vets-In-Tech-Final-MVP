function filterStories() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const newsList = document.getElementById('newsList');
    const newsItems = newsList.getElementsByClassName('news-item');
  
    for (let i = 0; i < newsItems.length; i++) {
      const titleElement = newsItems[i].querySelector('.news-title h3');
      const titleText = titleElement.textContent || titleElement.innerText;
  
      if (titleText.toLowerCase().indexOf(filter) > -1) {
        newsItems[i].style.display = '';
      } else {
        newsItems[i].style.display = 'none';
      }
    }
  }

// Check if the cookie policy has already been accepted
document.addEventListener("DOMContentLoaded", function() {
  if (document.cookie.split(';').some((item) => item.trim().startsWith('privacyAccepted='))) {
    document.getElementById("privacyCookieBanner").style.display = "none";
  }
});

// Accept and set cookie for 180 days
function acceptPrivacyCookies() {
  const banner = document.getElementById("privacyCookieBanner");
  banner.style.display = "none";

  const date = new Date();
  date.setTime(date.getTime() + (180*24*60*60*1000)); // 180 days
  document.cookie = "privacyAccepted=true; expires=" + date.toUTCString() + "; path=/; SameSite=Lax";
}