const crescent = document.querySelector(".half");
const full = document.querySelector(".round");

// add event listener
crescent.addEventListener("click", () => {
  if (full.classList.contains("round")) {
    full.classList.add("active");
    crescent.classList.remove("active");
  }
});

full.addEventListener("click", () => {
  if (crescent.classList.contains("half")) {
    crescent.classList.add("active");
    full.classList.remove("active");
  }
});
