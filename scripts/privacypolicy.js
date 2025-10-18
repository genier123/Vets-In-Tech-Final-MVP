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