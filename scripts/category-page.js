function myFilterFunction() {
  const input = document.getElementById('searchInput1');
  const newsContainer = document.getElementById('newsContainer');

  if (!input || !newsContainer) {
    return;
  }

  const filter = input.value.toUpperCase();
  const articles = newsContainer.getElementsByClassName('news-item');

  for (let i = 0; i < articles.length; i++) {
    const heading = articles[i].querySelector('h2');
    if (!heading) {
      continue;
    }

    const textValue = heading.textContent || heading.innerText;
    articles[i].style.display = textValue.toUpperCase().indexOf(filter) > -1 ? '' : 'none';
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const banner = document.getElementById('privacyCookieBanner');
  if (!banner) {
    return;
  }

  const accepted = document.cookie.split(';').some(function (item) {
    return item.trim().startsWith('privacyAccepted=');
  });

  if (accepted) {
    banner.style.display = 'none';
  }
});

function acceptPrivacyCookies() {
  const banner = document.getElementById('privacyCookieBanner');
  if (banner) {
    banner.style.display = 'none';
  }

  const date = new Date();
  date.setTime(date.getTime() + (180 * 24 * 60 * 60 * 1000));
  document.cookie = 'privacyAccepted=true; expires=' + date.toUTCString() + '; path=/; SameSite=Lax';
}
