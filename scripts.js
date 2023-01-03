const navbarElement = document.querySelector(".navbar");
console.log(navbarElement);

const bottomContainer = document.querySelector(".bottom-container");
console.log(bottomContainer);

console.log(navbarElement.offsetHeight);
console.log(bottomContainer.offsetTop);

console.log(
  window.scrollY,
  bottomContainer.offsetTop - navbarElement.offsetHeight - 50
);

window.addEventListener("scroll", () => {
  if (
    window.scrollY >
    bottomContainer.offsetTop - navbarElement.offsetHeight - 50
  ) {
    navbarElement.classList.add("active");
  } else {
    navbarElement.classList.remove("active");
  }
});
