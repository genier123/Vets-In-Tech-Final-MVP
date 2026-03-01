(function () {
  function formatDate(isoDate) {
    const d = new Date(isoDate + 'T12:00:00');
    return d.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function renderArchiveList(query) {
    const listEl = document.getElementById('archiveList');
    const countEl = document.getElementById('archiveCount');
    if (!listEl || !countEl || !Array.isArray(ARCHIVE_ARTICLES)) {
      return;
    }

    const q = (query || '').trim().toLowerCase();
    const sorted = ARCHIVE_ARTICLES.slice().sort(function (a, b) {
      if (a.date === b.date) {
        return a.title.localeCompare(b.title);
      }
      return b.date.localeCompare(a.date);
    });

    const filtered = sorted.filter(function (article) {
      if (!q) return true;
      const haystack = (article.title + ' ' + article.date + ' ' + article.url).toLowerCase();
      return haystack.indexOf(q) !== -1;
    });

    countEl.textContent = filtered.length + ' article' + (filtered.length === 1 ? '' : 's') + ' found';

    if (!filtered.length) {
      listEl.innerHTML = '<p>No articles match your search.</p>';
      return;
    }

    listEl.innerHTML = filtered.map(function (article) {
      return (
        '<article class="archiveItem">' +
          '<a class="archiveItemLink" href="' + escapeHtml(article.url) + '">' +
            '<img class="archiveItemImage" src="' + escapeHtml(article.image) + '" alt="' + escapeHtml(article.title) + '">' +
            '<div>' +
              '<h2 class="archiveItemTitle">' + escapeHtml(article.title) + '</h2>' +
              '<p class="archiveItemDate">Published: ' + escapeHtml(formatDate(article.date)) + '</p>' +
            '</div>' +
          '</a>' +
        '</article>'
      );
    }).join('');
  }

  function initSearch() {
    const input = document.getElementById('searchInput');
    if (!input) return;

    input.addEventListener('input', function (event) {
      renderArchiveList(event.target.value);
    });

    renderArchiveList('');
  }

  function initPrivacyBanner() {
    var banner = document.getElementById('privacyCookieBanner');
    if (!banner) return;

    if (document.cookie.split(';').some(function (item) {
      return item.trim().indexOf('privacyAccepted=') === 0;
    })) {
      banner.style.display = 'none';
    }

    window.acceptPrivacyCookies = function () {
      banner.style.display = 'none';
      var date = new Date();
      date.setTime(date.getTime() + (180 * 24 * 60 * 60 * 1000));
      document.cookie = 'privacyAccepted=true; expires=' + date.toUTCString() + '; path=/; SameSite=Lax';
    };
  }

  document.addEventListener('DOMContentLoaded', function () {
    initSearch();
    initPrivacyBanner();
  });
})();
