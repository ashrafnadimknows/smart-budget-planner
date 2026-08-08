  function calculateBudget() {
    let income = Number(document.getElementById("income").value);
    let rent = Number(document.getElementById("rent").value);
    let food = Number(document.getElementById("food").value);
    let transport = Number(document.getElementById("transport").value);
    let shopping = Number(document.getElementById("shopping").value);
    let other = Number(document.getElementById("other").value);
    let totalExpenses = rent + food + transport + shopping + other;
    let remainingBalance = income - totalExpenses;
    let savingPercent = 0;
    
