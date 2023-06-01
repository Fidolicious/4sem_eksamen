function login() {
  // Henter email og adgangskode fra inputfelterne
  var usernameInput = document.querySelector('input[name="username"]');
  var passwordInput = document.querySelector('input[name="password"]');
  var username = usernameInput.value;
  var password = passwordInput.value;

  // Simuleret login med persona
  if (username === "malene@gmail.com" && password === "Malene2109") {
    console.log("Log ind gennemført!");
    // Omdiriger til forsiden
    window.location.href = "index.html";
  } else {
    console.log("Log ind fejlet. Forkert E-mail eller adgangskode.");
    // Vis fejlbesked eller udfør anden håndtering af fejlet login
  }

  // Nulstil inputfelterne
  usernameInput.value = "";
  passwordInput.value = "";
}

