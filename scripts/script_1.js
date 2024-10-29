//------------------------ Write Table Data ----------------------
let songData = [
  {"Title": "Cruel Summer", "Artist": "Taylor Swift"},
  {"Title": "Calm Down", "Artist": "Rema & Selena Gomez"},
  {"Title": "Paint The Town Red", "Artist": "Doja Cat"},
  {"Title": "Last Last", "Artist": "Burna Boy"},
  {"Title": "Vampire", "Artist": "Olivia Rodrigo"},
  {"Title": "Dance The Night", "Artist": "Dua Lipa"},
  {"Title": "Rich Flex", "Artist": "Drake & J. Cole"},
  {"Title": "Kill Bill", "Artist": "SZA"},
  {"Title": "Creepin'", "Artist": "Metro Boomin, The Weeknd & 21 Savage"},
  {"Title": "Snooze", "Artist": "SZA"},
  {"Title": "Seven", "Artist": "Jung Kook ft. Latto"},
  {"Title": "Bad Idea Right?", "Artist": "Olivia Rodrigo"},
  {"Title": "Players", "Artist": "Coi Leray"},
  {"Title": "Escapism", "Artist": "Raye ft. 070 Shake"},
  {"Title": "Flowers", "Artist": "Miley Cyrus"},
  {"Title": "Shivers", "Artist": "Ed Sheeran"},
  {"Title": "Heart First", "Artist": "Kelsea Ballerini"},
  {"Title": "Boys a liar Pt. 2", "Artist": "PinkPantheress & Ice Spice"},
  {"Title": "Rich Girl", "Artist": "Gwen Stefani"},
  {"Title": "I Can See You", "Artist": "Taylor Swift"},
  {"Title": "Californian Soil", "Artist": "London Grammar"},
  {"Title": "Dancing On My Own", "Artist": "Robyn (remix)"},
  {"Title": "Let Me Go", "Artist": "Alesso & OneRepublic"},
  {"Title": "Thank You", "Artist": "JoJo"},
  {"Title": "All My Life", "Artist": "Lil Durk & J. Cole"},
  {"Title": "They Not Like Us", "Artist": "Kendrick Lamar"},
  {"Title": "Snooze", "Artist": "SZA"},
  {"Title": "Humble", "Artist": "Kendrick Lamar"},
  {"Title": "Unholy", "Artist": "Sam Smith & Kim Petras"},
  {"Title": "Superhero (Heroes & Villains)", "Artist": "Metro Boomin ft. Future & Chris Brown"},
  {"Title": "Peaches", "Artist": "Justin Bieber ft. Daniel Caesar & Giveon"},
  {"Title": "Big Energy", "Artist": "Latto"},
  {"Title": "Watermelon Sugar", "Artist": "Harry Styles"},
  {"Title": "Good 4 U", "Artist": "Olivia Rodrigo"},
  {"Title": "Stay", "Artist": "The Kid LAROI & Justin Bieber"},
  {"Title": "Levitating", "Artist": "Dua Lipa"},
  {"Title": "Bad Habits", "Artist": "Ed Sheeran"},
  {"Title": "Anti-Hero", "Artist": "Taylor Swift"},
  {"Title": "Love Nwantiti", "Artist": "CKay"},
  {"Title": "Kiss Me More", "Artist": "Doja Cat ft. SZA"},
  {"Title": "As It Was", "Artist": "Harry Styles"},
  {"Title": "Need to Know", "Artist": "Doja Cat"},
  {"Title": "My Universe", "Artist": "Coldplay & BTS"},
  {"Title": "Montero (Call Me By Your Name)", "Artist": "Lil Nas X"},
  {"Title": "Shivers", "Artist": "Ed Sheeran"},
  {"Title": "Industry Baby", "Artist": "Lil Nas X & Jack Harlow"},
  {"Title": "Ghost", "Artist": "Justin Bieber"},
  {"Title": "Take My Breath", "Artist": "The Weeknd"},
  {"Title": "Break My Heart", "Artist": "Dua Lipa"},
  {"Title": "Positions", "Artist": "Ariana Grande"},
  {"Title": "Demeanor", "Artist": "Joyner Lucas ft. Lil Durk"}
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


// Add Stories
const newsContainer = document.getElementById("newsContainer");
const newsItems = JSON.parse(localStorage.getItem("newsItems")) || [];

newsItems.forEach(item => {
    const article = document.createElement("article");
    article.className = "news-item";

    const link = document.createElement("a");
    link.href = item.linkUrl;
    link.className = "news-link2";

    const img = document.createElement("img");
    img.src = item.imageSrc;
    img.alt = item.title;

    const title = document.createElement("h2");
    title.textContent = item.title;

    link.appendChild(img);
    link.appendChild(title);
    article.appendChild(link);

    const dateElement = document.createElement("p");
    dateElement.textContent = `Published: ${new Date(item.datePublished).toLocaleString()}`;
    article.appendChild(dateElement);

    newsContainer.prepend(article);  // Add new item to the top of the container
});