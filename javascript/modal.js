document.addEventListener("DOMContentLoaded", function() {
  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // Get the QR code container
  var qrCodeContainer = document.getElementById("qrCodeContainer");

  // When the user clicks on the button, open the modal and generate the QR code
  btn.onclick = function() {
    modal.style.display = "block";
  };

  // When the user clicks on <span> (x), close the modal and clear the QR code
  span.onclick = function() {
    modal.style.display = "none";
    clearQRCode();
  };

  // When the user clicks anywhere outside of the modal, close it and clear the QR code
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      clearQRCode();
    }
  };

  // Function to generate the QR code
  function generateQRCode(data) {
    qrCodeContainer.innerHTML = "";

    // Generate the QR code representation using HTML and CSS
    for (var i = 0; i < data.length; i++) {
      var qrCodeRow = document.createElement("div");
      qrCodeRow.classList.add("qrCodeRow");
      qrCodeContainer.appendChild(qrCodeRow);

      for (var j = 0; j < data.length; j++) {
        var qrCodeDot = document.createElement("div");
        qrCodeDot.classList.add("qrCodeDot");
        qrCodeDot.style.backgroundColor = data[i][j] === "1" ? "black" : "white";
        qrCodeRow.appendChild(qrCodeDot);
      }
    }
  }

  // Function to clear the QR code
  function clearQRCode() {
    qrCodeContainer.innerHTML = "";
  }

  // Attach click event listener to greenBtn to generate the QR code
  var greenBtn = document.querySelector(".greenBtn");
  greenBtn.addEventListener("click", function() {
    generateQRCode("Your QR code data goes here");
  });
});