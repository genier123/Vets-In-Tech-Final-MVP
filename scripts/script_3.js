//------------------------ Write Table Data ----------------------
  let songData = [
    { Artist: 'DJ Jazzy Jeff & The Fresh Prince', Song: 'Summertime'},
    { Artist: 'Darude', Song: 'Sandstorm'},
    { Artist: 'Juvenile', Song: 'Back That Thang Up'},
    { Artist: 'La Bouche', Song: 'Be My Lover'},
    { Artist: 'SNAP', Song: 'The Power'},
    { Artist: 'Unlimited', Song: 'Twilight Zone'},
    { Artist: 'Tupac ft. Dr. Dre', Song: 'California Love'},
    { Artist: 'Daft Punk', Song: 'One More Time'},
    { Artist: 'DMX', Song: 'Ruff Ryders Anthem'},
    { Artist: 'ATB', Song: '9pm (Til I Come)'},
    { Artist: 'Dr. Dre ft. Snoop Dogg', Song: 'Nuthin’ But A G Thang'},
    { Artist: 'Black Box', Song: 'Everybody, Everybody'},
    { Artist: 'Busta Rhymes', Song: 'Put Your Hands Where My Eyes Can See'},
    { Artist: 'Haddaway', Song: 'What Is Love'},
    { Artist: 'Notorious B.I.G.', Song: 'Hypnotize'},
    { Artist: 'SNAP', Song: 'Rhythm Is A Dancer'},
    { Artist: 'Big Punisher ft. Joe', Song: 'Still Not A Player'},
    { Artist: 'Jamiroquai', Song: 'Virtual Insanity'},
    { Artist: 'Dr. Dre ft. Snoop Dogg', Song: 'Nuthin But A G Thang'},
    { Artist: 'Jay Z ft Amil & Ja Rule', Song: 'Can I Get A...'},
    { Artist: 'House of Pain', Song: 'Jump Around'},
    { Artist: 'Faithless', Song: 'Insomnia'},
    { Artist: 'Jay Z ft Beanie Sigel', Song: 'Do It Again'},
    { Artist: 'Robin S', Song: 'Show Me Love'},
    { Artist: 'Camron', Song: 'Horse & Carriage'},
    { Artist: 'C+C Music Factory', Song: 'Everybody Dance Now'},
    { Artist: 'Montel Jordan', Song: 'This Is How We Do It'},
    { Artist: 'CeCe Peninston', Song: 'Finally'},
    { Artist: 'Puff Daddy ft Mase', Song: 'Cant Nobody Hold Me Down'},
    { Artist: 'Crystal Waters', Song: '100% Pure Love'},
    { Artist: 'Wreck-X-N-Effect', Song: 'Rump Shaker'},
    { Artist: 'Zombie Nation', Song: 'Kernkraft 400'},
    { Artist: '112 ft Notorious B.I.G. & Mase', Song: 'Only You'},
    { Artist: 'Ini Kamazo', Song: 'Here Comes the Hot Stepper'},
    { Artist: 'Technotronic', Song: 'Pump Up The Jam'},
    { Artist: 'Tupac ft Snoop Dogg', Song: '2 Of Amerikaz Most Wanted'},
    { Artist: 'The Outhere Brothers', Song: 'Boom Boom Boom'},
    { Artist: 'Ol Dirty Bastard', Song: 'Got Your Money'},
    { Artist: 'Daft Punk', Song: 'Around The World'},
    { Artist: 'C & C Music Factory', Song: 'Robi Robs Boriqua Anthem'},
    { Artist: 'Daniel Bedingfield', Song: 'Gotta Get Thru This'},
    { Artist: 'Boyz II Men', Song: 'Motownphilly'},
    { Artist: 'Deee-Lite', Song: 'Groove Is In The Heart'},
    { Artist: 'Janet Jackson', Song: 'Thats The Way Love Goes'},
    { Artist: 'Fatboy Slim', Song: 'Praise You'},
    { Artist: 'TLC', Song: 'No Scrubs'},
    { Artist: 'Ian Van Dahl', Song: 'Castles In The Sky'},
    { Artist: 'Next', Song: 'Too Close'},
    { Artist: 'Melanie C', Song: 'I Turn To You (Hex Hector Vocal Edit)'},
    { Artist: 'Black Box', Song: 'Strike It Up'},
    { Artist: 'Usher', Song: 'You Make Me Wanna'},
    { Artist: 'Ace Of Base', Song: 'Beautiful Life'},
    { Artist: 'Naughty By Nature', Song: 'O.P.P.'},
    { Artist: 'Paul Johnson', Song: 'Get Get Down'},
    { Artist: 'Eminem', Song: 'My Name Is'},
    { Artist: 'Black Sheep', Song: 'The Choice Is Yours'},
    { Artist: 'Master P', Song: 'Make Em Say Uhh!'},
    { Artist: 'Jay z ft UGK', Song: 'Big Pimpin'},
    { Artist: 'Bell Biv DeVoe', Song: 'Bell Biv DeVoe'},
    { Artist: 'Cajmere', Song: 'Percolator'},
    { Artist: 'Ice Cube', Song: 'You Can Do It'},
    { Artist: 'Eric B & Rakim ', Song: 'Juice (Know The Ledge)'},
    { Artist: 'Mariah Carey', Song: 'Fantasy'},
    { Artist: 'Missy Elliott', Song: 'The Rain (Supa Dupa Fly)'},
    { Artist: 'Aaliyah', Song: 'Are You That Somebody'},
    { Artist: 'Crystal Waters', Song: 'Gypsy Woman (Shes Homeless)'},
    { Artist: 'Bone Thugs-N-Harmony', Song: '1st Of The Month'},
    { Artist: 'Michael Jackson', Song: 'Remember the Time'},
    { Artist: 'Bad Yard Club', Song: 'Party In De Ghetto'},
    { Artist: 'Eiffel 65', Song: 'Blue (Da Ba Dee)'},
    { Artist: 'Ginuwine', Song: 'Pony'},
    { Artist: 'Blackstreet', Song: 'No Diggity'},
    { Artist: 'Warren G & Nate Dogg', Song: 'Regulate'},
    { Artist: 'Mobb Deep', Song: 'Shook Ones Pt. II'},
    { Artist: 'Junior M.A.F.I.A.', Song: 'Get Money'},
    { Artist: 'Dr. Dre', Song: 'Dre Day'},
    { Artist: 'C-Murder', Song: 'Down for My N..s'},
    { Artist: 'Ghost Town DJs', Song: 'My Boo'},
    { Artist: 'The Notorious B.I.G. ft. Puff Daddy & Mase', Song: 'Mo Money Mo Problems'},
    { Artist: 'Snow', Song: 'Informer'},
    { Artist: 'DJ Kool', Song: 'Let Me Clear My Throat'},
    { Artist: 'Mark Morisson', Song: 'Return of The Mack'},
    { Artist: 'Sir Mix-A-Lot', Song: 'Baby Got Back'},
    { Artist: 'Ice Cube', Song: 'It Was A Good Day'},
    { Artist: 'Snoop Dogg', Song: 'Gin & Juice'},
    { Artist: 'Captain Hollywood Project', Song: 'More and More'},
    { Artist: 'Salt-N-Pepa ft. En Vogue', Song: 'Whatta Man'},
    { Artist: 'Corona', Song: 'Rhythm Of The Night'},
    { Artist: 'Lauryn Hill', Song: 'Doo Wop (That Thing)'},
    { Artist: 'Culture Beat', Song: 'Mr. Vain'},
    { Artist: 'LL Cool J', Song: 'Mama Said Knock You Out'},
    { Artist: 'Ultra Nate', Song: 'Free'},
    { Artist: 'Wu-Tang Clan', Song: 'C.R.E.A.M.'},
    { Artist: 'Soul II Soul', Song: 'Back To Life'},
    { Artist: 'A Tribe Called Quest', Song: 'Scenario'},
    { Artist: 'K.W.S.', Song: 'Please Dont Go'},
    { Artist: 'Coolio ft. LV', Song: 'Gangsta’s Paradise'},
    { Artist: 'The KLF', Song: '3AM Eternal'},
    { Artist: 'Le Click', Song: 'Tonight Is The Night'},
    { Artist: 'Positive', Song: 'I Got A Man'}
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
  
  
  //Weather Data//
  const apiKey = 'ea2b609d2a3febe5429cacc8e5dcc5f7';  // Replace with your actual API key
  const apiUrl = 'https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid=' + apiKey;
  
  const locationInput = document.getElementById('locationInput');
  const searchButton = document.getElementById('searchButton');
  const locationElement = document.getElementById('location');
  const temperatureElement = document.getElementById('temperature');
  const descriptionElement = document.getElementById('description');
  
  searchButton.addEventListener('click', () => {
      const location = locationInput.value;
      if (location) {
          fetchWeather(location);
      }
  });
  
  function fetchWeather(location) {
      const url = `${apiUrl}&q=${location}&units=metric`;
      fetch(url)
          .then(response => response.json())
          .then(data => {
              locationElement.textContent = data.name;
              temperatureElement.textContent = `${Math.round(data.main.temp)}°C`;
              descriptionElement.textContent = data.weather[0].description;
          })
          .catch(error => {
              console.error('Error fetching weather data:', error);
          });
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