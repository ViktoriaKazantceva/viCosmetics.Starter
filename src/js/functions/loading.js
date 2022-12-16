(function () {
  const body = document.querySelector(`.body`);
  const slider = document.querySelector(`.swiper-wrapper`);
  const sideFirsr = document.querySelector(`.slider__item-1`);
  const videoFirst = document.querySelector(`.slider__video-1`);
  const videoSecond = document.querySelector(`.slider__video-2`);

  document.addEventListener(`DOMContentLoaded`, function () {
    body.classList.add(`body_loading`)

    if (body.classList.contains(`body_loading`)) {
      if (sideFirsr.classList.contains(`slider_loading-first`) && sideFirsr.classList.contains(`slider__video_loading`)) {
        if (window.innerWidth >= 1366 ) {
          setTimeout(() => {
            sideFirsr.classList.remove(`slider_loading-first`);
          }, 1250);
          setTimeout(() => {
            sideFirsr.classList.remove(`slider__video_loading`);
          }, 900);
        }
        setTimeout(() => {
          sideFirsr.classList.remove(`slider_loading-first`);
        }, 1250);
        setTimeout(() => {
          sideFirsr.classList.remove(`slider__video_loading`);
        }, 600);
      }

      function callback(mutations) {

        mutations.forEach((mutation) => {
          if (mutation.type === `attributes`) {
            if (mutation.target.classList.contains(`slider__item-1`) && mutation.target.classList.contains(`slider__video_loading`)) {
              videoFirst.pause();
            }
            if (mutation.target.classList.contains(`slider__item-1`) && !mutation.target.classList.contains(`slider__video_loading`)) {
              videoFirst.play();
            }
            if (mutation.target.classList.contains(`slider__item-1`) && !mutation.target.classList.contains(`slider_active`)) {
              videoFirst.pause();
            }
            if (mutation.target.classList.contains(`slider__item-5`) && mutation.target.classList.contains(`slider_active`)) {
              videoSecond.play();
            }
            if (mutation.target.classList.contains(`slider__item-5`) && !mutation.target.classList.contains(`slider_active`)) {
              videoSecond.pause();
            }
          }
        });
      }
    }

    let observer = new MutationObserver(callback);

    const config = {
      attributes: true,
      attributeFile: [`class`],
      characterData: true,
      subtree: true
    };

    observer.observe(slider, config);
  });
})()
