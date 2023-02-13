// update balance

//update deposite

// deposite button
const depositeBtn = document.getElementById("deposite-btn");
//deposite input
const depositeInputField = document.getElementById("deposite-input");
//deposite amount 
const depositeAmount = document.getElementById("deposite-amount");

// adding click event listener 

depositeBtn.addEventListener("click" , function () {
    const depositeAmountValue = depositeInputField.value;
  return  depositeAmount.innerText = Number(depositeAmountValue + depositeAmount);
})
