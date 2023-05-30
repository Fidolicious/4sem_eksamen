// Function to open the modal
function openModal() {
  const modal = document.getElementById("myModal");
  modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
  const modal = document.getElementById("myModal");
  modal.style.display = "none";
}

// Function to flip the card
function flipCard() {
  const card = document.getElementById("card");
  card.classList.toggle("card-flipped");
}

// Close the modal when the user clicks outside of it
window.onclick = function(event) {
  const modal = document.getElementById("myModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

