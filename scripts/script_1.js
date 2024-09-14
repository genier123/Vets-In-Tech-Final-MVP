//------------------------ Write Table Data ----------------------
let songData = [
  {"Title": "HIGHJACK", "Artist": "A$AP Rocky ft. Jessica Pratt"},
  {"Title": "Shit Surprise", "Artist": "Chris Acker"},
  {"Title": "Babe Ruth", "Artist": "Dawn Richard & Spencer Zahn"},
  {"Title": "Electric Dreams", "Artist": "Dua Lipa"},
  {"Title": "Pop Blockbuster", "Artist": "Sabrina Carpenter"},
  {"Title": "Solo Career", "Artist": "Geordie Greep"},
  {"Title": "Unexpected Collaboration", "Artist": "A$AP Rocky & Jessica Pratt"},
  {"Title": "A Bar Song (Tipsy)", "Artist": "Shaboozey"},
  {"Title": "I Had Some Help", "Artist": "Post Malone & Morgan Wallen"},
  {"Title": "She’s Somebody’s Daughter (Reimagined)", "Artist": "Drew Baldridge"},
  {"Title": "Cowgirls", "Artist": "Morgan Wallen ft. ERNEST"},
  {"Title": "Chevrolet", "Artist": "Dustin Lynch ft. Jelly Roll"},
  {"Title": "Ain’t No Love In Oklahoma", "Artist": "Luke Combs"},
  {"Title": "Young Love & Saturday Nights", "Artist": "Chris Young"},
  {"Title": "Dirt Cheap", "Artist": "Cody Johnson"},
  {"Title": "Bulletproof", "Artist": "Nate Smith"},
  {"Title": "Love You, Miss You, Mean It", "Artist": "Luke Bryan"},
  {"Title": "Love You Again", "Artist": "Chase Matthew"},
  {"Title": "This Is My Dirt", "Artist": "Justin Moore"},
  {"Title": "Pour Me A Drink", "Artist": "Post Malone ft. Blake Shelton"},
  {"Title": "Austin", "Artist": "Dasha"},
  {"Title": "Hang Tight Honey", "Artist": "Lainey Wilson"},
  {"Title": "One Bad Habit", "Artist": "Tim McGraw"},
  {"Title": "Miles On It", "Artist": "Marshmello & Kane Brown"},
  {"Title": "I Am Not Okay", "Artist": "Jelly Roll"},
  {"Title": "Gonna Love You", "Artist": "Parmalee"},
  {"Title": "Lies Lies Lies", "Artist": "Morgan Wallen"},
  {"Title": "Beautiful As You", "Artist": "Thomas Rhett"},
  {"Title": "Messed Up As Me", "Artist": "Keith Urban"},
  {"Title": "Bigger House", "Artist": "Dan + Shay"},
  {"Title": "Sounds Like The Radio", "Artist": "Zach Top"},
  {"Title": "American Girl", "Artist": "Dierks Bentley"}
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

let table = document.querySelector("table");
let data = Object.keys(songData[0]);
generateTableHead(table, data);
generateTable(table, songData);

//-------------------- Filter Artist --------------------
  function myFunctionA() {
    var filter = event.target.value.toUpperCase();
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
document.getElementById("myBar").style.width = scrolled + "%";
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