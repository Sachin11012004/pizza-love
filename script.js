const signinForm = document.getElementById("signin-form");
const signinBtn = document.getElementById("signin-btn");
const forgotPasswordLink = document.getElementById("forgot-password");

signinBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const rememberMe = document.getElementById("remember-me").checked;

  if (username === "" || password === "") {
    alert("Please enter both username and password");
    return;
  }

  // TO DO: Implement sign in logic here
  console.log(
    `Username: ${username}, Password: ${password}, Remember Me: ${rememberMe}`
  );
  // For demo purposes, let's assume the sign in is successful
  alert("Sign in successful!");
  // Redirect to a new page or update the UI accordingly
});

forgotPasswordLink.addEventListener("click", (e) => {
  e.preventDefault();
  // TO DO: Implement forgot password logic here
  console.log("Forgot password link clicked");
  // For demo purposes, let's assume the forgot password functionality is implemented
  alert("Forgot password functionality is not implemented yet!");
});
