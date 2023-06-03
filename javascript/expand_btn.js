document.addEventListener("DOMContentLoaded", function() {
    var coll = document.getElementsByClassName("collapsible");
    var content = document.getElementsByClassName("content");
  
    //  Tilføj "active" class til det første collapsible element
    coll[0].classList.add("active");
    content[0].style.display = "block";
  
    for (var i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        var isActive = this.classList.contains("active");
  
        // Fjern "active" class fra alle collapsible elementer
        for (var j = 0; j < coll.length; j++) {
          coll[j].classList.remove("active");
          content[j].style.display = "none";
        }
  
        // Tilføj "active" class kun til den klikkede element hvis den ikke var aktiv før
        if (!isActive) {
          this.classList.add("active");
          var currentContent = this.nextElementSibling;
          currentContent.style.display = "block";
        }
      });
    }
  });