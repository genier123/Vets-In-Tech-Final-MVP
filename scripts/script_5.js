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