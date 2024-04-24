function calculate() {
    const currentAmount = parseFloat(document.getElementById('currentAmount').value);
    const newIncomeTab = document.getElementById('newIncomeTab');
    const percentIncreaseTab = document.getElementById('percentIncreaseTab');
    const applyAnnuallyCheckbox = document.getElementById('applyAnnually');
    const numberOfYearsInput = document.getElementById('numberOfYears');

    let newAmount = 0;
    let percentIncrease = 0;
    let yearlyNewAmount = 0;
    let years = 1;

    if (newIncomeTab.checked) {
        newAmount = parseFloat(document.getElementById('newAmount').value);
        percentIncrease = ((newAmount - currentAmount) / currentAmount) * 100;
    } else {
        percentIncrease = parseFloat(document.getElementById('percentIncrease').value);
        newAmount = currentAmount * (1 + percentIncrease / 100);
        if (applyAnnuallyCheckbox.checked) {
            years = parseFloat(numberOfYearsInput.value);
        }
    }

    const tableHtml = generateYearlyTable(currentAmount, percentIncrease, years);
    
    const oldResult = `
        <p>Old Annual Income: $${currentAmount.toFixed(2)}</p>
    `;
    const newResult = `
        <p>New Annual Income: $${newAmount.toFixed(2)}</p>
        <p>Percent Increase: ${percentIncrease.toFixed(2)}%</p>
    `;

    const resultElement = document.getElementById('results');
    resultElement.innerHTML = newIncomeTab.checked ? newResult + oldResult + tableHtml : oldResult + newResult + tableHtml;
}

function generateYearlyTable(currentAmount, percentIncrease, years) {
    let tableHtml = "<table><tr><th>Year</th><th>Annual Income</th></tr>";
    let newAmount = currentAmount;
    for (let i = 1; i <= years; i++) {
        newAmount *= (1 + percentIncrease / 100);
        tableHtml += `<tr><td>${i}</td><td>$${newAmount.toFixed(2)}</td></tr>`;
    }
    tableHtml += "</table>";
    return tableHtml;
}

function copyResult() {
    const resultElement = document.getElementById('results');
    const range = document.createRange();
    range.selectNode(resultElement);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
}

function reset() {
    document.getElementById('currentAmount').value = '';
    document.getElementById('newAmount').value = '';
    document.getElementById('percentIncrease').value = '';
    document.getElementById('applyAnnually').checked = false;
    document.getElementById('numberOfYears').value = '';
    document.getElementById('results').innerHTML = '';
}

// Show/hide number of years input based on checkbox state
document.getElementById('applyAnnually').addEventListener('change', function() {
    const numberOfYearsInput = document.getElementById('numberOfYears');
    const yearsLabel = document.getElementById('yearsLabel');
    if (this.checked) {
        numberOfYearsInput.style.display = 'inline-block';
        yearsLabel.style.display = 'inline-block';
    } else {
        numberOfYearsInput.style.display = 'none';
        yearsLabel.style.display = 'none';
    }
});

  /*---------Calc Annual Income------------------*/
  function calculateAnnualIncome() {
    const hourlyRate = parseFloat(document.getElementById('hourlyRate').value);
    const hoursPerWeek = parseFloat(document.getElementById('hoursPerWeek').value);
  
    const annualIncome = hourlyRate * hoursPerWeek * 52;
  
    const resultElement = document.getElementById('annualIncomeResult');
    resultElement.innerHTML = `<p>${annualIncome.toFixed(2)}</p>`;
  }
  
  function copyAnnualIncome() {
    const resultElement = document.getElementById('annualIncomeResult');
    const range = document.createRange();
    range.selectNode(resultElement);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
  }
  
  function resetAnnualIncome() {
    document.getElementById('hourlyRate').value = '';
    document.getElementById('hoursPerWeek').value = '';
    document.getElementById('annualIncomeResult').innerHTML = '';
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
    
    
    //-------------------- NewMenuButton --------------------
    
    function openNav() {
      document.getElementById("myNav5").style.width = "100%";
    }
    
    function closeNav() {
      document.getElementById("myNav5").style.width = "0%";
    }