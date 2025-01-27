const gameBoardDiv = document.getElementById('game-board')

const height = 40;
const width = 40;
const speed = 100;

gameBoardDiv.style.gridTemplateColumns = `repeat(${width}, 10px)`;
gameBoardDiv.style.gridTemplateRows = `repeat(${height}, 10px)`;

let snake = [Math.floor(height / 2) + '_' +  Math.floor(width / 2)]
let direction = 'left' 

const intervalId = setInterval(run, speed)


run()

function run() {
    updateSnake()
    drawGameboard()

}

document.addEventListener('keydown', e => {
    switch (e.key.toLowerCase()) {
        case 'w':
        case 'arrowup':
            direction = 'up'
            break;
        case 's':
        case 'arrowdown':
            direction = 'down'
            break;
        case 'a':
        case 'arrowleft':
            direction = 'left'
            break;
        case 'd':
        case 'arrowright':
            direction = 'right'
            break;
        
    }
})


function drawGameboard() {

    gameBoardDiv.innerHTML = ''

    for (let y = 0; y < width; y++ ) {
        for (let x = 0; x < height; x++) {

            let cellDiv = document.createElement('div');

            if (snake.includes(`${y}_${x}`)) {
                cellDiv.style.backgroundColor = 'red';
            }

            gameBoardDiv.appendChild(cellDiv)

        }

    }

}


function updateSnake() {
    let [y, x] = snake[0].split('_');
    switch ( direction ) {
        case `up`:
            if ( y == 0 ) {
                y = height;
            } else {
                y--;
            }
            break;
        case `down`:
            if (y == height) {
                y = 0;
            } else {
                y++;
            }
            break;
        case `left`:
            if (x == 0) {
                x = height
            } else {
                x--;
            }
            break;
        case `right`:
            if (x == width) {
                x = 0
            } else {
                x++;
            }
            break;

    }

    snake.shift()
    snake.push(`${y}_${x}`)
}
