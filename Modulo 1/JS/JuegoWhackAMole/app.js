let currentMoleTile;
let score = 0;
let gameOver = false;

window.onload = () => {
  setGame();
};

const setGame = () => {
  for (let i = 0; i < 9; i++) {
    let tile = document.createElement("div");
    tile.id = i.toString();
    tile.addEventListener("click", () => {
      if (tile == currentMoleTile) {
        score += 10;
        document.getElementById("score").innerText = score.toString();
        if (score >= 150) {
          endGame();
        }
      }
    });
    document.getElementById("board").appendChild(tile);
  }

  setInterval(setMole, 1000);
};

const endGame = () => {
  gameOver = true;
  alert("Has Ganado");
};

const getRandomTile = () => {
  let num = Math.floor(Math.random() * 9);
  return num.toString();
};

const setMole = () => {
  if (currentMoleTile) {
    currentMoleTile.innerHTML = "";
  }

  if (gameOver) {
    score = 0;
    document.getElementById("score").innerText = score.toString();

    return location.reload();
  }

  let mole = document.createElement("img");
  mole.src = "./images/monty-mole.png";

  let num = getRandomTile();
  currentMoleTile = document.getElementById(num);
  currentMoleTile.appendChild(mole);
};
