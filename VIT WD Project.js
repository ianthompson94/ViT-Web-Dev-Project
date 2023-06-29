// VIT WD Project.js

// Function to handle the sign-in button click event
function handleSignIn() {
  alert("Sign in button clicked!");
}

// Add event listener to the sign-in button
document.addEventListener("DOMContentLoaded", function() {
  const signInButton = document.querySelector(".sign-in-button");
  signInButton.addEventListener("click", handleSignIn);
});
