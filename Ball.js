let speedx = 3;
let speedy = -4;
let xball = 100;
let yball = 200;
let rball = 10;

function Ball() {
    this.x = xball;
    this.y = yball;
    this.r = rball;
    this.status = true;
    this.speedx = speedx;
    this.speedy = speedy;
    this.drawBall = function () {
        ctx.beginPath();
        ctx.fillStyle = 'brown';
        ctx.arc(this.x, this.y, rball, 0, 2 * Math.PI);
        ctx.fill();
    };
    this.moveBall = function (bar1) {
        if (this.y+this.r>=500) {
            this.status = false;
        } else {
            if (this.x + this.r >= 700 || this.x - this.r <= 0) {
                this.speedx = -this.speedx;
            }
            if (this.y - this.r <= 0) {
                this.speedy = -this.speedy;
            }
            if (this.x >= bar1.x - this.r && this.x <= (bar1.x + 150 + this.r) && this.y + this.r >= 490) {
                this.speedy = -this.speedy;
            }
            this.x += this.speedx;
            this.y += this.speedy;
        }
    };
}