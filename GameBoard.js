let ctx = document.getElementById('myCanvas').getContext('2d');
let ball = new Ball();
let bar = new Bar();
let arrMove = [];
function start() {
    if (ball.status) {
        ctx.clearRect(0, 0, 700, 500);
        ball.drawBall();
        bar.drawBar();
        drawBrick();
        ball.moveBall(bar);
        bar.moveBar();
        requestAnimationFrame(start);
    } else {
        ctx.clearRect(0, 0, 700, 500);
        ctx.font = "50px Arial";
        ctx.fillStyle = 'red';
        ctx.fillText('You lost', 250, 250);
    }
}

function moveSelectionDown(evt) {
    arrMove[evt.keyCode] = true;
    // bar.moveBar();
}

function moveSelectionUp(evt) {
    arrMove[evt.keyCode] = false;
    // bar.moveBar();
}

let arrBrick = [];

function createBrick() {
    for (i = 0; i < 5; i++) {
        let row = [];
        arrBrick.push(row);
        for (j = 0; j < 14; j++) {
            let brick = new Brick(i, j, status);
            row.push(brick);
        }

    }
}

function drawBrick() {
    for (i = 0; i < 5; i++) {
        for (j = 0; j < 14; j++) {
            arrBrick[i][j].vacham(ball);
            if (arrBrick[i][j].status) {
                ctx.beginPath();
                ctx.fillStyle = "#ff3805";
                ctx.fillRect(arrBrick[i][j].y + 5, arrBrick[i][j].x + 5, 40, 20);
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}

createBrick();
start();
window.addEventListener('keydown', moveSelectionDown);
window.addEventListener('keyup', moveSelectionUp);



