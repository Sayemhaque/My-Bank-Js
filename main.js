// sumbit button
const submitBtn = document.getElementById("submit-btn");

//email-error msg
const emialErrorMsg = document.getElementById("email-error");

//password-error msg
const passwordErrorMsg = document.getElementById("password-error");

//adding click event listener

submitBtn.addEventListener("click", function (e) {
  //stoping default behavior of the form
  e.preventDefault();
  //email field
  const emailField = document.getElementById("email");
  //password field
  const passwordField = document.getElementById("password");
  // email
  const email = emailField.value;

  //password
  const password = passwordField.value;

  // Login form and form varification
  if (email === "sayem1000@gmail.com" && password === "joinmybank123") {
    window.location.href = "bank.html";
    emailField.value = "";
    passwordField.value = "";
  }
   else if (email !== "sayem1000@gmail.com") {
    if(email === ""){
        emialErrorMsg.innerText = "*email required";
        emailField.classList.add("error-border")
        setTimeout(() => {
          emialErrorMsg.innerText = "";
          emailField.classList.remove("error-border")
        }, 2000);
    }else{
        emialErrorMsg.innerText = "*Enter a valid email";
        emailField.classList.add("error-border")
        setTimeout(() => {
          emialErrorMsg.innerText = "";
          emailField.classList.remove("error-border")
        }, 1000);
    }
   
  } else if (password !== "joinmybank123") {
    if(password === ""){
        passwordErrorMsg.innerText = "*password required";
        passwordField.classList.add("error-border")
        setTimeout(() => {
        passwordErrorMsg.innerText = "";
        passwordField.classList.remove("error-border")
        }, 1000);
    }
    else{
        passwordErrorMsg.innerText = "*Enter a valid password";
        passwordField.classList.add("error-border")
        setTimeout(() => {
          passwordErrorMsg.innerText = "";
          passwordField.classList.remove("error-border")
        }, 2000);
   }
  
}
});



