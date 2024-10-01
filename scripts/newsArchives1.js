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

   // Function to show the cookie consent banner
 function showPrivacyCookieBanner() {
  if (!localStorage.getItem('privacyCookiesAccepted')) {
      document.getElementById('privacyCookieBanner').style.display = 'block';
  }
}

// Function to handle cookie acceptance
function acceptPrivacyCookies() {
  localStorage.setItem('privacyCookiesAccepted', 'true');
  document.getElementById('privacyCookieBanner').style.display = 'none';
}

// Show the banner on page load
window.onload = showPrivacyCookieBanner;