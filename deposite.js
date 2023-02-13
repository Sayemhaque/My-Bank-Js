// update balance

// deposite button
const depositeBtn = document.getElementById("deposite-btn");
//deposite input
const depositeInputField = document.getElementById("deposite-input");
//deposite amount
const depositeAmount = document.getElementById("deposite-amount");
// error msg
const depositeErrorMsg = document.getElementById("deposite-error");
const WithDrawErrorMsg = document.getElementById("withdraw-error");

const withdrawBtn = document.getElementById("withdraw-btn");
//withdraw input
const withdrawInputField = document.getElementById("withdraw-input");
//withdraw amount
const withdrawAmount = document.getElementById("withdraw-amount");
//balance amount
const totalBalance = document.getElementById("balance-amount");

// adding click event listener

depositeBtn.addEventListener("click", function () {
  const newDepositeAmount = depositeInputField.value;
  const convertedDeopiteAmout = parseFloat(newDepositeAmount);
  if(newDepositeAmount === ""){
     depositeErrorMsg.innerText = "*Invalid Amount"
  }
 else{
  depositeErrorMsg.innerText = ""
  const updataedDiposite =
    parseFloat(convertedDeopiteAmout) + parseFloat(depositeAmount.innerText);
  depositeAmount.innerText = updataedDiposite;
  const totalBalanceNumber = parseFloat(totalBalance.innerText)
   totalBalance.innerText = totalBalanceNumber + updataedDiposite
   depositeInputField.value = "";
 }
});



