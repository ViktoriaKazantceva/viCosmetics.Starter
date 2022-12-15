import { disableScroll } from '../functions/disable-scroll';
import { enableScroll } from '../functions/enable-scroll';

(function(){
  const burger = document?.querySelector(`[data-burger]`);
  const burgerMobile = document?.querySelector(`[data-burger-mobile]`);
  const menu = document?.querySelector(`[data-menu]`);
  const menuItems = document?.querySelectorAll(`[data-menu-item]`);
  const overlay = document?.querySelector(`[data-menu-overlay]`);

  burger?.addEventListener(`click`, (e) => {
    burger?.classList.toggle(`btn-menu_active`);
    burgerMobile?.classList.toggle(`btn-menu_active`);
    menu.classList.toggle(`aside_active`);

    if (menu.classList.contains(`aside_active`)) {
      burger?.setAttribute(`aria-expanded`, `true`);
      burger?.setAttribute(`aria-label`, `Закрыть меню`);
      burgerMobile?.setAttribute(`aria-expanded`, `true`);
      burgerMobile?.setAttribute(`aria-label`, `Закрыть меню`);
      disableScroll();
    } else {
      burger?.setAttribute(`aria-expanded`, `false`);
      burger?.setAttribute(`aria-label`, `Открыть меню`);
      burgerMobile?.setAttribute(`aria-expanded`, `false`);
      burgerMobile?.setAttribute(`aria-label`, `Открыть меню`);
      enableScroll();
    }
  });

  burgerMobile?.addEventListener(`click`, (e) => {
    burger?.classList.toggle(`btn-menu_active`);
    burgerMobile?.classList.toggle(`btn-menu_active`);
    menu.classList.toggle(`aside_active`);

    if (menu.classList.contains(`aside_active`)) {
      burger?.setAttribute(`aria-expanded`, `true`);
      burger?.setAttribute(`aria-label`, `Закрыть меню`);
      burgerMobile?.setAttribute(`aria-expanded`, `true`);
      burgerMobile?.setAttribute(`aria-label`, `Закрыть меню`);
      disableScroll();
    } else {
      burger?.setAttribute(`aria-expanded`, `false`);
      burger?.setAttribute(`aria-label`, `Открыть меню`);
      burgerMobile?.setAttribute(`aria-expanded`, `false`);
      burgerMobile?.setAttribute(`aria-label`, `Открыть меню`);
      enableScroll();
    }
  });

  overlay?.addEventListener(`click`, () => {
    burger?.setAttribute(`aria-expanded`, `false`);
    burger?.setAttribute(`aria-label`, `Открыть меню`);
    burger.classList.remove(`btn-menu_active`);
    enableScroll();
  });

  menuItems?.forEach(el => {
    el.addEventListener(`click`, () => {
      burger?.setAttribute(`aria-expanded`, `false`);
      burger?.setAttribute(`aria-label`, `Открыть меню`);
      burger.classList.remove(`btn-menu_active`);
      enableScroll();
    });
  });
})();
