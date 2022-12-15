export const getCircleText = (el, text) => {
  el.innerHTML = text.getAttribute(`data-cursor-text`)
  el.innerHTML = `<div>${el.innerHTML.split(``).map((char, i) =>
    `<span style="transform:rotate(${i * 20}deg)">${char}</span>`).join(``)}</div>`;
}
