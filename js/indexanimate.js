document.addEventListener("DOMContentLoaded", function () {
    var content = document.getElementById("content");
    var movie = document.querySelector(".movie");
  
    function handleScroll() {
      var scrollPosition = window.scrollY || document.documentElement.scrollTop;
  
      // Adjust the scroll position for the "content" element
      if (scrollPosition >= 100) {
        content.classList.remove("hidden");
      } else {
        content.classList.add("hidden");
      }
  
      // Adjust the scroll position for the "movie" element
      if (scrollPosition >= 100) {
        movie.classList.remove("hidden");
      } else {
        movie.classList.add("hidden");
      }
    }
  
    // Initial check on page load
    handleScroll();
  
    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);
  });
  