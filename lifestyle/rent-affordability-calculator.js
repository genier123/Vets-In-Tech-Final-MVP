document.getElementById('rent-calculator-calculate-btn').addEventListener('click', calculateAffordability);

function calculateAffordability() {
    // Get the selected income type from radio buttons
    const incomeTypeToggle = document.querySelector('input[name="income-type"]:checked').value === 'net';
    const incomeFrequency = document.getElementById('rent-calculator-income-frequency').value;
    const income = parseFloat(document.getElementById('rent-calculator-income').value) || 0;
    const utilities = parseFloat(document.getElementById('rent-calculator-utilities').value) || 0;
    const carPayment = parseFloat(document.getElementById('rent-calculator-car-payment').value) || 0;
    const insurance = parseFloat(document.getElementById('rent-calculator-insurance').value) || 0;
    const debts = parseFloat(document.getElementById('rent-calculator-debts').value) || 0;
    const food = parseFloat(document.getElementById('rent-calculator-food').value) || 0;
    const rent = parseFloat(document.getElementById('rent-calculator-rent').value) || 0;

    // Calculate monthly income based on frequency
    let monthlyIncome = 0;
    switch (incomeFrequency) {
        case 'monthly':
            monthlyIncome = income;
            break;
        case 'weekly':
            monthlyIncome = income * 4;
            break;
        case 'biweekly':
            monthlyIncome = income * 2;
            break;
        case 'hourly':
            monthlyIncome = income * 160; // Assuming 40 hours a week * 4 weeks
            break;
    }

    // Total expenses
    const totalExpenses = utilities + carPayment + insurance + debts + food;

    // Net income adjustment if the toggle is selected (Net income case)
    const adjustedIncome = incomeTypeToggle ? monthlyIncome * 0.75 : monthlyIncome; // Assuming 25% tax rate for gross to net

    // Affordability calculation
    const rentTarget = incomeTypeToggle ? adjustedIncome * 0.25 : monthlyIncome * 0.35; // 25% for net income, 35% for gross income
    const rentPercentage = ((rent + totalExpenses) / adjustedIncome) * 100;

    // Update result bar and text
    const resultBar = document.getElementById('rent-calculator-percentage-label');
    const resultText = document.getElementById('rent-calculator-result-text');
    const explainerText = document.createElement('p');
    explainerText.setAttribute('id', 'rent-calculator-explainer-text');

    resultBar.style.width = rentPercentage + '%';
    
    // Determine whether the calculation is based on net or gross income
    const incomeTypeText = incomeTypeToggle ? 'net' : 'gross';
    
    resultText.innerText = `Your rent and expenses make up ${rentPercentage.toFixed(2)}% of your ${incomeTypeText} monthly income.`;

    // Remove existing explainer if present
    const existingExplainer = document.getElementById('rent-calculator-explainer-text');
    if (existingExplainer) {
        existingExplainer.remove();
    }

    // Determine if the user is within the target range based on income type
    const targetPercentage = incomeTypeToggle ? 50 : 35; // 25% for net income, 35% for gross income
    
    if (rentPercentage > targetPercentage) {
        resultBar.classList.remove('green-bar');
        resultBar.classList.add('red-bar');
        resultText.style.color = 'red';
        explainerText.innerText = `This percentage is above the recommended ${targetPercentage}% of your ${incomeTypeText} monthly income for housing costs. Including expenses, you may want to consider more affordable options.`;
    } else {
        resultBar.classList.remove('red-bar');
        resultBar.classList.add('green-bar');
        resultText.style.color = 'green';
        explainerText.innerText = `This percentage is within the recommended ${targetPercentage}% of your ${incomeTypeText} monthly income for housing costs. Based on your expenses, this rent is likely affordable for your budget.`;
    }

    document.getElementById('rent-calculator-results').appendChild(explainerText);
}


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