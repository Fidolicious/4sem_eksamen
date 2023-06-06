// Funktion til at åbne modal 
function openModal() {
  const modal = document.getElementById("myModal");
  modal.style.display = "block";
  document.body.classList.add("modal-open");
}

// Funktion til at lukke modal
function closeModal() {
  const modal = document.getElementById("myModal");
  modal.style.display = "none";
  document.body.classList.remove("modal-open");
  const card = document.getElementById("card");
  card.classList.remove("card-flipped");
}

// Funktion til at flippe kortet/modalen
function flipCard() {
  const card = document.getElementById("card");
  card.classList.toggle("card-flipped");
}


