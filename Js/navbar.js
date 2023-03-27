const header = document.querySelector(".page-header");
const toggleClass = "is-sticky";
const footer = document.querySelector(".page-footer");
const toggleClass1 = "sticky";

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > 150) {
    header.classList.add(toggleClass);
    footer.classList.add(toggleClass1);
  } else {
    header.classList.remove(toggleClass);
    footer.classList.remove(toggleClass1);
  }
});

