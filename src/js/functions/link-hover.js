import { getCircleText } from './circle-text';
(function () {
  const linkContainer = document.querySelectorAll(`.slider__link`);
  const cursor = document.querySelector(`.cursor`);
  const classLink = [`cursor_brands`, `cursor_flower-1`, `cursor_flower-2`];


  document.addEventListener(`mousemove`, function (event) {
    const x = event.pageX;
    const y = event.pageY;

    cursor.style.left = x + `px`;
    cursor.style.top = y + `px`;
  });

  linkContainer.forEach(item => {
    item.addEventListener(`mouseover`, function (e) {

      for (let i = 0; i < classLink.length; i++) {
        if (cursor.classList.contains(classLink[i])) {
          cursor.classList.remove(classLink[i]);
        }
        cursor.classList.add(`cursor_visible`);
        cursor.classList.add(item.getAttribute(`data-hover`));
        cursor.classList.add(item.getAttribute(`data-hover`));
        getCircleText(cursor, item);
      }
    })

    item.addEventListener(`mouseout`, function (e) {
      cursor.classList.remove(`cursor_visible`)
      cursor.innerHTML = ``;
    })
  })

})()
