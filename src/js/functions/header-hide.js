(function () {
  const header = document.querySelector(`.header`);
  const smallDesktop = 1366;
  let lastScrollY = 0;

  window.addEventListener(`scroll`, () => {
    if (window.innerWidth < smallDesktop) {
      if (lastScrollY < window.scrollY && window.scrollY > header.offsetHeight) {
        header.classList.add(`header_hidden`)
      } else {
        header.classList.remove(`header_hidden`)
      }
    }
    lastScrollY = window.scrollY;
  });
})()
