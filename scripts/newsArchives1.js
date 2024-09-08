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