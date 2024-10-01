//---------------- Hamburg Menu --------------------------
function myHamburg() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  
//-------------------- NewMenuButton --------------------

function openNav() {
document.getElementById("myNav5").style.width = "100%";
}

function closeNav() {
document.getElementById("myNav5").style.width = "0%";
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