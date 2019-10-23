function Brick(x, y, status) {
    this.x = x * 30;
    this.y = y * 50;
    this.status = true;
    this.vacham = function (ball) {
        if (ball.y - ball.r <= this.x + 20 && ball.x <= this.y + 40 && ball.x >= this.y && speedy < 0) {
            this.status = false;
            this.x = -10;
            this.y = -10;
            ball.speedy = -ball.speedy;
        }

    }
}