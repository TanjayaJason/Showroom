document.addEventListener("DOMContentLoaded", function () {
    var content = document.querySelector(".content");
    var cards = document.querySelectorAll(".card");
  
    // Function to handle the animation
    function animateCards() {
      content.style.opacity = 0;
      cards.forEach(function (card) {
        card.style.opacity = 1;
      });
  
      // Delay setting the content opacity to 1 to give time for the cards to become visible
      setTimeout(function () {
        content.style.opacity = 1;
      }, 1000); // You can adjust the delay time if needed
    }
  
    // Call the animation function on page load
    animateCards();
  });
  