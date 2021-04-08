const btnStart = document.querySelector(".btn");
btnStart.addEventListener("click", function () {
  const gameStart = new Game(1);
  gameStart.newTurn();
});
