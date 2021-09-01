  //------------------------ Write Table Data ----------------------
  let songData = [
    { Artist: 'Bia Nicki Minaj', Song: 'Whole Lotta Money (Remix)'},
    { Artist: 'Normani ft Cardi B', Song: 'Wild Side'},
    { Artist: 'Lil Nas X ft Jack Harlow', Song: 'Industry Baby'},
    { Artist: 'Fat Joe ft Remy Ma & Cool & Dre', Song: 'Back Outside'},
    { Artist: 'Pop Smoke ft 42 Dugg & 21 Savage', Song: 'Bought a Million'},
    { Artist: 'Megan Thee Stallion', Song: 'Thot Sh-t'},
    { Artist: 'City Girls', Song: 'Twerkulater'},
    { Artist: 'Beatking ft 2 Chainz & Juicy J', Song: 'SDAB'},
    { Artist: 'Belly, The Weeknd, Young Thug', Song: 'Better Believe'},
    { Artist: 'Swedish House Mafia', Song: 'It Gets Better'},
    { Artist: 'Yung Bleu ft Chris Brown & 2 Chainz', Song: 'Baddest'},
    { Artist: 'French Montana', Song: 'FWMGAB'},
    { Artist: 'Megan Thee Stallion ft Young Thug', Song: 'Dont Stop'},
    { Artist: 'Travis Scott ft Young Thug & M.I.A.', Song: 'Franchise'},
    { Artist: 'Tyga ft YG & Saweetie', Song: 'Money Mouf'},
    { Artist: 'Drake ft Lil Durk', Song: 'Laugh Now Cry Later'},
    { Artist: 'DJ Khaled ft Drake', Song: 'POPSTAR'},
    { Artist: 'Ty Dolla Sign ft Kanye West & FKY Twigs', Song: 'Ego Death'},
    { Artist: '2 Chainz ft Lil Wayne', Song: 'Money Maker'},
    { Artist: 'Saweetie', Song: 'Tap In'},
    { Artist: 'DaBaby ft Young Thug', Song: 'BLIND'},
    { Artist: 'Big Sean ft Travis Scott', Song: 'Lithuania'},
    { Artist: 'Puri & Lisa Mercedez ft Jhorrmountian & Adje', Song: 'Cono'},
    { Artist: 'Dr Fresh & LO99', Song: 'Ravewerk'},
    { Artist: 'ManyFew', Song: 'Get Close'},
    { Artist: 'Steve Aoki & KREAM', Song: 'Lies'},
    { Artist: 'Fisher', Song: 'Wanna Go Dancin'},
    { Artist: 'DJ Snake ft Tchami, Malaa & Mercer', Song: 'Made in France'},
    { Artist: 'Tchami ft Daecolm', Song: 'Proud (Kohmi Remix)'},
    { Artist: 'Cardi B & Megan Thee Stallion', Song: 'WAP'},
    { Artist: 'Nicki Minaj', Song: 'Yikes'},
    { Artist: 'J Balvin, Dua Lipa, Bad Bunny & Tiany', Song: 'Un DIA (ONE DAY)'},
    { Artist: 'De La Ghetto Y Nikcy Jam', Song: 'Sube La Music'},
    { Artist: 'Pop Smoke', Song: 'Dior'},
    { Artist: 'Megan Thee Stallion', Song: 'Girls in The Hood'}
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