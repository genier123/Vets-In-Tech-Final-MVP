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


  //-------------------- Shareto Facebook --------------------
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
    fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
