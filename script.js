var count = 0;

document.querySelector("#increase").addEventListener("click", () => {
  changeCount(1);
});

document.querySelector("#decrease").addEventListener("click", () => {
  changeCount(-1);
});

document.querySelector("#increaseBy2").addEventListener("click", () => {
  changeCount(2);
});

document.querySelector("#decreaseBy2").addEventListener("click", () => {
  changeCount(-2);
});

changeCount = (number) => {
  count += number;
  document.querySelector("#count").textContent = count;
};
