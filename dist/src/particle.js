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
    clase 2 particulas
*/
var Particle2 = /** @class */ (function () {
    function Particle2(x, y, screenCanvas) {
        this.lightnees = 3;
        this.x = x;
        this.y = y;
        this.speedX = Math.random() * 4 - 2;
        this.speedY = Math.random() * 4 - 2;
        this.maxSize = Math.random() * 7 + 5;
        this.size = Math.random() * 1 + 2;
        this.ctx = screenCanvas;
        this._2PI = Math.PI * 2;
        this.vs = Math.random() * 0.2 + 0.05;
        this.anglex = Math.random() * 6.2;
        this.vax = Math.random() * 0.6 - 0.3;
        this.angley = Math.random() * 6.2;
        this.vay = Math.random() * 0.6 - 0.3;
    }
    Particle2.prototype.update = function () {
        this.x += this.speedX + Math.sin(this.anglex);
        this.y += this.speedY + Math.sin(this.angley);
        this.size += this.vs;
        this.anglex += this.vax;
        this.angley += this.vay;
        if (this.lightnees < 70)
            this.lightnees += 0.25;
        if (this.size < this.maxSize) {
            this.ctx.beginPath();
            this.ctx.fillRect(this.x, this.y, 0.1, 0.1);
            this.ctx.arc(this.x, this.y, this.size, 0, this._2PI);
            this.ctx.fillStyle = 'hsl(18,36%,' + this.lightnees + '%)';
            this.ctx.fill();
            this.ctx.stroke();
            requestAnimationFrame(this.update.bind(this));
        }
    };
    return Particle2;
}());
export { Particle2 };
/*
    clase 3 particulas
*/
var Particle3 = /** @class */ (function () {
    function Particle3(x, y, screenCanvas) {
        this.lightnees = 20; //utimo valor para hsl
        this.x = x;
        this.y = y;
        this.speedX = Math.random() * 4 - 2;
        this.speedY = Math.random() * 4 - 2;
        this.maxSize = Math.random() * 6 + 4;
        this.size = Math.random() * 1 + 2;
        this.ctx = screenCanvas;
        this._2PI = Math.PI * 2;
        this.vs = Math.random() * 0.2 + 0.05;
        this.anglex = Math.random() * 6.2;
        this.vax = Math.random() * 0.6 - 0.3;
        this.angley = Math.random() * 6.2;
        this.vay = Math.random() * 0.6 - 0.3;
    }
    Particle3.prototype.update = function () {
        this.x += this.speedX + Math.sin(this.anglex);
        this.y += this.speedY + Math.sin(this.angley);
        this.size += this.vs;
        this.anglex += this.vax;
        this.angley += this.vay;
        if (this.lightnees < 70)
            this.lightnees += 0.25;
        if (this.size < this.maxSize) {
            this.ctx.beginPath();
            this.ctx.fillRect(this.x, this.y, 0.1, 0.1);
            this.ctx.arc(this.x, this.y, this.size, 0, this._2PI);
            this.ctx.fillStyle = 'hsl(120,56%,' + this.lightnees + '%)';
            this.ctx.fill();
            this.ctx.stroke();
            requestAnimationFrame(this.update.bind(this));
        }
        else {
            var flores = new flower(this.x, this.y, this.size, this.ctx);
            flores.grow();
        }
    };
    return Particle3;
}());
export { Particle3 };
var flower = /** @class */ (function () {
    function flower(x, y, size, screenCanvas) {
        this.ctx = screenCanvas;
        this.x = x;
        this.y = y;
        this.size = size;
        //this.willf=true;
        this.vs = Math.random() * 0.3 + 0.02;
        this.maxsizeflow = this.size + Math.random() * 55;
        this.img = new Image();
        this.img.src = 'arreglo2.png';
        this.framesz = 100;
        this.framex = Math.floor(Math.random() * 3);
        this.framey = Math.floor(Math.random() * 3);
        this.size > 11.5 ? this.willf = true : this.willf = false;
        this.angle = 0;
        this.va = Math.random() * 0.05 - 0.025;
    }
    ;
    flower.prototype.grow = function () {
        if (this.size < this.maxsizeflow) {
            this.size += 0.3;
            //this.ctx.save();
            this.ctx.drawImage(this.img, this.framesz * this.framex, this.framesz * this.framey, this.framesz, this.framesz, this.x - this.size / 2, this.y - this.size / 2, this.size, this.size);
            //this.ctx.restore();
            requestAnimationFrame(this.grow.bind(this));
        }
    };
    return flower;
}());
export { flower };
/*
    clase 4 particulas
*/
var Particle4 = /** @class */ (function () {
    function Particle4(x, y, screenCanvas) {
        this.x = x;
        this.y = y;
        this.speedX = Math.random() * 4 - 2;
        this.speedY = Math.random() * 4 - 2;
        this.maxSize = Math.random() * 7 + 20;
        this.size = Math.random() * 1 + 2;
        this.ctx2 = screenCanvas;
        this._2PI = Math.PI * 2;
        this.anglex = Math.random() * 6.2;
        this.angley = Math.random() * 6.2;
        this.vax = Math.random() * 0.6 - 0.3;
        this.vs = Math.random() * 0.2 + 0.5;
        this.vay = Math.random() * 0.6 - 0.3;
        this.lightnees = 10;
    }
    Particle4.prototype.update = function () {
        this.x += this.speedX + Math.sin(this.anglex);
        this.y += this.speedY + Math.sin(this.angley);
        this.size += this.vs;
        this.anglex += this.vax;
        this.angley += this.vay;
        if (this.lightnees < 70)
            this.lightnees += 0.25;
        if (this.size < this.maxSize) {
            this.ctx2.fillStyle = '#FAFAFA';
            this.ctx2.fillRect(this.x, this.y, this.size, this.size);
            this.ctx2.strokeStyle = '#3E2723';
            this.ctx2.strokeRect(this.x, this.y, this.size, this.size);
            requestAnimationFrame(this.update.bind(this));
        }
    };
    return Particle4;
}());
export { Particle4 };
/*
    clase 5 particulas
*/ 
