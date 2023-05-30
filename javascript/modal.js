// Function to open the modal
function openModal() {
  const modal = document.getElementById("myModal");
  modal.style.display = "block";
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

 // Get the reference to the div element
 const divElement = document.querySelector('.colorful-div');

 // Function to change the background color
 function changeBackgroundColor() {
   const currentColor = divElement.style.backgroundColor;

   if (currentColor === 'blue') {
     divElement.style.backgroundColor = 'green';
   } else if (currentColor === 'green') {
     divElement.style.backgroundColor = '';
   } else {
     divElement.style.backgroundColor = 'blue';
   }
 }

 // Set an interval to change the background color every second
 setInterval(changeBackgroundColor, 1000);