var Particle = /** @class */ (function () {
    function Particle(x, y, screenCanvas) {
        this.x = x;
        this.y = y;
        this.speedX = Math.random() * 3 - 2;
        this.speedY = Math.random() * 3 - 2;
        this.maxSize = Math.random() * 5 + 4;
        this.size = Math.random() * 1 + 2;
        this.ctx = screenCanvas;
        this._2PI = Math.PI * 2;
    }
    Particle.prototype.update = function () {
        this.x += this.speedX;
        this.y += this.speedY;
        this.size += 0.1;
        if (this.size < this.maxSize) {
            this.ctx.beginPath();
            this.ctx.fillRect(this.x, this.y, 0.1, 0.1);
            this.ctx.arc(this.x, this.y, this.size, 0, this._2PI);
            this.ctx.fillStyle = 'hsl(151,92%,63%)';
            this.ctx.fill();
            this.ctx.stroke();
            requestAnimationFrame(this.update.bind(this));
        }
    };
    return Particle;
}());
export { Particle };
/*
    fin de la clase de particulas 1
*/
