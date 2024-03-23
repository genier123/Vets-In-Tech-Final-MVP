//------------------------ Write Table Data ----------------------
//- Timeless Classics
let songData = [
    { Artist: "Etta James", Song: "At Last" },
    { Artist: "The Righteous Brothers", Song: "Unchained Melody" },
    { Artist: "Elvis Presley", Song: "Can't Help Falling in Love" },
    { Artist: "Ben E. King", Song: "Stand by Me" },
    { Artist: "Stevie Wonder", Song: "You Are the Sunshine of My Life" },
    { Artist: "Frank Sinatra", Song: "The Way You Look Tonight" },
    { Artist: "Whitney Houston", Song: "I Will Always Love You" },
    { Artist: "Louis Armstrong", Song: "What a Wonderful World" },
    { Artist: "The Temptations", Song: "My Girl" },
    { Artist: "Shania Twain", Song: "You're Still the One" },
    { Artist: "John Legend", Song: "All of Me" },
    { Artist: "Christina Perri", Song: "A Thousand Years" },
    { Artist: "Ed Sheeran", Song: "Perfect" },
    { Artist: "Bruno Mars", Song: "Marry You" },
    { Artist: "Ed Sheeran", Song: "Thinking Out Loud" },
    { Artist: "Beyoncé", Song: "Love on Top" },
    { Artist: "Jason Mraz", Song: "I'm Yours" },
    { Artist: "Adele", Song: "Make You Feel My Love" },
    { Artist: "Bruno Mars", Song: "Just the Way You Are" },
    { Artist: "Lady Gaga and Bradley Cooper", Song: "Shallow" },
    { Artist: "Eric Clapton", Song: "Wonderful Tonight" },
    { Artist: "Nat King Cole & Natalie Cole", Song: "Unforgettable" },
    { Artist: "Frankie Valli", Song: "Can't Take My Eyes Off You" },
    { Artist: "Lionel Richie & Diana Ross", Song: "Endless Love" },
    { Artist: "Nat King Cole", Song: "L-O-V-E" },
    { Artist: "Elton John", Song: "Your Song" },
    { Artist: "Bryan Adams", Song: "(Everything I Do) I Do It for You" },
    { Artist: "Queen", Song: "Crazy Little Thing Called Love" },
    { Artist: "Sonny & Cher", Song: "I Got You Babe" },
    { Artist: "Aretha Franklin", Song: "I Say a Little Prayer" },
    { Artist: "Aerosmith", Song: "I Don't Want to Miss a Thing" },
    { Artist: "The Lumineers", Song: "Ho Hey" },
    { Artist: "Ray LaMontagne", Song: "You Are the Best Thing" },
    { Artist: "Train", Song: "Marry Me" },
    { Artist: "Kelly Clarkson", Song: "A Moment Like This" },
    { Artist: "Ellie Goulding", Song: "How Long Will I Love You" },
    { Artist: "James Arthur", Song: "Say You Won't Let Go" },
    { Artist: "Russell Dickerson", Song: "Yours" },
    { Artist: "Beyoncé", Song: "XO" },
    { Artist: "Kodaline", Song: "The One" },
    { Artist: "Bill Withers", Song: "Lovely Day" },
    { Artist: "Van Morrison", Song: "Crazy Love" },
    { Artist: "Andy Williams", Song: "Moon River" },
    { Artist: "Stevie Wonder", Song: "I Just Called to Say I Love You" },
    { Artist: "Al Green", Song: "Let's Stay Together" },
    { Artist: "Minnie Riperton", Song: "Lovin' You" },
    { Artist: "James Taylor", Song: "You've Got a Friend" },
    { Artist: "He Is We feat. Owl City", Song: "All About Us" },
    { Artist: "Luke Combs", Song: "Beautiful Crazy" },
    { Artist: "Dan + Shay", Song: "Speechless" },
    { Artist: "Calum Scott", Song: "You Are the Reason" },
    { Artist: "Haley Reinhart", Song: "Can't Help Falling in Love" },
    { Artist: "Sara Bareilles", Song: "I Choose You" },
    { Artist: "John Legend", Song: "Stay with You" },
    { Artist: "LANCO", Song: "Greatest Love Story" },
    { Artist: "Jason Aldean", Song: "You Make It Easy" },
    { Artist: "Leon Bridges", Song: "Beyond" },
    { Artist: "Calum Scott & Leona Lewis", Song: "You Are the Reason" },
    { Artist: "Dan + Shay", Song: "From the Ground Up" },
    { Artist: "Colbie Caillat", Song: "I Do" },
    { Artist: "Tom Walker", Song: "Just You and I" },
    { Artist: "The Wannadies", Song: "You and Me Song" },
    { Artist: "James Bay", Song: "Us" },
    { Artist: "Tom Odell", Song: "Grow Old with Me" },
    { Artist: "Daniel Caesar ft. H.E.R.", Song: "Best Part" },
    { Artist: "Marvin Gaye", Song: "Let's Get It On" },
    { Artist: "Death Cab for Cutie", Song: "I Will Follow You into the Dark" },
    { Artist: "Harry Connick Jr.", Song: "It Had to Be You" },
    { Artist: "Percy Sledge", Song: "When a Man Loves a Woman" },
    { Artist: "Bee Gees", Song: "How Deep Is Your Love" },
    { Artist: "Jackson 5", Song: "(Everything I Do) I Do It for You" },
    { Artist: "Joe Cocker", Song: "You Are So Beautiful" },
    { Artist: "Nat King Cole", Song: "Unforgettable" },
    { Artist: "Roberta Flack", Song: "The First Time Ever I Saw Your Face" },
    { Artist: "Jackson 5", Song: "I'll Be There" },
    { Artist: "Ed Sheeran & Beyoncé", Song: "Perfect Duet" },
    { Artist: "Leon Bridges", Song: "Beyond" },
    { Artist: "Calum Scott & Leona Lewis", Song: "You Are the Reason" },
    { Artist: "Dan + Shay", Song: "From the Ground Up" },
    { Artist: "Colbie Caillat", Song: "I Do" },
    { Artist: "Tom Walker", Song: "Just You and I" },
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