const body = document.body;
const gameField = document.createElement("div");
const topField = document.createElement("div");
const emptyField = document.createElement("div");
const topClues = document.createElement("div");
const bottomField = document.createElement("div");
const gameCells = document.createElement("div");
const leftClues = document.createElement("div");
const buttonsZone = document.createElement("div");
const resetAndActual = document.createElement("div");
const resetGame = document.createElement("button");
const currentGameText = document.createElement("div");
const timer = document.createElement("h2");
const chooseGame = document.createElement("button");
const randomGame = document.createElement("button");
const saveLoad = document.createElement("div");
const save = document.createElement("button");
const load = document.createElement("button");
const muteToggle = document.createElement("button");
const themeToggle = document.createElement("button");
const selectEasy = document.createElement("div");
const easyPlane = document.createElement("button");
const easyScull = document.createElement("button");
const easySnowflake = document.createElement("button");
const easyHourglass = document.createElement("button");
const easySmile = document.createElement("button");
const easyReturn = document.createElement("button");
const modal = document.createElement("div");
const modalBox = document.createElement("div");
const modalText = document.createElement("div");
const modalTime = document.createElement("div");
const modalButton = document.createElement("button");

const tilePressed = new Audio("./media/katana_white.mp3");
const tilePressedBlack = new Audio("./media/katana_black.mp3");
const tileRightButton = new Audio("./media/katana_rmb.mp3");
const winGame = new Audio("./media/katana_win.mp3");

body.classList.add("body");
gameField.classList.add("game-field");
topField.classList.add("top-field");
emptyField.classList.add("empty-field");
topClues.classList.add("top-clues");
bottomField.classList.add("bottom-field");
gameCells.classList.add("game-cells");
leftClues.classList.add("left-clues");
buttonsZone.classList.add("buttons-zone");
resetAndActual.classList.add("reset-and-actual");
resetGame.classList.add("reset-game");
currentGameText.classList.add("current-game-text");
timer.classList.add("timer");
chooseGame.classList.add("choose-button");
randomGame.classList.add("random-button");
saveLoad.classList.add("save-load");
save.classList.add("save-button");
load.classList.add("load-button");
muteToggle.classList.add("toggle-unmute");
themeToggle.classList.add("toggle-light");
selectEasy.classList.add("select-easy");
easyScull.classList.add("easy-item");
easyPlane.classList.add("easy-item");
easySnowflake.classList.add("easy-item");
easyHourglass.classList.add("easy-item");
easySmile.classList.add("easy-item");
easyReturn.classList.add("easy-item", "easy-item-return");
modal.classList.add("modal");
modalBox.classList.add("modal-box");
modalTime.classList.add("modal-time");
modalButton.classList.add("modal-button");

/* Ячейки игрового поля */

const cell00 = document.createElement("div");
cell00.classList.add("game-cell");
const cell01 = document.createElement("div");
cell01.classList.add("game-cell");
const cell02 = document.createElement("div");
cell02.classList.add("game-cell");
const cell03 = document.createElement("div");
cell03.classList.add("game-cell");
const cell04 = document.createElement("div");
cell04.classList.add("game-cell");
const cell10 = document.createElement("div");
cell10.classList.add("game-cell");
const cell11 = document.createElement("div");
cell11.classList.add("game-cell");
const cell12 = document.createElement("div");
cell12.classList.add("game-cell");
const cell13 = document.createElement("div");
cell13.classList.add("game-cell");
const cell14 = document.createElement("div");
cell14.classList.add("game-cell");
const cell20 = document.createElement("div");
cell20.classList.add("game-cell");
const cell21 = document.createElement("div");
cell21.classList.add("game-cell");
const cell22 = document.createElement("div");
cell22.classList.add("game-cell");
const cell23 = document.createElement("div");
cell23.classList.add("game-cell");
const cell24 = document.createElement("div");
cell24.classList.add("game-cell");
const cell30 = document.createElement("div");
cell30.classList.add("game-cell");
const cell31 = document.createElement("div");
cell31.classList.add("game-cell");
const cell32 = document.createElement("div");
cell32.classList.add("game-cell");
const cell33 = document.createElement("div");
cell33.classList.add("game-cell");
const cell34 = document.createElement("div");
cell34.classList.add("game-cell");
const cell40 = document.createElement("div");
cell40.classList.add("game-cell");
const cell41 = document.createElement("div");
cell41.classList.add("game-cell");
const cell42 = document.createElement("div");
cell42.classList.add("game-cell");
const cell43 = document.createElement("div");
cell43.classList.add("game-cell");
const cell44 = document.createElement("div");
cell44.classList.add("game-cell");

const arrCells = [
  cell00,
  cell01,
  cell02,
  cell03,
  cell04,
  cell10,
  cell11,
  cell12,
  cell13,
  cell14,
  cell20,
  cell21,
  cell22,
  cell23,
  cell24,
  cell30,
  cell31,
  cell32,
  cell33,
  cell34,
  cell40,
  cell41,
  cell42,
  cell43,
  cell44,
];

// Переменные для хранения состояний игры

const levelNames = ["plane", "scull", "snowflake", "hourglass", "smile"];

let seconds = 0;
let minutes = 0;
let trigger;

let inGameArr = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
];

let winConditionArr = [];
let loadArr = [];
let copyActualGame;
let copyIngameArr;

const easyLevels = [
  [
    [0, 0, 1, 0, 0],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [0, 0, 1, 0, 0],
    [0, 1, 1, 1, 0],
  ],
  [
    [0, 1, 1, 1, 0],
    [1, 1, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 1, 1, 1, 1],
    [0, 1, 0, 1, 0],
  ],
  [
    [1, 0, 1, 0, 1],
    [0, 1, 1, 1, 0],
    [1, 1, 0, 1, 1],
    [0, 1, 1, 1, 0],
    [1, 0, 1, 0, 1],
  ],
  [
    [1, 1, 1, 1, 1],
    [0, 1, 1, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 1, 0, 1, 0],
    [1, 1, 1, 1, 1],
  ],
  [
    [1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1],
    [0, 0, 0, 0, 0],
    [1, 0, 0, 0, 1],
    [0, 1, 1, 1, 0],
  ],
];

// Счетчик для определения какой массив играет
let count = 0;

/* Inner HTML */

timer.innerHTML = `${minutes.toString().padStart(2, "0")}:${seconds
  .toString()
  .padStart(2, "0")}`;

chooseGame.innerHTML = "Choose game";
randomGame.innerHTML = "Random game";
save.innerHTML = "Save";
load.innerHTML = "Load";
easyPlane.innerHTML = "plane";
easyScull.innerHTML = "scull";
easySnowflake.innerHTML = "snowflake";
easyHourglass.innerHTML = "hourglass";
easySmile.innerHTML = "smile";
easyReturn.innerHTML = "Return";
modalButton.innerHTML = "New game";

easyReturn.style.backgroundColor = `rgba(197, 201, 201, 0.9);`;

/* Аппенды */

body.append(gameField, buttonsZone);
gameField.append(topField, bottomField);
topField.append(emptyField, topClues);
bottomField.append(leftClues, gameCells);
gameCells.append(
  cell00,
  cell01,
  cell02,
  cell03,
  cell04,
  cell10,
  cell11,
  cell12,
  cell13,
  cell14,
  cell20,
  cell21,
  cell22,
  cell23,
  cell24,
  cell30,
  cell31,
  cell32,
  cell33,
  cell34,
  cell40,
  cell41,
  cell42,
  cell43,
  cell44
);
buttonsZone.append(resetAndActual, timer, chooseGame, randomGame, saveLoad);
resetAndActual.append(resetGame, currentGameText);
saveLoad.append(muteToggle, save, load, themeToggle);
selectEasy.append(
  easyPlane,
  easyScull,
  easySmile,
  easySnowflake,
  easyHourglass,
  easyReturn
);
modal.append(modalBox);
modalBox.append(modalText, modalTime, modalButton);

/* Запуск первой случайной игры */

runRandomGame();

/* Блок функций: */

function runRandomGame() {
  const actualGame = Math.floor(Math.random() * 5);
  copyActualGame = actualGame;
  if (actualGame == count) {
    runRandomGame();
    return;
  }
  count = actualGame;
  winConditionArr = easyLevels[actualGame];
  cleanseClues();
  paintTiles();
  createLeftClues(easyLevels[actualGame]);
  createTopClues(easyLevels[actualGame]);
  seconds = 0;
  minutes = 0;
  timer.innerHTML = "00:00";
  clearInterval(trigger);
  resetTileStyle();
  currentGameText.innerHTML = `level: ${levelNames[actualGame]}`;
}

function pushWhiteTile(cellNumber) {
  switch (cellNumber) {
    case 0:
      inGameArr[0][0] = 1;
      break;
    case 1:
      inGameArr[0][1] = 1;
      break;
    case 2:
      inGameArr[0][2] = 1;
      break;
    case 3:
      inGameArr[0][3] = 1;
      break;
    case 4:
      inGameArr[0][4] = 1;
      break;
    case 5:
      inGameArr[1][0] = 1;
      break;
    case 6:
      inGameArr[1][1] = 1;
      break;
    case 7:
      inGameArr[1][2] = 1;
      break;
    case 8:
      inGameArr[1][3] = 1;
      break;
    case 9:
      inGameArr[1][4] = 1;
      break;
    case 10:
      inGameArr[2][0] = 1;
      break;
    case 11:
      inGameArr[2][1] = 1;
      break;
    case 12:
      inGameArr[2][2] = 1;
      break;
    case 13:
      inGameArr[2][3] = 1;
      break;
    case 14:
      inGameArr[2][4] = 1;
      break;
    case 15:
      inGameArr[3][0] = 1;
      break;
    case 16:
      inGameArr[3][1] = 1;
      break;
    case 17:
      inGameArr[3][2] = 1;
      break;
    case 18:
      inGameArr[3][3] = 1;
      break;
    case 19:
      inGameArr[3][4] = 1;
      break;
    case 20:
      inGameArr[4][0] = 1;
      break;
    case 21:
      inGameArr[4][1] = 1;
      break;
    case 22:
      inGameArr[4][2] = 1;
      break;
    case 23:
      inGameArr[4][3] = 1;
      break;
    case 24:
      inGameArr[4][4] = 1;
      break;
    default:
      return;
  }
}

function pushBlackTile(cellNumber) {
  switch (cellNumber) {
    case 0:
      inGameArr[0][0] = 0;
      break;
    case 1:
      inGameArr[0][1] = 0;
      break;
    case 2:
      inGameArr[0][2] = 0;
      break;
    case 3:
      inGameArr[0][3] = 0;
      break;
    case 4:
      inGameArr[0][4] = 0;
      break;
    case 5:
      inGameArr[1][0] = 0;
      break;
    case 6:
      inGameArr[1][1] = 0;
      break;
    case 7:
      inGameArr[1][2] = 0;
      break;
    case 8:
      inGameArr[1][3] = 0;
      break;
    case 9:
      inGameArr[1][4] = 0;
      break;
    case 10:
      inGameArr[2][0] = 0;
      break;
    case 11:
      inGameArr[2][1] = 0;
      break;
    case 12:
      inGameArr[2][2] = 0;
      break;
    case 13:
      inGameArr[2][3] = 0;
      break;
    case 14:
      inGameArr[2][4] = 0;
      break;
    case 15:
      inGameArr[3][0] = 0;
      break;
    case 16:
      inGameArr[3][1] = 0;
      break;
    case 17:
      inGameArr[3][2] = 0;
      break;
    case 18:
      inGameArr[3][3] = 0;
      break;
    case 19:
      inGameArr[3][4] = 0;
      break;
    case 20:
      inGameArr[4][0] = 0;
      break;
    case 21:
      inGameArr[4][1] = 0;
      break;
    case 22:
      inGameArr[4][2] = 0;
      break;
    case 23:
      inGameArr[4][3] = 0;
      break;
    case 24:
      inGameArr[4][4] = 0;
      break;
    default:
      return;
  }
}

function calcLeftClues(matrix) {
  const clues0 = [];
  const clues1 = [];
  const clues2 = [];
  const clues3 = [];
  const clues4 = [];
  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let k = 0; k < matrix[i].length; k++) {
      if (matrix[i][k] == 1) {
        count++;
      }
      if (
        (matrix[i][k] == 0 && count !== 0) ||
        count == 5 ||
        (k == 4 && count !== 0)
      ) {
        switch (i) {
          case 0:
            clues0.push(count);
            count = 0;
            break;
          case 1:
            clues1.push(count);
            count = 0;
            break;
          case 2:
            clues2.push(count);
            count = 0;
            break;
          case 3:
            clues3.push(count);
            count = 0;
            break;
          case 4:
            clues4.push(count);
            count = 0;
            break;
          default:
            return;
        }
      }
    }
  }
  const horizontalClues = [];
  horizontalClues.push(clues0);
  horizontalClues.push(clues1);
  horizontalClues.push(clues2);
  horizontalClues.push(clues3);
  horizontalClues.push(clues4);
  let maxLength = 0;
  for (let i = 0; i < horizontalClues.length; i++) {
    if (horizontalClues[i].length > maxLength) {
      maxLength = horizontalClues[i].length;
    }
  }
  for (let i = 0; i < horizontalClues.length; i++) {
    while (horizontalClues[i].length < maxLength) {
      horizontalClues[i].unshift(0);
    }
  }
  horizontalClues.push(maxLength);
  const finishArrForLeft = [];
  for (let i = 0; i < horizontalClues.length; i++) {
    for (let k = 0; k < horizontalClues[i].length; k++) {
      finishArrForLeft.push(horizontalClues[i][k]);
    }
  }
  finishArrForLeft.push(maxLength);
  return finishArrForLeft;
}

function calcTopClues(matrix) {
  const clues0 = [];
  const clues1 = [];
  const clues2 = [];
  const clues3 = [];
  const clues4 = [];
  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let k = 0; k < matrix[i].length; k++) {
      if (matrix[k][i] == 1) {
        count++;
      }
      if (
        (matrix[k][i] == 0 && count !== 0) ||
        count == 5 ||
        (k == 4 && count !== 0)
      ) {
        switch (i) {
          case 0:
            clues0.push(count);
            count = 0;
            break;
          case 1:
            clues1.push(count);
            count = 0;
            break;
          case 2:
            clues2.push(count);
            count = 0;
            break;
          case 3:
            clues3.push(count);
            count = 0;
            break;
          case 4:
            clues4.push(count);
            count = 0;
            break;
          default:
            return;
        }
      }
    }
  }
  const verticalClues = [];
  verticalClues.push(clues0);
  verticalClues.push(clues1);
  verticalClues.push(clues2);
  verticalClues.push(clues3);
  verticalClues.push(clues4);

  let maxLength = 0;
  for (let i = 0; i < verticalClues.length; i++) {
    if (verticalClues[i].length > maxLength) {
      maxLength = verticalClues[i].length;
    }
  }
  for (let i = 0; i < verticalClues.length; i++) {
    while (verticalClues[i].length < maxLength) {
      verticalClues[i].unshift(0);
    }
  }
  let countI = 0;
  const rotateArrForTop = [];
  while (countI < maxLength) {
    for (let i = 0; i < verticalClues.length; i++) {
      rotateArrForTop.push(verticalClues[i][countI]);
    }
    countI++;
  }
  rotateArrForTop.push(maxLength);
  return rotateArrForTop;
}

function createLeftClues(matrix) {
  const leftCluesF = calcLeftClues(matrix);
  const clueRows = leftCluesF[leftCluesF.length - 1];
  leftClues.style.gridTemplateColumns = `repeat(${clueRows}, 1fr)`;

  if (clueRows == 1) {
    gameField.style.width = "301px";
  }
  if (clueRows == 2) {
    gameField.style.width = "351px";
  }
  if (clueRows == 3) {
    gameField.style.width = "401px";
  }
  const totalClues = clueRows * 5;
  for (let i = 0; i < totalClues; i++) {
    const leftClueCell = document.createElement("div");
    leftClueCell.classList.add("left-clue-cell");
    leftClues.append(leftClueCell);
    if (leftCluesF[i] == 0) {
      continue;
    }
    leftClueCell.innerHTML = leftCluesF[i];
  }
}

function createTopClues(matrix) {
  const topCluesF = calcTopClues(matrix);
  const clueColumns = topCluesF[topCluesF.length - 1];
  topClues.style.gridTemplateRows = `repeat(${clueColumns}, 1fr)`;
  if (clueColumns == 1) {
    topClues.style.height = "50px";
  }
  if (clueColumns == 2) {
    topClues.style.height = "100px";
  }
  if (clueColumns == 3) {
    topClues.style.height = "150px";
  }
  const totalClues = clueColumns * 5;
  for (let i = 0; i < totalClues; i++) {
    const topClueCell = document.createElement("div");
    topClueCell.classList.add("top-clue-cell");
    topClues.append(topClueCell);
    if (topCluesF[i] == 0) {
      continue;
    }
    topClueCell.innerHTML = topCluesF[i];
  }
}

function resetTileStyle() {
  for (let i = 0; i < arrCells.length; i++) {
    if (arrCells[i].classList.contains("game-cell-cross")) {
      arrCells[i].classList.replace("game-cell-cross", "game-cell");
      while (arrCells[i].firstChild) {
        arrCells[i].removeChild(arrCells[i].firstChild);
      }
    }
  }
}

function cleanseClues() {
  while (leftClues.firstChild) {
    leftClues.removeChild(leftClues.firstChild);
  }
  while (topClues.firstChild) {
    topClues.removeChild(topClues.firstChild);
  }
}

function updateTime() {
  seconds++;
  if (seconds === 60) {
    minutes++;
    seconds = 0;
  }
  timer.innerHTML = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
}

function expandGameChoise() {
  buttonsZone.replaceChild(selectEasy, chooseGame);
}

function collapseGameChoise() {
  buttonsZone.replaceChild(chooseGame, selectEasy);
}

function showModal() {
  body.append(modal);
  modalTime.innerHTML = `Great! You have solved the nonogram in ${minutes
    .toString()
    .padStart(2, "0")} minutes ${seconds.toString().padStart(2, "0")} seconds!`;
  clearInterval(trigger);
  winGame.play();
  body.style.overflowY = "hidden";
}

function closeModal() {
  body.removeChild(modal);
  runRandomGame();
  seconds = 0;
  minutes = 0;
  timer.innerHTML = "00:00";
  clearInterval(trigger);
  body.style.overflowY = "auto";
}

function compareGameTiles() {
  if (JSON.stringify(winConditionArr) === JSON.stringify(inGameArr)) {
    showModal();
  }
}

function paintTiles() {
  for (let i = 0; i < arrCells.length; i++) {
    arrCells[i].classList.replace("game-cell-black", "game-cell");
  }
  inGameArr = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ];
}

function runSelectGame(level) {
  const levels = [0, 1, 2, 3, 4];
  const selectedGame = levels[level];
  copyActualGame = selectedGame;
  count = selectedGame;
  winConditionArr = easyLevels[level];
  cleanseClues();
  paintTiles();
  createLeftClues(easyLevels[level]);
  createTopClues(easyLevels[level]);
  resetTileStyle();
}

/* Блок EventListeners */

chooseGame.addEventListener("click", () => expandGameChoise());

muteToggle.addEventListener("click", () => {
  if (muteToggle.classList.contains("toggle-unmute")) {
    muteToggle.classList.replace("toggle-unmute", "toggle-mute");
    tilePressed.volume = 0;
    tilePressedBlack.volume = 0;
    tileRightButton.volume = 0;
    winGame.volume = 0;
    return;
  }
  if (muteToggle.classList.contains("toggle-mute")) {
    muteToggle.classList.replace("toggle-mute", "toggle-unmute");
    tilePressed.volume = 1;
    tilePressedBlack.volume = 1;
    tileRightButton.volume = 1;
    winGame.volume = 1;
    return;
  }
});

themeToggle.addEventListener("click", () => {
  if (themeToggle.classList.contains("toggle-light")) {
    themeToggle.classList.replace("toggle-light", "toggle-black");
    body.style.backgroundImage = "url('media/body_background_black.jpg')";
    gameField.style.backgroundColor = "rgb(43, 42, 42)";
    buttonsZone.style.backgroundColor = "rgb(43, 42, 42)";
    timer.style.color = "white";
    chooseGame.style.color = "white";
    randomGame.style.color = "white";
    chooseGame.style.backgroundColor = "rgb(76, 67, 94)";
    randomGame.style.backgroundColor = "rgb(76, 67, 94)";
    save.style.color = "white";
    save.style.backgroundColor = "rgb(62, 82, 65)";
    load.style.color = "white";
    load.style.backgroundColor = "rgb(133, 66, 66)";
    easyHourglass.style.color = "white";
    easyHourglass.style.backgroundColor = "rgb(194, 170, 110)";
    easyScull.style.color = "white";
    easyScull.style.backgroundColor = "rgb(194, 170, 110)";
    easySmile.style.color = "white";
    easySmile.style.backgroundColor = "rgb(194, 170, 110)";
    easySnowflake.style.color = "white";
    easySnowflake.style.backgroundColor = "rgb(194, 170, 110)";
    easyPlane.style.color = "white";
    easyPlane.style.backgroundColor = "rgb(194, 170, 110)";
    easyReturn.style.color = "white";
    easyReturn.style.backgroundColor = "rgb(133, 66, 66)";
    modalTime.style.color = "white";
    modalButton.style.color = "white";
    modalBox.style.backgroundColor = "rgb(76, 67, 94)";
    currentGameText.style.color = "white";
    return;
  }
  if (themeToggle.classList.contains("toggle-black")) {
    themeToggle.classList.replace("toggle-black", "toggle-light");
    body.style.backgroundImage = "url('media/body_background7.jpg')";
    gameField.style.backgroundColor = "#fff";
    buttonsZone.style.backgroundColor = "#fff";
    timer.style.color = "black";
    chooseGame.style.color = "black";
    randomGame.style.color = "black";
    chooseGame.style.backgroundColor = "rgba(197, 201, 201, 0.9)";
    randomGame.style.backgroundColor = "rgba(197, 201, 201, 0.9)";
    save.style.color = "black";
    save.style.backgroundColor = "rgba(152, 212, 155, 1)";
    load.style.color = "black";
    load.style.backgroundColor = "rgba(214, 159, 168, 1)";
    easyHourglass.style.color = "black";
    easyHourglass.style.backgroundColor = "rgba(243, 240, 218, 1)";
    easyScull.style.color = "black";
    easyScull.style.backgroundColor = "rgba(243, 240, 218, 1)";
    easySmile.style.color = "black";
    easySmile.style.backgroundColor = "rgba(243, 240, 218, 1)";
    easySnowflake.style.color = "black";
    easySnowflake.style.backgroundColor = "rgba(243, 240, 218, 1)";
    easyPlane.style.color = "black";
    easyPlane.style.backgroundColor = "rgba(243, 240, 218, 1)";
    easyReturn.style.color = "black";
    easyReturn.style.backgroundColor = "rgba(214, 159, 168, 1)";
    modalTime.style.color = "black";
    modalButton.style.color = "black";
    modalBox.style.backgroundColor = "rgba(243, 240, 218, 1)";
    currentGameText.style.color = "black";
    return;
  }
});

resetGame.addEventListener("click", () => {
  seconds = 0;
  minutes = 0;
  timer.innerHTML = "00:00";
  clearInterval(trigger);
  inGameArr = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ];
  for (let i = 0; i < arrCells.length; i++) {
    if (arrCells[i].classList.contains("game-cell-black")) {
      arrCells[i].classList.replace("game-cell-black", "game-cell");
      continue;
    }
    if (arrCells[i].classList.contains("game-cell-cross")) {
      arrCells[i].classList.replace("game-cell-cross", "game-cell");
      while (arrCells[i].firstChild) {
        arrCells[i].removeChild(arrCells[i].firstChild);
      }
      continue;
    }
  }
  console.log(inGameArr);
});

modalButton.addEventListener("click", () => closeModal());

randomGame.addEventListener("click", () => runRandomGame());

easyReturn.addEventListener("click", () => collapseGameChoise());

for (let i = 0; i < arrCells.length; i++) {
  arrCells[i].addEventListener("click", function (event) {
    if (arrCells[i].classList.contains("game-cell")) {
      tilePressed.pause();
      tilePressed.currentTime = 0.0;
      tilePressed.play();
      arrCells[i].classList.replace("game-cell", "game-cell-black");
      pushWhiteTile(i);
      compareGameTiles();
      if (timer.innerHTML === "00:00") {
        updateTime();
        trigger = setInterval(updateTime, 1000);
      }
      return;
    }
    if (arrCells[i].classList.contains("game-cell-black")) {
      arrCells[i].classList.replace("game-cell-black", "game-cell");
      pushBlackTile(i);
      compareGameTiles();
      tilePressedBlack.pause();
      tilePressedBlack.currentTime = 0.0;
      tilePressedBlack.play();
      return;
    }
    if (arrCells[i].classList.contains("game-cell-cross")) {
      tilePressed.pause();
      tilePressed.currentTime = 0.0;
      tilePressed.play();
      arrCells[i].removeChild(arrCells[i].firstChild);
      arrCells[i].removeChild(arrCells[i].firstChild);
      arrCells[i].classList.replace("game-cell-cross", "game-cell-black");
      pushWhiteTile(i);
      compareGameTiles();
      tilePressed.pause();
      tilePressed.currentTime = 0.0;
      tilePressed.play();
      return;
    }
  });
  arrCells[i].addEventListener("contextmenu", (e) => {
    const gameCellCrossline = document.createElement("div");
    gameCellCrossline.classList.add("game-cell-crossline");
    const gameCellCrossline2 = document.createElement("div");
    gameCellCrossline2.classList.add("game-cell-crossline-2");
    tileRightButton.pause();
    tileRightButton.currentTime = 0.0;
    tileRightButton.play();
    console.log("Правая");
    e.preventDefault();
    if (arrCells[i].classList.contains("game-cell-cross")) {
      arrCells[i].removeChild(arrCells[i].firstChild);
      arrCells[i].removeChild(arrCells[i].firstChild);
      arrCells[i].classList.replace("game-cell-cross", "game-cell");
      return;
    }
    console.log(arrCells[i]);
    arrCells[i].append(gameCellCrossline, gameCellCrossline2);
    if (arrCells[i].classList.contains("game-cell-black")) {
      pushBlackTile(i);
      compareGameTiles();
      arrCells[i].classList.replace("game-cell-black", "game-cell-cross");
      return;
    }
    if (arrCells[i].classList.contains("game-cell")) {
      arrCells[i].classList.replace("game-cell", "game-cell-cross");
      return;
    }
  });
}

easyPlane.addEventListener("click", () => {
  runSelectGame(0);
  collapseGameChoise();
  seconds = 0;
  minutes = 0;
  timer.innerHTML = "00:00";
  clearInterval(trigger);
  currentGameText.innerHTML = `level: ${levelNames[0]}`;
});

easyScull.addEventListener("click", () => {
  runSelectGame(1);
  collapseGameChoise();
  seconds = 0;
  minutes = 0;
  timer.innerHTML = "00:00";
  clearInterval(trigger);
  currentGameText.innerHTML = `level: ${levelNames[1]}`;
});

easySnowflake.addEventListener("click", () => {
  runSelectGame(2);
  collapseGameChoise();
  seconds = 0;
  minutes = 0;
  timer.innerHTML = "00:00";
  currentGameText.innerHTML = `level: ${levelNames[2]}`;
});

easyHourglass.addEventListener("click", () => {
  runSelectGame(3);
  collapseGameChoise();
  seconds = 0;
  minutes = 0;
  timer.innerHTML = "00:00";
  clearInterval(trigger);
  currentGameText.innerHTML = `level: ${levelNames[3]}`;
});

easySmile.addEventListener("click", () => {
  runSelectGame(4);
  collapseGameChoise();
  seconds = 0;
  minutes = 0;
  timer.innerHTML = "00:00";
  clearInterval(trigger);
  currentGameText.innerHTML = `level: ${levelNames[4]}`;
});

// Сохранение и загрузка игры через LocalStorage

save.addEventListener("click", () => {
  const saveArr = [];

  for (let i = 0; i < arrCells.length; i++) {
    if (arrCells[i].classList.contains("game-cell-cross")) {
      saveArr.push(2);
    }
    if (arrCells[i].classList.contains("game-cell")) {
      saveArr.push(0);
    }
    if (arrCells[i].classList.contains("game-cell-black")) {
      saveArr.push(1);
    }
  }

  copyIngameArr = inGameArr;

  localStorage.setItem("saveNonogramTiles", saveArr);
  localStorage.setItem("saveNoonogramArr", copyActualGame);
  localStorage.setItem(
    "saveNonogramCopyInGameArr",
    JSON.stringify(copyIngameArr)
  );

  localStorage.setItem("saveSecunds", seconds);
  localStorage.setItem("saveMinutes", minutes);
});

load.addEventListener("click", () => {
  const tempClues = +localStorage.getItem("saveNoonogramArr");
  currentGameText.innerHTML = `level: ${levelNames[tempClues]}`;
  console.log(tempClues);
  runSelectGame(tempClues);
  const tempArr = localStorage.getItem("saveNonogramTiles").split(",");
  for (let i = 0; i < tempArr.length; i++) {
    if (tempArr[i] == 1) {
      if (arrCells[i].classList.contains("game-cell-cross")) {
        arrCells[i].classList.replace("game-cell-cross", "game-cell-black");
        continue;
      }
      if (arrCells[i].classList.contains("game-cell")) {
        arrCells[i].classList.replace("game-cell", "game-cell-black");
        continue;
      }
    }
    if (tempArr[i] == 2) {
      if (arrCells[i].classList.contains("game-cell")) {
        arrCells[i].classList.replace("game-cell", "game-cell-cross");
        const gameCellCrossline = document.createElement("div");
        gameCellCrossline.classList.add("game-cell-crossline");
        const gameCellCrossline2 = document.createElement("div");
        gameCellCrossline2.classList.add("game-cell-crossline-2");
        arrCells[i].append(gameCellCrossline, gameCellCrossline2);
        continue;
      }
      if (arrCells[i].classList.contains("game-cell-black")) {
        arrCells[i].classList.replace("game-cell-black", "game-cell-cross");
        const gameCellCrossline = document.createElement("div");
        gameCellCrossline.classList.add("game-cell-crossline");
        const gameCellCrossline2 = document.createElement("div");
        gameCellCrossline2.classList.add("game-cell-crossline-2");
        arrCells[i].append(gameCellCrossline, gameCellCrossline2);
        continue;
      }
    }
  }
  const tempInGameArr = JSON.parse(
    localStorage.getItem("saveNonogramCopyInGameArr")
  );
  inGameArr = tempInGameArr;

  const tempSecunds = +localStorage.getItem("saveSecunds");
  const tempMinutes = +localStorage.getItem("saveMinutes");

  seconds = tempSecunds;
  minutes = tempMinutes;
  timer.innerHTML = `${tempMinutes.toString().padStart(2, "0")}:${tempSecunds
    .toString()
    .padStart(2, "0")}`;
  clearInterval(trigger);
  trigger = setInterval(updateTime, 1000);
});
