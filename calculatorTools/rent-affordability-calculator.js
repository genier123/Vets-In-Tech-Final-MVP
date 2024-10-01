function calculateRent() {
    const income = parseFloat(document.getElementById('income').value);
    const debts = parseFloat(document.getElementById('debts').value);
    const expenses = parseFloat(document.getElementById('expenses').value);
    const rentPercentage = parseFloat(document.getElementById('rentPercentage').value) / 100;

    if (isNaN(income) || isNaN(debts) || isNaN(expenses) || isNaN(rentPercentage)) {
        document.getElementById('result').innerText = "Please enter valid numbers.";
        return;
    }

    const disposableIncome = income - (debts + expenses);
    const affordableRent = disposableIncome * rentPercentage;

    document.getElementById('result').innerText = `You can afford a rent of $${affordableRent.toFixed(2)} per month.`;
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