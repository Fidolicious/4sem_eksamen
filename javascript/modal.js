// Funktion til at åbne modal
function openModal() {
  const modal = document.getElementById("myModal");
  modal.style.display = "block";
}

// Funktion til at lukke modal 
function closeModal() {
  const modal = document.getElementById("myModal");
  modal.style.display = "none";
}

// Funktion til at flippe kortet/modalen
function flipCard() {
  const card = document.getElementById("card");
  card.classList.toggle("card-flipped");
}

// Luk modal når brugeren klikker udenfor den
// window.onclick = function(event) {
//   const modal = document.getElementById("myModal");
//   if (event.target === modal) {
//     modal.style.display = "none";
//   }
// };

