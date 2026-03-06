//------------------------ Write Table Data ----------------------
let songData = [
  {"Title": "Messy", "Artist": "Lola Young"},
  {"Title": "Good Luck, Babe!", "Artist": "Chappell Roan"},
  {"Title": "Nokia", "Artist": "Drake"},
  {"Title": "Ordinary", "Artist": "Alex Warren"},
  {"Title": "MUTT", "Artist": "Leon Thomas"},
  {"Title": "Anxiety", "Artist": "Doechii"},
  {"Title": "Pink Pony Club", "Artist": "Chappell Roan"},
  {"Title": "Blue Strips", "Artist": "Jessie Murph"},
  {"Title": "Luther", "Artist": "Kendrick Lamar & SZA"},
  {"Title": "Daisies", "Artist": "Justin Bieber"},
  {"Title": "Tears", "Artist": "Sabrina Carpenter"},
  {"Title": "Soleao", "Artist": "Myke Towers"},
  {"Title": "Guaya", "Artist": "Rauw Alejandro"},
  {"Title": "What It Sounds Like", "Artist": "HUNTR/X"},
  {"Title": "Love Me Not", "Artist": "Ravyn Lenae"},
  {"Title": "After Hours", "Artist": "Kehlani"},
  {"Title": "MOVE", "Artist": "Adam Port, Stryv & Keinemusik"},
  {"Title": "girl so confusing", "Artist": "Charli XCX"},
  {"Title": "One Of The Girls", "Artist": "The Weeknd, JENNIE & Lily-Rose Depp"},
  {"Title": "Beautiful Things", "Artist": "Benson Boone"},
  {"Title": "Opalite", "Artist": "Taylor Swift"},
  {"Title": "The Fate of Ophelia", "Artist": "Taylor Swift"},
  {"Title": "Man I Need", "Artist": "Olivia Dean"},
  {"Title": "Folded", "Artist": "Kehlani"},
  {"Title": "Nokia", "Artist": "Drake"},
  {"Title": "DTMF", "Artist": "Bad Bunny"},
  {"Title": "BAILE INoLVIDABLE", "Artist": "Bad Bunny"},
  {"Title": "NUEVAYoL", "Artist": "Bad Bunny"},
  {"Title": "Choosin' Texas", "Artist": "Burna Boy"},
  {"Title": "Pink Pony Club", "Artist": "Chappell Roan"}
];
  
function generateTableHead(table, data) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}

function generateTable(table, data) {
  for (let element of data) {
    let row = table.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}

let table = document.getElementById("myTable");
let data = Object.keys(songData[0]);
generateTableHead(table, data);
generateTable(table, songData);

//-------------------- Filter Artist --------------------
  function myFunctionA() {
    var input = document.getElementById("myInput");
    var filter = (input ? input.value : "").toUpperCase();
    var rows = document.querySelector("#myTable").rows;
    
    for (var i = 0; i < rows.length; i++) {
        var firstCol = rows[i].cells[0].textContent.toUpperCase();
        var secondCol = rows[i].cells[1].textContent.toUpperCase();
        if (firstCol.indexOf(filter) > -1 || secondCol.indexOf(filter) > -1) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }      
    }
}

//--------------------- Sort Artist ---------------------
function sortTableA() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("myTable");
  switching = true;
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[0];
      y = rows[i + 1].getElementsByTagName("TD")[0];
      //check if the two rows should switch place:
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        //if so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

//------------------- Sort Song Name ------------------
function sortTableS() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("myTable");
  switching = true;
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[1];
      y = rows[i + 1].getElementsByTagName("TD")[1];
      //check if the two rows should switch place:
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        //if so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

//---------------- Random Add Space --------------------------
/*
window.onload = choosePic;

var myPix = new Array("./addimages/BlankAdd1.png","./addimages/BlankAdd2.png","./addimages/BlankAdd3.png","./addimages/BlankAdd4.png");

function choosePic() {
var randomNum = Math.floor(Math.random() * myPix.length);
document.getElementById("myPicture1").src = myPix[randomNum];
}
*/
//---------------- Hamburg Menu --------------------------
function myHamburg() {
var x = document.getElementById("myLinks");
if (x.style.display === "block") {
  x.style.display = "none";
} else {
  x.style.display = "block";
}
}

//---------------- Scroll Down --------------------------
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myScrolldown()};

function myScrolldown() {
var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
var scrolled = (winScroll / height) * 100;
var myBar = document.getElementById("myBar");
if (myBar) {
  myBar.style.width = scrolled + "%";
}
}

//---------------- Pop Up Model --------------------------
function myPopup() {
var popup = document.getElementById("myPopup");
popup.classList.toggle("show");
}


//-------------------- NewMenuButton --------------------

function openNav() {
  document.getElementById("myNav5").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav5").style.width = "0%";
}

//new Date().getHours();
function applyTheme() {
  const hour = 11;
  const body = document.body;

  if (hour >= 7 && hour < 19) {
      body.classList.add('light-mode');
      body.classList.remove('dark-mode');
  } else {
      body.classList.add('dark-mode');
      body.classList.remove('light-mode');
  }
}

applyTheme();

// Add Stories -----FUTURE CODE

//-------------------- Filter Articles --------------------
function myFilterFunction() {
    // Declare variables
    const input = document.getElementById('searchInput1');
    const filter = input.value.toUpperCase();
    const newsContainer = document.getElementById('newsContainer');
    const articles = newsContainer.getElementsByClassName('news-item');

    // Loop through all news articles, and hide those that don't match the search query
    for (let i = 0; i < articles.length; i++) {
        const article = articles[i];
        const heading = article.querySelector('h2');
        
        // Ensure a heading element exists before attempting to filter
        if (heading) {
            const textValue = heading.textContent || heading.innerText;
            if (textValue.toUpperCase().indexOf(filter) > -1) {
                article.style.display = ""; // Show the article
            } else {
                article.style.display = "none"; // Hide the article
            }
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
