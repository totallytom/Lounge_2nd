const toggleContainer = document.getElementsByClassName("toggle-container");
const toggle = document.querySelector(".toggle");

toggleContainer.addEventListener("click", () => {
  const currentLeft = parseInt(window.getComputedStyle(toggleContainer).left);
  const newLeft = currentLeft + 50; // Adjust the distance to move as needed

  toggleContainer.style.left = `${newLeft}px`;
});


