//---------------- Hamburg Menu -------------------------
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

//-------------------- Filter Articles --------------------
function myFilterFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('searchInput1');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[1];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
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