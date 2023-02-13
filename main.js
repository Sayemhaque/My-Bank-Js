// sumbit button
const submitBtn = document.getElementById("submit-btn");

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

  if (email === "sayem1000@gmail.com" && password === "joinmybank123") {
    console.log("Log in successfull", { email, password });
    emailField.value = ""
    passwordField.value = ""
  } else {
    console.log("User not found");
  }
});
