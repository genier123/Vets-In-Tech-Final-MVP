  //------------------------ Write Table Data ----------------------
  let songData = [
    { Artist: 'Drake ft Lil Durk', Song: 'Laugh Now Cry Later', BPM: 67, KEY: '8A'},
    { Artist: 'DJ Khaled ft Drake', Song: 'POPSTAR', BPM: 82, KEY: '5A'},
    { Artist: 'Ty Dolla Sign ft Kanye West & FKY Twigs', Song: 'Ego Death', BPM: 111, KEY: '2A'},
    { Artist: '2 Chainz ft Lil Wayne', Song: 'Money Maker', BPM: 70, KEY: '8A'},
    { Artist: 'Saweetie ft Post Malone, DaBaby & Jack Harlow', Song: 'Tap In', BPM: 100, KEY: '5A'},
    { Artist: 'DaBaby ft Young Thug', Song: 'BLIND', BPM: 82, KEY: '9A'},
    { Artist: 'Big Sean ft Travis Scott', Song: 'Lithuania', BPM: 76, KEY: '11A'},
    { Artist: 'Puri & Lisa Mercedez ft Jhorrmountian & Adje', Song: 'Cono', BPM: 100, KEY: '8A'},
    { Artist: 'Dr Fresh & LO99', Song: 'Ravewerk', BPM: 126, KEY: '5A'},
    { Artist: 'ManyFew', Song: 'Get Close', BPM: 125, KEY: '1A'},
    { Artist: 'Steve Aoki & KREAM', Song: 'Lies', BPM: 124, KEY: '11A'},
    { Artist: 'Fisher', Song: 'Wanna Go Dancin', BPM: 125, KEY: '8A'},
    { Artist: 'DJ Snake ft Tchami, Malaa & Mercer', Song: 'Made in France', BPM: 126, KEY: '1A'},
    { Artist: 'Tchami ft Daecolm', Song: 'Proud (Kohmi Remix)', BPM: 124, KEY: '8A'},
    { Artist: 'Cardi B & Megan Thee Stallion', Song: 'WAP', BPM: 67, KEY: '1A'},
    { Artist: 'Nicki Minaj', Song: 'Yikes', BPM: 75, KEY: '5A'},
    { Artist: 'J Balvin, Dua Lipa, Bad Bunny & Tiany', Song: 'Un DIA (ONE DAY)', BPM: 84, KEY: '11A'},
    { Artist: 'De La Ghetto Y Nikcy Jam', Song: 'Sube La Music', BPM: 94, KEY: '4A'},
    { Artist: 'Pop Smoke', Song: 'Dior', BPM: 71, KEY: '6A'},
    { Artist: 'Megan Thee Stallion', Song: 'Girls in The Hood', BPM: 97, KEY: '6A'}
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
  //---------------------- Sort BPM ----------------------
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
