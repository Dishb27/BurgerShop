document.addEventListener("DOMContentLoaded", () => {
  const authRequiredPages = ["store.html", "reports.html"];
  const isLoggedIn = sessionStorage.getItem("isAdmin");

  if (
    authRequiredPages.some((page) => window.location.href.includes(page)) &&
    !isLoggedIn
  ) {
    window.location.href = "admin-login.html";
  }

  const loginForm = document.getElementById("admin-login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      if (username === "admin" && password === "password") {
        sessionStorage.setItem("isAdmin", true);
        window.location.href = "store.html";
      } else {
        alert("Invalid credentials");
      }
    });
  }
});
