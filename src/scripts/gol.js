const boardElement = document.getElementById('board');
let boardWidth = 100;  // Width of the board
const boardHeight = 7;  // Height of the board
const currentGrid = [];  // Current state of the grid
const nextGrid = [];  // Next state of the grid
let intervalId;  // ID for the setInterval

const cells = ['30', '20', '51', '01', '62', '63', '03', '64', '54', '44', '34', '24', '14']

const heavyWeightSpaceshipCell = (x, y) => {
    const coor = `${x}${y}`
    return cells.includes(coor)
}

function initializeBoard() {
    for (let y = 0; y < boardHeight; y++) {
        currentGrid[y] = [];
        nextGrid[y] = [];
        for (let x = 0; x < boardWidth; x++) {
            let cell = document.createElement('div');
            cell.classList.add('cell');
            boardElement.appendChild(cell);
            if (heavyWeightSpaceshipCell(x, y)) {
                cell.classList.add('alive')
                currentGrid[y][x] = 1;
                nextGrid[y][x] = 0;
            } else {
                currentGrid[y][x] = 0;
                nextGrid[y][x] = 0;
            }
        }
    }
}

function computeNextGeneration() {
    for (let y = 0; y < boardHeight; y++) {
        for (let x = 0; x < boardWidth; x++) {
            const aliveNeighbors = countAliveNeighbors(y, x);
            const cell = currentGrid[y][x];
            nextGrid[y][x] = (cell === 1 && (aliveNeighbors === 2 || aliveNeighbors === 3)) || (cell === 0 && aliveNeighbors === 3) ? 1 : 0;
        }
    }

    // Apply changes and minimize DOM updates
    for (let y = 0; y < boardHeight; y++) {
        for (let x = 0; x < boardWidth; x++) {
            if (currentGrid[y][x] !== nextGrid[y][x]) {
                const cellElement = boardElement.children[y * boardWidth + x];
                cellElement.classList.toggle('alive', nextGrid[y][x] === 1);
            }
            currentGrid[y][x] = nextGrid[y][x];
        }
    }
}

function countAliveNeighbors(y, x) {
    let count = 0;
    for (let yOffset = -1; yOffset <= 1; yOffset++) {
        for (let xOffset = -1; xOffset <= 1; xOffset++) {
            if (yOffset === 0 && xOffset === 0) continue;
            const newY = (y + yOffset + boardHeight) % boardHeight;
            const newX = (x + xOffset + boardWidth) % boardWidth;
            count += currentGrid[newY][newX];
        }
    }
    return count;
}

function startGame() {
    if (intervalId) clearInterval(intervalId);
    intervalId = setInterval(computeNextGeneration, 100);
}

function changeWidth() {
    if (intervalId) clearInterval(intervalId); // stop the game

    document.querySelectorAll(".cell").forEach(el => el.remove()); // remove the cells

    var r = document.querySelector(':root')
    boardWidth += 50;
    boardWidth %= 200;


    r.style.setProperty('--board-width', boardWidth)
    initializeBoard()
}

const startButton = document.getElementById('startButton')

startButton.onclick = startGame

const changeWidthButton = document.getElementById('changeWidthButton')

changeWidthButton.onclick = changeWidth

window.onresize = () => {
    console.log(document.getElementById('board').clientWidth)
}

initializeBoard();
