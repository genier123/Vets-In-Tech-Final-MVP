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

const CATEGORY_PAGE_ARTICLES = {
  'celebrities.html': [
    '/celebrities/Fatman-Scoop-Passes-at-53-after-On-Stage.html',
    '/celebrities/Five-Things-You-May-Not-Know-About-Robert-Downey-Jr.html',
    '/celebrities/How-Did-Trump-Win-The-2024-Election.html',
    '/celebrities/JamesEarlJonesPassesAt93.html',
    '/celebrities/Saweetie-Accused-of-Exploiting-Jadon-Sancho-in-Viral-Debt-Scandal.html',
    '/celebrities/Sean-Diddy-Combs-Awaiting-Trial-on-Racketeering-and-Sex-Trafficking-Charges.html',
    '/celebrities/The-Drake-Kendrick-Lamar-Beef-What-Actually-Happened.html',
    '/celebrities/Was-the-Jake-Paul-vs.-Mike-Tyson-Fight-Rigged.html',
    '/celebrities/dangelo-tribute-2025.html',
    '/celebrities/diddy-sentenced-prison-2025.html',
    '/celebrities/dj-snake-ibiza-sabotage.html',
    '/celebrities/duff-vs-tisdale-feud.html',
    '/celebrities/kim-kardashian-hit-out-on-her-life.html',
    '/celebrities/skrillex-fred-again-miami-pop-up-2026.html',
    '/celebrities/tupac_9-30-23.html'
  ],
  'news.html': [
    '/news/10-Things-You-May-Not-Know-About-Donald-Trump.html',
    '/news/10-Things-You-May-Not-Know-About-Kamala-Harris.html',
    '/news/Subscription-Based-Wedding.html',
    '/news/candace-owens-claims-tyler-robinson-framed-charlie-kirk-death.html',
    '/news/coldplay-ceo-kiss-cam-scandal.html',
    '/news/things-to-know-about-jd-vance.html',
    '/news/things-to-know-about-tim-walz.html'
  ],
  'lifestyle.html': [
    '/lifestyle/2025-toyota-camry-accessories.html',
    '/lifestyle/Californias-5-Best-Secret-Places-to-Visit.html',
    '/lifestyle/EssentialItemstoPrepareforaHurricane.html',
    '/lifestyle/Floridas-5-Best-Secret-Places-to-Visit.html',
    '/lifestyle/Halloween-TikTok-Trends-This-Week.html',
    '/lifestyle/How-to-Get-Famous-on-TikTok-in-2024-2025.html',
    '/lifestyle/Max2049-collar-cameras.html',
    '/lifestyle/Top-Places-to-Visit-in-New-York-City.html',
    '/lifestyle/TopPlacesToVisitInMaine.html',
    '/lifestyle/kindle-colorsoft-review.html',
    '/lifestyle/pay-raise-calculator.html',
    '/lifestyle/rent-affordability-calculator.html',
    '/lifestyle/toyotaStout.html'
  ],
  'djsandproducers.html': [
    '/djsandproducers/best-halloween-dj-playlists-2025.html',
    '/djsandproducers/bradeazy-up-down-viral.html',
    '/djsandproducers/make-money-with-music-9-16-21.html',
    '/djsandproducers/where-to-find-the-best-melodic-beats.html'
  ],
  'lyrics.html': [
    '/lyrics/LovenOnMeJackHarlowLyrics.html'
  ]
};

document.addEventListener('DOMContentLoaded', function () {
  const pageName = window.location.pathname.split('/').pop();
  const expectedArticles = CATEGORY_PAGE_ARTICLES[pageName];
  const newsContainer = document.getElementById('newsContainer');

  if (!expectedArticles || !newsContainer) {
    return;
  }

  const existingPaths = new Set(
    Array.from(newsContainer.querySelectorAll('a[href]'))
      .map(function (anchor) {
        return toPath(anchor.getAttribute('href'));
      })
      .filter(Boolean)
  );

  expectedArticles.forEach(function (path) {
    if (existingPaths.has(path)) {
      return;
    }

    newsContainer.appendChild(createFallbackCard(path));
  });
});

function toPath(href) {
  if (!href) return null;

  try {
    return new URL(href, window.location.origin).pathname;
  } catch (error) {
    return null;
  }
}

function createFallbackCard(path) {
  const article = document.createElement('article');
  article.className = 'news-item';

  const link = document.createElement('a');
  link.className = 'news-link';
  link.href = path;

  const image = document.createElement('img');
  image.src = '/img/web-background1.jpg';
  image.alt = slugToTitle(path);

  const heading = document.createElement('h2');
  heading.textContent = slugToTitle(path);

  const meta = document.createElement('p');
  meta.textContent = 'Published Story';

  link.appendChild(image);
  link.appendChild(heading);
  link.appendChild(meta);
  article.appendChild(link);

  return article;
}

function slugToTitle(path) {
  const slug = path.split('/').pop().replace(/\.html$/i, '');
  return slug
    .replace(/[_-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, function (char) {
      return char.toUpperCase();
    });
}
