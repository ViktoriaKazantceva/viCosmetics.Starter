export const getBlockHeight = (className, constName) => {
  const blockHeight = document?.querySelector(className).offsetHeight;
  document.querySelector(`:root`).style.setProperty(`${constName}`, `${blockHeight}px`);
}
