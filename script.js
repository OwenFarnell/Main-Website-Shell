document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Check the username and password here
    if (username === "admin" && password === "password") {
      alert("Login successful!");
      // Redirect to another page or perform additional actions
    } else {
      alert("Invalid username or password. Please try again.");
    }
  });
  