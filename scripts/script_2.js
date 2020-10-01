  //------------------------ Write Table Data ----------------------
let songData = [
    { Artist: '50 Cent', Song: 'In The Club', BPM: 90, KEY: 'Dbm'},
    { Artist: 'Sean Paul', Song: 'Gimme The Light', BPM: 107, KEY: 'Dm'},
    { Artist: 'Lil Jon & The Eastside Boyz ft Ying Yang Twins', Song: 'Get Low', BPM: 101, KEY: 'Cm'},
    { Artist: 'Camron ft Juelz Santana', Song: 'Hey Ma', BPM: 98, KEY: 'Fm'},
    { Artist: 'Jay-Z', Song: 'I Just Wanna Love U (Give It 2 Me)', BPM: 98, KEY: 'Em'},
    { Artist: 'Missy Elliott', Song: 'Work It', BPM: 102, KEY: 'Fm'},
    { Artist: 'Freeway ft Peedi Crack', Song: 'Flipside', BPM: 100, KEY: 'Fm'},
    { Artist: 'N.O.R.E.', Song: 'Nothin', BPM: 97, KEY: 'BMaj'},
    { Artist: 'Nas', Song: 'Made You Look', BPM: 95, KEY: 'Fm'},
    { Artist: 'Terror Squad ft Fat Joe & Remy', Song: 'Lean Back', BPM: 95, KEY: 'Abm'},
    { Artist: 'Ja Rule ft Ashanti', Song: 'Always On Time', BPM: 97, KEY: 'EbMaj'},
    { Artist: 'Ciara ft Petey Pablo', Song: 'Goodies', BPM: 102, KEY: 'Fm'},
    { Artist: 'Nelly', Song: 'Hot In Herre', BPM: 107, KEY: 'Em'},
    { Artist: 'Ludacris ft. Shawnna', Song: 'Whats Your Fantasy', BPM: 70, KEY: 'Abm'},
    { Artist: 'Soulja Boy', Song: 'Crank That', BPM: 70, KEY: 'Cm'},
    { Artist: 'Petey Pablo', Song: 'Freek-A-Leek', BPM: 106, KEY: 'Gm'},
    { Artist: 'Yung Joc', Song: 'It’s Goin Down', BPM: 85, KEY: 'Ebm'},
    { Artist: 'J-Kwon', Song: 'Tipsy', BPM: 93, KEY: 'Fm'},
    { Artist: 'David Banner', Song: 'Play', BPM: 95, KEY: 'Abm'},
    { Artist: '50 Cent', Song: 'Disco Inferno', BPM: 97, KEY: 'Gm'},
    { Artist: 'Chingy', Song: 'Right Thurr', BPM: 92, KEY: 'Dm'},
    { Artist: 'Rick Ross', Song: 'BMF (Blowing Money Fast)', BPM: 70, KEY: 'Dm'},
    { Artist: 'Bubba Bubba Sparxxx ft Ying Yang Twins', Song: 'Ms. New Booty', BPM: 97, KEY: 'Bm'},
    { Artist: 'Beyonce ft Sean Paul', Song: 'Baby Boy', BPM: 91, KEY: 'Cm'},
    { Artist: 'E-40 ft Keak Da Sneak', Song: 'Tell Me When To Go', BPM: 107, KEY: 'Abm'},
    { Artist: 'Jermaine Dupri ft Various', Song: 'Welcome To Atlanta (Coast 2 Coast Remix)', BPM: 96, KEY: 'Ebm'},
    { Artist: 'Kanye West ft Jamie Foxx', Song: 'Gold Digger', BPM: 93, KEY: 'Dbm'},
    { Artist: 'Jagged Edge ft Nelly', Song: 'Where the Party At', BPM: 97, KEY: 'Cm'},
    { Artist: 'Lil Wayne ft Mannie Fresh', Song: 'Go DJ', BPM: 79, KEY: 'Gm'},
    { Artist: 'R. Kelly', Song: 'Ignition (Remix)', BPM: 66, KEY: 'Gm'},
    { Artist: 'Eve ft Gwen Stefani', Song: 'Let Me Blow Ya Mind', BPM: 90, KEY: 'Dbm'},
    { Artist: 'Clipse', Song: 'Grindin', BPM: 96, KEY: 'Fm'},
    { Artist: 'Sean Paul', Song: 'Get Busy', BPM: 100, KEY: 'Fm'},
    { Artist: 'Jim Jones', Song: 'We Fly High (Ballin)', BPM: 90, KEY: 'Fm'},
    { Artist: 'Jay-Z', Song: '99 Problems', BPM: 93, KEY: 'Fm'},
    { Artist: 'Aaliyah', Song: 'Try Again', BPM: 93, KEY: 'Dbm'},
    { Artist: 'Diddy, Black Rob & Mark Curry', Song: 'Bad Boy For Life', BPM: 90, KEY: 'Em'},
    { Artist: 'Soulja Boy', Song: 'Turn My Swag On', BPM: 75, KEY: 'B'},
    { Artist: 'Snoop Dogg ft Pharrell Hot', Song: 'Drop It Like Its Hot', BPM: 92, KEY: 'Abm'},
    { Artist: 'Twista ft Kanye West & Jamie Foxx', Song: 'Slow Jamz', BPM: 73, KEY: 'Dm'},
    { Artist: 'Missy Elliott ft Ciara and Fatman Scoop', Song: 'Lose Control', BPM: 126, KEY: 'Gbm'},
    { Artist: 'The Game ft 50 Cent', Song: 'How We Do', BPM: 98, KEY: 'Fm'},
    { Artist: 'Rich Boy ft Polow Da Don', Song: 'Throw Some Ds', BPM: 80, KEY: 'B'},
    { Artist: 'Kanye West', Song: 'Through the Wire', BPM: 81, KEY: 'G'},
    { Artist: 'Nelly', Song: 'Country Grammar', BPM: 81, KEY: 'Dm'},
    { Artist: 'Juvenile ft Soulja Slim', Song: 'Slow Motion', BPM: 86, KEY: 'Cm'},
    { Artist: 'Fat Joe ft Lil Wayne', Song: 'Make It Rain', BPM: 75, KEY: 'Em'},
    { Artist: 'Panjabi MC ft Jay-Z', Song: 'Beware Of The Boys', BPM: 98, KEY: 'Ebm'},
    { Artist: 'M.O.P. ft Busta Rhymes, Teflon, & Remy Martin', Song: 'Ante Up (Remix)', BPM: 94, KEY: 'Fm'},
    { Artist: 'Young Dro ft T.I.', Song: 'Shoulder Lean', BPM: 76, KEY: 'Am'},
    { Artist: 'Kid Cudi', Song: 'Day N Nite', BPM: 69, KEY: 'Em'},
    { Artist: 'T Pain ft Yung Joc', Song: 'Buy U A Drank', BPM: 80, KEY: 'Db'},
    { Artist: 'Roscoe Dash ft Soulja Boy', Song: 'All the Way Turnt Up', BPM: 61, KEY: 'Gbm'},
    { Artist: 'Lil Wayne ft Static Major', Song: 'Lollipop', BPM: 74, KEY: 'Dm'},
    { Artist: 'Kanye West', Song: 'Flashing Lights', BPM: 90, KEY: 'Bm'},
    { Artist: '50 Cent', Song: 'Wanksta', BPM: 81, KEY: 'Db'},
    { Artist: 'OutKast', Song: 'Ms. Jackson', BPM: 95, KEY: 'Em'},
    { Artist: 'Sean Paul', Song: 'We Be Burnin', BPM: 117, KEY: 'Db'},
    { Artist: 'Jamie Foxx ft T Pain', Song: 'Blame It', BPM: 88, KEY: 'Bm'},
    { Artist: 'Jay-Z ft Kanye West & Rihanna', Song: 'Run This Town', BPM: 85, KEY: 'Cm'},
    { Artist: 'DJ Khaled ft Ludacris, Snoop Dogg, Rick Ross & T Pain', Song: 'All I Do Is Win', BPM: 75, KEY: 'Dm'},
    { Artist: 'Akon ft Eminem', Song: 'Smack That', BPM: 119, KEY: 'Fm'},
    { Artist: 'Chris Brown ft T-Pain', Song: 'Kiss Kiss', BPM: 70, KEY: 'Bbm'},
    { Artist: '50 Cent ft Olivia', Song: 'Candy Shop', BPM: 98, KEY: 'Gbm'},
    { Artist: 'Young Jeezy ft Jay-Z', Song: 'Go Crazy (Remix)', BPM: 87, KEY: 'Em'},
    { Artist: 'Fabolous', Song: 'Breathe', BPM: 83, KEY: 'Bbm'},
    { Artist: 'Xzibit', Song: 'X', BPM: 97, KEY: 'Em'},
    { Artist: 'Pharrell ft Jay-Z', Song: 'Frontin', BPM: 81, KEY: 'Db'},
    { Artist: 'Ciara ft Ludacris', Song: 'Oh', BPM: 64, KEY: 'G'},
    { Artist: '50 Cent', Song: 'I Get Money', BPM: 92, KEY: 'Gbm'},
    { Artist: 'Cham', Song: 'Ghetto Story', BPM: 82, KEY: 'D'},
    { Artist: 'Usher', Song: 'U Dont Have To Call', BPM: 100, KEY: 'Db'},
    { Artist: 'The Diplomats', Song: 'I Really Mean It', BPM: 81, KEY: 'C'},
    { Artist: 'Mystikal ft Pharrell', Song: 'Shake Ya Ass', BPM: 98, KEY: 'G'},
    { Artist: 'Rick Ross', Song: 'Hustlin', BPM: 68, KEY: 'A'},
    { Artist: 'Ludacris', Song: 'Southern Hospitality', BPM: 95, KEY: 'C'},
    { Artist: 'Foxx ft Lil Boosie & Webbie', Song: 'Wipe Me Down', BPM: 85, KEY: 'Fm'},
    { Artist: 'Usher ft Lil Jon & Ludacris', Song: 'Yeah', BPM: 105, KEY: 'D'},
    { Artist: 'Collie Buddz', Song: 'Come Around', BPM: 77, KEY: 'Dbm'},
    { Artist: 'Justin Timberlake', Song: 'Rock Your Body', BPM: 101, KEY: 'Em'},
    { Artist: 'R. Kelly ft Jay-Z', Song: 'Fiesta (Remix)', BPM: 93, KEY: 'Bbm'},
    { Artist: 'Prodigy', Song: 'Keep It Thoro', BPM: 89, KEY: 'Bbm'},
    { Artist: 'Shyne ft Barrington Levy', Song: 'Bad Boyz', BPM: 84, KEY: 'Gbm'},
    { Artist: 'Missy Elliott', Song: 'Get Ur Freak On', BPM: 89, KEY: 'C'},
    { Artist: 'YoungBloodz ft. Lil Jon', Song: 'Damn', BPM: 84, KEY: 'Gbm'},
    { Artist: 'DJ Khaled ft. Akon, T.I., Rick Ross, Fat Joe, Baby & Lil Wayne', Song: 'We Takin Over', BPM: 113, KEY: 'Gm'},
    { Artist: 'Jadakiss ft. Styles P', Song: 'We Gonna Make It', BPM: 87, KEY: 'Dm'},
    { Artist: 'OutKast', Song: 'Hey Ya', BPM: 80, KEY: 'Em'},
    { Artist: 'CamRon ft. Juelz Santana', Song: 'Oh Boy', BPM: 83, KEY: 'Gb'},
    { Artist: 'Three 6 Mafia ft. Eightball and MJG & Young Buck', Song: 'Stay Fly', BPM: 68, KEY: 'B'},
    { Artist: 'Damien Marley', Song: 'Welcome To Jamrock', BPM: 77, KEY: 'Cm'},
    { Artist: 'Ying Yang Twins', Song: 'Salt Shaker', BPM: 102, KEY: 'B'},
    { Artist: 'Justin Timberlake ft Clipse', Song: 'Like I Love You', BPM: 115, KEY: 'Gbm'},
    { Artist: 'Lil Kim ft Mr. Cheeks', Song: 'The Jump Off', BPM: 105, KEY: 'Bbm'},
    { Artist: 'Beenie Man ft Ms. Thing & Shawna', Song: 'Dude (Remix)', BPM: 94, KEY: 'F'},
    { Artist: 'Joe Buddens', Song: 'Pump It Up', BPM: 105, KEY: 'Gb'},
    { Artist: 'Murphy Lee', Song: 'What Da Hook Gone Be?', BPM: 95, KEY: 'Fm'},
    { Artist: 'Trillville', Song: 'Some Cut', BPM: 85, KEY: 'Dm'},
    { Artist: 'Cassidy ft Mary j. Blige', Song: 'Im A Hustla', BPM: 91, KEY: 'Bm'},
    { Artist: 'Dr. Dre ft Snoop Dogg & Akon', Song: 'Kush', BPM: 95, KEY: 'G'}
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
