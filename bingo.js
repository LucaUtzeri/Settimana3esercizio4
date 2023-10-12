//generare 76 elementi

//generare una funzione che prende un numero random on click

//
const numberCells = [];

const createCells = function () {
  const tabellone = document.getElementById("tabellone");

  for (let i = 0; i < 90; i++) {
    numberCells.push([]);
    const numbCellDiv = document.createElement("div");
    numbCellDiv.classList.add("cell");

    const numbCellContent = document.createElement("h3");
    numbCellContent.innerText = i + 1;

    createCells.onclick = function (e) {
      e.currentTarget.classList.add("selected");
    };
    numbCellDiv.appendChild(numbCellContent);
    tabellone.appendChild(numbCellDiv);
  }
};

createCells();

const randomNumber = function () {
  return Math.floor(Math.random() * (90 - 1));
};
console.log(randomNumber(1, 90));
