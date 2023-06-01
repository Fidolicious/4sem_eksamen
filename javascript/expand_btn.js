document.addEventListener("DOMContentLoaded", function() {
    var coll = document.getElementsByClassName("collapsible");
    var content = document.getElementsByClassName("content");
  
    // Add "active" class to the first collapsible element
    coll[0].classList.add("active");
    content[0].style.display = "block";
  
    for (var i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        var isActive = this.classList.contains("active");
  
        // Remove "active" class from all collapsible elements
        for (var j = 0; j < coll.length; j++) {
          coll[j].classList.remove("active");
          content[j].style.display = "none";
        }
  
        // Add "active" class only to the clicked element if it was not active previously
        if (!isActive) {
          this.classList.add("active");
          var currentContent = this.nextElementSibling;
          currentContent.style.display = "block";
        }
      });
    }
  });