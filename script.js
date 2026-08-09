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
    
    if (income > 0) {
      savingPercent = (remainingBalance / income) * 100;
    }
    document.getElementById("totalExpenses").innerText = totalExpenses;
    document.getElementById("remainingBalance").innerText = remainingBalance;
    document.getElementById("savingPercent").innerText = savingPercent.toFixed(1) + "%";

