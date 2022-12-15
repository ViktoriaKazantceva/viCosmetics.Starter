(function () {
  const menu = document.querySelector(`.nav`);
  const menuList = document.querySelector(`.nav-list`);
  let last_position = {};

  menu.onmousemove = function (event) {
    if (typeof (last_position.x) != `undefined`) {
      let deltaX = last_position.x - event.offsetX;
      let deltaY = last_position.y - event.offsetY;
      if (Math.abs(deltaY) > Math.abs(deltaX) && deltaY > 0) {
        if (!menuList.classList.contains(`nav-list_up`)) {
          menuList.classList.add(`nav-list_up`)
        }
      } else if (Math.abs(deltaY) > Math.abs(deltaX) && deltaY < 0) {
        if (menuList.classList.contains(`nav-list_up`)) {
          menuList.classList.remove(`nav-list_up`)
        }
      }
    }
    last_position = {
      x: event.offsetX,
      y: event.offsetY
    };
  };
})()
