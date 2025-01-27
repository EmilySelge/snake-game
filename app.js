const gameBoardDiv = document.getElementById('game-board')

const height = 40;
const width = 40;

gameBoardDiv.style.gridTemplateColumns = `repeat(${width}, 8px)`;
gameBoardDiv.style.gridTemplateRows = `repeat(${height}, 8px)`;

let snake = [Math.floor(width / 2), Math.floor(width / 2)]


function drawGameboard() {

    for (let y = 0; y < width; y++ ) {
        for (let x = 0; x < height; x++) {

            let cellDiv = document.createElement('div');

            if () {
                
            }

            gameBoardDiv.appendChild(cellDiv)

        }

    }

}

