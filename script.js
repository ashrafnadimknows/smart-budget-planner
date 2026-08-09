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

    let statusBox = document.getElementById("statusBox"); 
    statusBox.classList.remove("status-good", "status-okay", "status-bad"); 
 
    if (savingPercent >= 30) { 
      statusBox.innerText = "Excellent Saving!"; 
      statusBox.classList.add("status-good"); 
    } else if (savingPercent >= 10) { 
      statusBox.innerText = "Good Saving"; 
      statusBox.classList.add("status-okay"); 
    } else { 
      statusBox.innerText = "Need to Reduce Expenses"; 
      statusBox.classList.add("status-bad"); 
    } 

    let jarHeight = savingPercent; 
if (jarHeight < 0) { jarHeight = 0; } 
if (jarHeight > 100) { jarHeight = 100; } 
document.getElementById("jarFill").style.height = jarHeight + "%"; 
}
