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