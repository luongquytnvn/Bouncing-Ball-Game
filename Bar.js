let xbar = 150;

function Bar() {
    this.weight = 150;
    this.height = 10;
    this.x = xbar;
    this.y = 490;
    this.drawBar = function () {
        ctx.beginPath();
        ctx.fillStyle = 'black';
        ctx.fillRect(this.x, this.y, this.weight, this.height);
    };

    this.moveBar = function () {
        if (arrMove[37] && this.x <= 550 && this.x >= 0) {
            this.x -= 10;
        }
        if (arrMove[39] && this.x <= 550 && this.x >= 0) {
            this.x += 10;
        }
        if (this.x < 0) {
            this.x = 0;
        } else if (this.x > 550) {
            this.x = 550;
        }
    };
}