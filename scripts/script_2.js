  //------------------------ Write Table Data ----------------------
let songData = [
    { Artist: '50 Cent', Song: 'In The Club', Tempo: 90, KEY: 'Dbm'},
    { Artist: 'Sean Paul', Song: 'Gimme The Light', Tempo: 107, KEY: 'Dm'},
    { Artist: 'Lil Jon & The Eastside Boyz ft Ying Yang Twins', Song: 'Get Low', Tempo: 101, KEY: 'Cm'},
    { Artist: 'Camron ft Juelz Santana', Song: 'Hey Ma', Tempo: 98, KEY: 'Fm'},
    { Artist: 'Jay-Z', Song: 'I Just Wanna Love U (Give It 2 Me)', Tempo: 98, KEY: 'Em'},
    { Artist: 'Missy Elliott', Song: 'Work It', Tempo: 102, KEY: 'Fm'},
    { Artist: 'Freeway ft Peedi Crack', Song: 'Flipside', Tempo: 100, KEY: 'Fm'},
    { Artist: 'N.O.R.E.', Song: 'Nothin', Tempo: 97, KEY: 'BMaj'},
    { Artist: 'Nas', Song: 'Made You Look', Tempo: 95, KEY: 'Fm'},
    { Artist: 'Terror Squad ft Fat Joe & Remy', Song: 'Lean Back', Tempo: 95, KEY: 'Abm'},
    { Artist: 'Ja Rule ft Ashanti', Song: 'Always On Time', Tempo: 97, KEY: 'EbMaj'},
    { Artist: 'Ciara ft Petey Pablo', Song: 'Goodies', Tempo: 102, KEY: 'Fm'},
    { Artist: 'Nelly', Song: 'Hot In Herre', Tempo: 107, KEY: 'Em'},
    { Artist: 'Ludacris ft. Shawnna', Song: 'Whats Your Fantasy', Tempo: 70, KEY: 'Abm'},
    { Artist: 'Soulja Boy', Song: 'Crank That', Tempo: 70, KEY: 'Cm'},
    { Artist: 'Petey Pablo', Song: 'Freek-A-Leek', Tempo: 106, KEY: 'Gm'},
    { Artist: 'Yung Joc', Song: 'It’s Goin Down', Tempo: 85, KEY: 'Ebm'},
    { Artist: 'J-Kwon', Song: 'Tipsy', Tempo: 93, KEY: 'Fm'},
    { Artist: 'David Banner', Song: 'Play', Tempo: 95, KEY: 'Abm'},
    { Artist: '50 Cent', Song: 'Disco Inferno', Tempo: 97, KEY: 'Gm'},
    { Artist: 'Chingy', Song: 'Right Thurr', Tempo: 92, KEY: 'Dm'},
    { Artist: 'Rick Ross', Song: 'BMF (Blowing Money Fast)', Tempo: 70, KEY: 'Dm'},
    { Artist: 'Bubba Bubba Sparxxx ft Ying Yang Twins', Song: 'Ms. New Booty', Tempo: 97, KEY: 'Bm'},
    { Artist: 'Beyonce ft Sean Paul', Song: 'Baby Boy', Tempo: 91, KEY: 'Cm'},
    { Artist: 'E-40 ft Keak Da Sneak', Song: 'Tell Me When To Go', Tempo: 107, KEY: 'Abm'},
    { Artist: 'Jermaine Dupri ft Various', Song: 'Welcome To Atlanta (Coast 2 Coast Remix)', Tempo: 96, KEY: 'Ebm'},
    { Artist: 'Kanye West ft Jamie Foxx', Song: 'Gold Digger', BPM: 93, KEY: 'Dbm'},
    { Artist: 'Jagged Edge ft Nelly', Song: 'Where the Party At', Tempo: 97, KEY: 'Cm'},
    { Artist: 'Lil Wayne ft Mannie Fresh', Song: 'Go DJ', Tempo: 79, KEY: 'Gm'},
    { Artist: 'R. Kelly', Song: 'Ignition (Remix)', Tempo: 66, KEY: 'Gm'},
    { Artist: 'Eve ft Gwen Stefani', Song: 'Let Me Blow Ya Mind', Tempo: 90, KEY: 'Dbm'},
    { Artist: 'Clipse', Song: 'Grindin', Tempo: 96, KEY: 'Fm'},
    { Artist: 'Sean Paul', Song: 'Get Busy', Tempo: 100, KEY: 'Fm'},
    { Artist: 'Jim Jones', Song: 'We Fly High (Ballin)', BPM: 90, KEY: 'Fm'},
    { Artist: 'Jay-Z', Song: '99 Problems', Tempo: 93, KEY: 'Fm'},
    { Artist: 'Aaliyah', Song: 'Try Again', Tempo: 93, KEY: 'Dbm'},
    { Artist: 'Diddy, Black Rob & Mark Curry', Song: 'Bad Boy For Life', Tempo: 90, KEY: 'Em'},
    { Artist: 'Soulja Boy', Song: 'Turn My Swag On', BPM: 75, KEY: 'B'},
    { Artist: 'Snoop Dogg ft Pharrell Hot', Song: 'Drop It Like Its Hot', Tempo: 92, KEY: 'Abm'},
    { Artist: 'Twista ft Kanye West & Jamie Foxx', Song: 'Slow Jamz', Tempo: 73, KEY: 'Dm'},
    { Artist: 'Missy Elliott ft Ciara and Fatman Scoop', Song: 'Lose Control', Tempo: 126, KEY: 'Gbm'},
    { Artist: 'The Game ft 50 Cent', Song: 'How We Do', Tempo: 98, KEY: 'Fm'},
    { Artist: 'Rich Boy ft Polow Da Don', Song: 'Throw Some Ds', Tempo: 80, KEY: 'B'},
    { Artist: 'Kanye West', Song: 'Through the Wire', Tempo: 81, KEY: 'G'},
    { Artist: 'Nelly', Song: 'Country Grammar', Tempo: 81, KEY: 'Dm'},
    { Artist: 'Juvenile ft Soulja Slim', Song: 'Slow Motion', Tempo: 86, KEY: 'Cm'},
    { Artist: 'Fat Joe ft Lil Wayne', Song: 'Make It Rain', Tempo: 75, KEY: 'Em'},
    { Artist: 'Panjabi MC ft Jay-Z', Song: 'Beware Of The Boys', Tempo: 98, KEY: 'Ebm'},
    { Artist: 'M.O.P. ft Busta Rhymes, Teflon, & Remy Martin', Song: 'Ante Up (Remix)', Tempo: 94, KEY: 'Fm'},
    { Artist: 'Young Dro ft T.I.', Song: 'Shoulder Lean', Tempo: 76, KEY: 'Am'},
    { Artist: 'Kid Cudi', Song: 'Day N Nite', Tempo: 69, KEY: 'Em'},
    { Artist: 'T Pain ft Yung Joc', Song: 'Buy U A Drank', Tempo: 80, KEY: 'Db'},
    { Artist: 'Roscoe Dash ft Soulja Boy', Song: 'All the Way Turnt Up', Tempo: 61, KEY: 'Gbm'},
    { Artist: 'Lil Wayne ft Static Major', Song: 'Lollipop', Tempo: 74, KEY: 'Dm'},
    { Artist: 'Kanye West', Song: 'Flashing Lights', Tempo: 90, KEY: 'Bm'},
    { Artist: '50 Cent', Song: 'Wanksta', Tempo: 81, KEY: 'Db'},
    { Artist: 'OutKast', Song: 'Ms. Jackson', Tempo: 95, KEY: 'Em'},
    { Artist: 'Sean Paul', Song: 'We Be Burnin', Tempo: 117, KEY: 'Db'},
    { Artist: 'Jamie Foxx ft T Pain', Song: 'Blame It', Tempo: 88, KEY: 'Bm'},
    { Artist: 'Jay-Z ft Kanye West & Rihanna', Song: 'Run This Town', Tempo: 85, KEY: 'Cm'},
    { Artist: 'DJ Khaled ft Ludacris, Snoop Dogg, Rick Ross & T Pain', Song: 'All I Do Is Win', Tempo: 75, KEY: 'Dm'},
    { Artist: 'Akon ft Eminem', Song: 'Smack That', Tempo: 119, KEY: 'Fm'},
    { Artist: 'Chris Brown ft T-Pain', Song: 'Kiss Kiss', Tempo: 70, KEY: 'Bbm'},
    { Artist: '50 Cent ft Olivia', Song: 'Candy Shop', Tempo: 98, KEY: 'Gbm'},
    { Artist: 'Young Jeezy ft Jay-Z', Song: 'Go Crazy (Remix)', Tempo: 87, KEY: 'Em'},
    { Artist: 'Fabolous', Song: 'Breathe', Tempo: 83, KEY: 'Bbm'},
    { Artist: 'Xzibit', Song: 'X', Tempo: 97, KEY: 'Em'},
    { Artist: 'Pharrell ft Jay-Z', Song: 'Frontin', Tempo: 81, KEY: 'Db'},
    { Artist: 'Ciara ft Ludacris', Song: 'Oh', Tempo: 64, KEY: 'G'},
    { Artist: '50 Cent', Song: 'I Get Money', Tempo: 92, KEY: 'Gbm'},
    { Artist: 'Cham', Song: 'Ghetto Story', Tempo: 82, KEY: 'D'},
    { Artist: 'Usher', Song: 'U Dont Have To Call', Tempo: 100, KEY: 'Db'},
    { Artist: 'The Diplomats', Song: 'I Really Mean It', Tempo: 81, KEY: 'C'},
    { Artist: 'Mystikal ft Pharrell', Song: 'Shake Ya Ass', Tempo: 98, KEY: 'G'},
    { Artist: 'Rick Ross', Song: 'Hustlin', Tempo: 68, KEY: 'A'},
    { Artist: 'Ludacris', Song: 'Southern Hospitality', Tempo: 95, KEY: 'C'},
    { Artist: 'Foxx ft Lil Boosie & Webbie', Song: 'Wipe Me Down', Tempo: 85, KEY: 'Fm'},
    { Artist: 'Usher ft Lil Jon & Ludacris', Song: 'Yeah', Tempo: 105, KEY: 'D'},
    { Artist: 'Collie Buddz', Song: 'Come Around', Tempo: 77, KEY: 'Dbm'},
    { Artist: 'Justin Timberlake', Song: 'Rock Your Body', Tempo: 101, KEY: 'Em'},
    { Artist: 'R. Kelly ft Jay-Z', Song: 'Fiesta (Remix)', Tempo: 93, KEY: 'Bbm'},
    { Artist: 'Prodigy', Song: 'Keep It Thoro', Tempo: 89, KEY: 'Bbm'},
    { Artist: 'Shyne ft Barrington Levy', Song: 'Bad Boyz', Tempo: 84, KEY: 'Gbm'},
    { Artist: 'Missy Elliott', Song: 'Get Ur Freak On', Tempo: 89, KEY: 'C'},
    { Artist: 'YoungBloodz ft. Lil Jon', Song: 'Damn', Tempo: 84, KEY: 'Gbm'},
    { Artist: 'DJ Khaled ft. Akon, T.I., Rick Ross, Fat Joe, Baby & Lil Wayne', Song: 'We Takin Over', Tempo: 113, KEY: 'Gm'},
    { Artist: 'Jadakiss ft. Styles P', Song: 'We Gonna Make It', Tempo: 87, KEY: 'Dm'},
    { Artist: 'OutKast', Song: 'Hey Ya', Tempo: 80, KEY: 'Em'},
    { Artist: 'CamRon ft. Juelz Santana', Song: 'Oh Boy', Tempo: 83, KEY: 'Gb'},
    { Artist: 'Three 6 Mafia ft. Eightball and MJG & Young Buck', Song: 'Stay Fly', Tempo: 68, KEY: 'B'},
    { Artist: 'Damien Marley', Song: 'Welcome To Jamrock', Tempo: 77, KEY: 'Cm'},
    { Artist: 'Ying Yang Twins', Song: 'Salt Shaker', Tempo: 102, KEY: 'B'},
    { Artist: 'Justin Timberlake ft Clipse', Song: 'Like I Love You', Tempo: 115, KEY: 'Gbm'},
    { Artist: 'Lil Kim ft Mr. Cheeks', Song: 'The Jump Off', Tempo: 105, KEY: 'Bbm'},
    { Artist: 'Beenie Man ft Ms. Thing & Shawna', Song: 'Dude (Remix)', Tempo: 94, KEY: 'F'},
    { Artist: 'Joe Buddens', Song: 'Pump It Up', Tempo: 105, KEY: 'Gb'},
    { Artist: 'Murphy Lee', Song: 'What Da Hook Gone Be?', Tempo: 95, KEY: 'Fm'},
    { Artist: 'Trillville', Song: 'Some Cut', Tempo: 85, KEY: 'Dm'},
    { Artist: 'Cassidy ft Mary j. Blige', Song: 'Im A Hustla', Tempo: 91, KEY: 'Bm'},
    { Artist: 'Dr. Dre ft Snoop Dogg & Akon', Song: 'Kush', Tempo: 95, KEY: 'G'}
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
          var thirdCol = rows[i].cells[2].textContent.toUpperCase();
          var fourthCol = rows[i].cells[3].textContent.toUpperCase();
          if (firstCol.indexOf(filter) > -1 || secondCol.indexOf(filter) > -1 || thirdCol.indexOf(filter) > -1 || fourthCol.indexOf(filter) > -1) {
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

  //----------------------- Sort BPM --------------------
  function sortTableB() {
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
        x = rows[i].getElementsByTagName("TD")[2];
        y = rows[i + 1].getElementsByTagName("TD")[2];
        //check if the two rows should switch place:
        if (Number(x.innerHTML) > Number(y.innerHTML)) {
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
  
    //------------------------ Sort KEY --------------------
    function sortTableK() {
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
            x = rows[i].getElementsByTagName("TD")[3];
            y = rows[i + 1].getElementsByTagName("TD")[3];
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