  document.addEventListener("DOMContentLoaded", function() {
    var changePlan = document.getElementById("changePlan");
    var planBtn = document.getElementById("plan");
    var medlemskort = document.getElementById("medlemskort");
    var rewards = document.getElementById("rewards");
    var login = document.getElementById("login");
    var opret = document.getElementById("opret");
  
    if (changePlan) {
        changePlan.addEventListener("click", function() {
        window.location.href = "planer.html";
      });
    }
  
    if (planBtn) {
        planBtn.addEventListener("click", function() {
        window.location.href = "index.html";
      });
    }

    if (medlemskort) {
        medlemskort.addEventListener("click", function() {
        window.location.href = "medlemskort.html";
      });
    }

    if (rewards) {
        rewards.addEventListener("click", function() {
        window.location.href = "rewards.html";
      });
    }

    if (login) {
        login.addEventListener("click", function() {
        window.location.href = "login.html";
      });
    }
    if (opret) {
        opret.addEventListener("click", function() {
        window.location.href = "opret.html";
      });
    }
  });