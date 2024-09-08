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
