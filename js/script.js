document.addEventListener("DOMContentLoaded", () => {
  const signinBox = document.getElementById("signin-box");
  const signupBox = document.getElementById("signup-box");
  const showSignup = document.getElementById("show-signup");
  const showSignin = document.getElementById("show-signin");

  if (showSignup && showSignin) {
    showSignup.onclick = () => {
      signinBox.classList.add("hidden");
      signupBox.classList.remove("hidden");
    };
    showSignin.onclick = () => {
      signupBox.classList.add("hidden");
      signinBox.classList.remove("hidden");
    };
  }

  const signinForm = document.getElementById("signin-form");
  if (signinForm) {
    signinForm.addEventListener("submit", (e) => {
      e.preventDefault();
      // In a real setup, you'd verify from server.cpp
      alert("Login successful!");
      window.location.href = "dashboard.html";
    });
  }

  const signupForm = document.getElementById("signup-form");
  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Account created successfully!");
      window.location.href = "login.html";
    });
  }
});
