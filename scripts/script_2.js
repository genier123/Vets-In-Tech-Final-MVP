  //------------------------ Write Table Data ----------------------
let songData = [
    { Artist: '50 Cent', Song: 'In The Club'},
    { Artist: 'Sean Paul', Song: 'Gimme The Light'},
    { Artist: 'Lil Jon & The Eastside Boyz ft Ying Yang Twins', Song: 'Get Low'},
    { Artist: 'Camron ft Juelz Santana', Song: 'Hey Ma'},
    { Artist: 'Jay-Z', Song: 'I Just Wanna Love U (Give It 2 Me)'},
    { Artist: 'Missy Elliott', Song: 'Work It'},
    { Artist: 'Freeway ft Peedi Crack', Song: 'Flipside'},
    { Artist: 'N.O.R.E.', Song: 'Nothin'},
    { Artist: 'Nas', Song: 'Made You Look'},
    { Artist: 'Terror Squad ft Fat Joe & Remy', Song: 'Lean Back'},
    { Artist: 'Ja Rule ft Ashanti', Song: 'Always On Time'},
    { Artist: 'Ciara ft Petey Pablo', Song: 'Goodies'},
    { Artist: 'Nelly', Song: 'Hot In Herre'},
    { Artist: 'Ludacris ft. Shawnna', Song: 'Whats Your Fantasy'},
    { Artist: 'Soulja Boy', Song: 'Crank That'},
    { Artist: 'Petey Pablo', Song: 'Freek-A-Leek'},
    { Artist: 'Yung Joc', Song: 'It’s Goin Down'},
    { Artist: 'J-Kwon', Song: 'Tipsy'},
    { Artist: 'David Banner', Song: 'Play'},
    { Artist: '50 Cent', Song: 'Disco Inferno'},
    { Artist: 'Chingy', Song: 'Right Thurr'},
    { Artist: 'Rick Ross', Song: 'BMF (Blowing Money Fast)'},
    { Artist: 'Bubba Bubba Sparxxx ft Ying Yang Twins', Song: 'Ms. New Booty'},
    { Artist: 'Beyonce ft Sean Paul', Song: 'Baby Boy'},
    { Artist: 'E-40 ft Keak Da Sneak', Song: 'Tell Me When To Go'},
    { Artist: 'Jermaine Dupri ft Various', Song: 'Welcome To Atlanta (Coast 2 Coast Remix)'},
    { Artist: 'Kanye West ft Jamie Foxx', Song: 'Gold Digger'},
    { Artist: 'Jagged Edge ft Nelly', Song: 'Where the Party At'},
    { Artist: 'Lil Wayne ft Mannie Fresh', Song: 'Go DJ'},
    { Artist: 'R. Kelly', Song: 'Ignition (Remix)'},
    { Artist: 'Eve ft Gwen Stefani', Song: 'Let Me Blow Ya Mind'},
    { Artist: 'Clipse', Song: 'Grindin'},
    { Artist: 'Sean Paul', Song: 'Get Busy'},
    { Artist: 'Jim Jones', Song: 'We Fly High (Ballin)'},
    { Artist: 'Jay-Z', Song: '99 Problems'},
    { Artist: 'Aaliyah', Song: 'Try Again'},
    { Artist: 'Diddy, Black Rob & Mark Curry', Song: 'Bad Boy For Life'},
    { Artist: 'Soulja Boy', Song: 'Turn My Swag On'},
    { Artist: 'Snoop Dogg ft Pharrell Hot', Song: 'Drop It Like Its Hot'},
    { Artist: 'Twista ft Kanye West & Jamie Foxx', Song: 'Slow Jamz'},
    { Artist: 'Missy Elliott ft Ciara and Fatman Scoop', Song: 'Lose Control'},
    { Artist: 'The Game ft 50 Cent', Song: 'How We Do'},
    { Artist: 'Rich Boy ft Polow Da Don', Song: 'Throw Some Ds'},
    { Artist: 'Kanye West', Song: 'Through the Wire'},
    { Artist: 'Nelly', Song: 'Country Grammar'},
    { Artist: 'Juvenile ft Soulja Slim', Song: 'Slow Motion'},
    { Artist: 'Fat Joe ft Lil Wayne', Song: 'Make It Rain'},
    { Artist: 'Panjabi MC ft Jay-Z', Song: 'Beware Of The Boys'},
    { Artist: 'M.O.P. ft Busta Rhymes, Teflon, & Remy Martin', Song: 'Ante Up (Remix)'},
    { Artist: 'Young Dro ft T.I.', Song: 'Shoulder Lean'},
    { Artist: 'Kid Cudi', Song: 'Day N Nite'},
    { Artist: 'T Pain ft Yung Joc', Song: 'Buy U A Drank'},
    { Artist: 'Roscoe Dash ft Soulja Boy', Song: 'All the Way Turnt Up'},
    { Artist: 'Lil Wayne ft Static Major', Song: 'Lollipop'},
    { Artist: 'Kanye West', Song: 'Flashing Lights'},
    { Artist: '50 Cent', Song: 'Wanksta'},
    { Artist: 'OutKast', Song: 'Ms. Jackson'},
    { Artist: 'Sean Paul', Song: 'We Be Burnin'},
    { Artist: 'Jamie Foxx ft T Pain', Song: 'Blame It'},
    { Artist: 'Jay-Z ft Kanye West & Rihanna', Song: 'Run This Town'},
    { Artist: 'DJ Khaled ft Ludacris, Snoop Dogg, Rick Ross & T Pain', Song: 'All I Do Is Win'},
    { Artist: 'Akon ft Eminem', Song: 'Smack That'},
    { Artist: 'Chris Brown ft T-Pain', Song: 'Kiss Kiss'},
    { Artist: '50 Cent ft Olivia', Song: 'Candy Shop'},
    { Artist: 'Young Jeezy ft Jay-Z', Song: 'Go Crazy (Remix)'},
    { Artist: 'Fabolous', Song: 'Breathe'},
    { Artist: 'Xzibit', Song: 'X'},
    { Artist: 'Pharrell ft Jay-Z', Song: 'Frontin'},
    { Artist: 'Ciara ft Ludacris', Song: 'Oh'},
    { Artist: '50 Cent', Song: 'I Get Money'},
    { Artist: 'Cham', Song: 'Ghetto Story'},
    { Artist: 'Usher', Song: 'U Dont Have To Call'},
    { Artist: 'The Diplomats', Song: 'I Really Mean It'},
    { Artist: 'Mystikal ft Pharrell', Song: 'Shake Ya Ass'},
    { Artist: 'Rick Ross', Song: 'Hustlin'},
    { Artist: 'Ludacris', Song: 'Southern Hospitality'},
    { Artist: 'Foxx ft Lil Boosie & Webbie', Song: 'Wipe Me Down'},
    { Artist: 'Usher ft Lil Jon & Ludacris', Song: 'Yeah'},
    { Artist: 'Collie Buddz', Song: 'Come Around'},
    { Artist: 'Justin Timberlake', Song: 'Rock Your Body'},
    { Artist: 'R. Kelly ft Jay-Z', Song: 'Fiesta (Remix)'},
    { Artist: 'Prodigy', Song: 'Keep It Thoro'},
    { Artist: 'Shyne ft Barrington Levy', Song: 'Bad Boyz'},
    { Artist: 'Missy Elliott', Song: 'Get Ur Freak On'},
    { Artist: 'YoungBloodz ft. Lil Jon', Song: 'Damn'},
    { Artist: 'DJ Khaled ft. Akon, T.I., Rick Ross, Fat Joe, Baby & Lil Wayne', Song: 'We Takin Over'},
    { Artist: 'Jadakiss ft. Styles P', Song: 'We Gonna Make It'},
    { Artist: 'OutKast', Song: 'Hey Ya'},
    { Artist: 'CamRon ft. Juelz Santana', Song: 'Oh Boy'},
    { Artist: 'Three 6 Mafia ft. Eightball and MJG & Young Buck', Song: 'Stay Fly'},
    { Artist: 'Damien Marley', Song: 'Welcome To Jamrock'},
    { Artist: 'Ying Yang Twins', Song: 'Salt Shaker'},
    { Artist: 'Justin Timberlake ft Clipse', Song: 'Like I Love You'},
    { Artist: 'Lil Kim ft Mr. Cheeks', Song: 'The Jump Off'},
    { Artist: 'Beenie Man ft Ms. Thing & Shawna', Song: 'Dude (Remix)'},
    { Artist: 'Joe Buddens', Song: 'Pump It Up'},
    { Artist: 'Murphy Lee', Song: 'What Da Hook Gone Be?'},
    { Artist: 'Trillville', Song: 'Some Cut'},
    { Artist: 'Cassidy ft Mary j. Blige', Song: 'Im A Hustla'},
    { Artist: 'Dr. Dre ft Snoop Dogg & Akon', Song: 'Kush'}
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
window.onload = choosePic;

var myPix = new Array("./addimages/BlankAdd1.png","./addimages/BlankAdd2.png","./addimages/BlankAdd3.png","./addimages/BlankAdd4.png");

function choosePic() {
  var randomNum = Math.floor(Math.random() * myPix.length);
  document.getElementById("myPicture1").src = myPix[randomNum];
}

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
