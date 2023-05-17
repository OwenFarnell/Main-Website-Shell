document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Check the username and password here
    if (username === "admin" && password === "password") {
      alert("Login successful!");
      window.location.href = "dashboard.html";
    } 
    if (username === "entry" && password === "pass") {
        alert("Login successful!");
        window.location.href = "dashboard.html";
        
      } else {
      alert("Invalid username or password. Please try again.");
    }
  });
  