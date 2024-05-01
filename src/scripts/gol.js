const boardElement = document.getElementById('board');
const boardSize = 10;
const grid = [];
let intervalId;

const cells = ['30', '20', '51', '01', '62', '63', '03', '64', '54', '44', '34', '24', '14']

const heavyWeightSpaceshipCell = (x, y) => {
    const coor = `${x}${y}`
    return cells.includes(coor)
}

function initializeBoard() {
    for (let y = 0; y < boardSize; y++) {
        let row = [];
        for (let x = 0; x < boardSize; x++) {
            let cell = document.createElement('div');
            cell.classList.add('cell');
            if (heavyWeightSpaceshipCell(x, y)) {
                cell.classList.add('alive');
                boardElement.appendChild(cell);
                row.push(1)
            } else {
                boardElement.appendChild(cell);
                row.push(0);
            }

        }
        grid.push(row);
    }
}

function computeNextGeneration() {
    let changes = [];

    grid.forEach((row, y) => {
        row.forEach((cell, x) => {
            let aliveNeighbors = countAliveNeighbors(y, x);
            if (cell === 1 && (aliveNeighbors < 2 || aliveNeighbors > 3)) {
                changes.push({ y, x, state: 0 });
            } else if (cell === 0 && aliveNeighbors === 3) {
                changes.push({ y, x, state: 1 });
            }
        });
    });

    changes.forEach(change => {
        grid[change.y][change.x] = change.state;
        const cellElement = boardElement.children[change.y * boardSize + change.x];
        cellElement.animate([
            { backgroundColor: change.state ? 'black' : 'white' }
        ], {
            duration: 50,
            fill: 'forwards'
        });
    });
}

function countAliveNeighbors(y, x) {
    let count = 0;
    for (let yOffset = -1; yOffset <= 1; yOffset++) {
        for (let xOffset = -1; xOffset <= 1; xOffset++) {
            if (yOffset === 0 && xOffset === 0) continue;
            // Wrap around the edges
            let newY = (y + yOffset + boardSize) % boardSize;
            let newX = (x + xOffset + boardSize) % boardSize;
            count += grid[newY][newX];
        }
    }
    return count;
}

function startGame() {
    console.log('starting')
    if (intervalId) clearInterval(intervalId);
    intervalId = setInterval(computeNextGeneration, 500);
}

const startButton = document.getElementById('startButton')

startButton.onclick = startGame

initializeBoard();
