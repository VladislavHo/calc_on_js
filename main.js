document.getElementById("incomeForm").addEventListener("input",(function(e){var t=parseFloat(document.getElementById("totalIncome").value),n=parseInt(document.getElementById("familyMembers").value),m=document.getElementById("averageIncome");if(0!==n){var a=t/n/12;m.textContent=a.toFixed(2)}else m.textContent="0.00"})),document.getElementById("incomeForm").addEventListener("submit",(function(e){e.preventDefault();var t=parseFloat(document.getElementById("totalIncome").value),n=parseInt(document.getElementById("familyMembers").value),m=parseInt(document.getElementById("children").value),a=t/n/12,l=13e3,o=document.getElementById("result");if(o.innerHTML="",a<l)o.innerHTML="Семье положено 50% от прожиточного минимума.";else{var d=t/n+6500*m;d<l&&d>=6500?o.innerHTML="Семье положено 75% от прожиточного минимума.":(d=t/n+9750*m,o.innerHTML=d<l&&d>=9750?"Семье положено 100% от прожиточного минимума.":"Семье не положено ни 50%, ни 75%, ни 100% от прожиточного минимума.")}}));