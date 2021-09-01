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