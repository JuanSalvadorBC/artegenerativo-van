var Particle = /** @class */ (function () {
    //constructor que recibe los 3 parametros que se utilizaran como x,y cordenadas del mouse y por ultimo el camvas donde se dibujara.
    function Particle(x, y, screenCanvas) {
        this.x = x;
        this.y = y;
        this.speedX = Math.random() * 3 - 2;
        this.speedY = Math.random() * 3 - 2;
        this.maxSize = Math.random() * 5 + 4; //maximo tamaño del la imagen del circulo
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
            this.ctx.fillRect(this.x, this.y, 0.1, 0.1); //coordenadas donde se dibujara los puntos que se muevan con el moouse
            this.ctx.arc(this.x, this.y, this.size, 0, this._2PI);
            this.ctx.fillStyle = 'hsl(151,92%,63%)'; //color de la figura que recibe valores de hsl
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
        this.lightnees = 3; //utimo valor de hsl dado por defecto
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
        this.anglex = Math.random() * 6.2; //angulo en base ala corrdendad x 
        this.vax = Math.random() * 0.6 - 0.3;
        this.angley = Math.random() * 6.2; //angulo en base a la coordenada y
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
            this.ctx.fillStyle = 'hsl(120,56%,' + this.lightnees + '%)'; //valor hsl con el ultimo valor dado por defecto
            this.ctx.fill();
            this.ctx.stroke();
            requestAnimationFrame(this.update.bind(this));
        }
        else {
            var flores = new flower(this.x, this.y, this.size, this.ctx); //en base ala condicion llamamos la clase flower para la animacion de flores
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
            requestAnimationFrame(this.grow.bind(this)); //animacion para la pantalla que actualmente se usa
        }
    };
    return flower;
}());
export { flower };
/*
    clase 4 particulas, efecto 1 ventana 2
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
    clase 5 particulas, efecto 2 de la ventana 2
*/
var Particle5 = /** @class */ (function () {
    function Particle5(x, y, screenCanvas) {
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
        this.angle = 0;
        this.vax = Math.random() * 0.6 - 0.3;
        this.vs = Math.random() * 0.2 + 0.5;
        this.vay = Math.random() * 0.6 - 0.3;
        this.lightnees = 10;
        this.va = Math.random() * 0.02 + 0.05;
    }
    Particle5.prototype.update = function () {
        this.x += this.speedX + Math.sin(this.anglex);
        this.y += this.speedY + Math.sin(this.angley);
        this.size += this.vs;
        this.anglex += this.vax;
        this.angley += this.vay;
        this.angle += this.va;
        if (this.lightnees < 70)
            this.lightnees += 0.25;
        if (this.size < this.maxSize) {
            this.ctx2.save();
            this.ctx2.translate(this.x, this.y);
            this.ctx2.rotate(this.angle);
            this.ctx2.lineWidth = 0.5;
            this.ctx2.shadowOffsetX = 0;
            this.ctx2.shadowOffsetX = 10;
            this.ctx2.shadowBlur = 10;
            this.ctx2.shadowColor = 'rgba(0,0,0,5)';
            var double = this.size / 2;
            this.ctx2.fillStyle = 'white';
            this.ctx2.fillRect(0 - this.size / 2, 0 - this.size / 2, this.size, this.size);
            this.ctx2.strokeStyle = '#33691E';
            this.ctx2.strokeRect(0 - double / 2, 0 - double / 2, this.size * 2, this.size * 2);
            requestAnimationFrame(this.update.bind(this));
            this.ctx2.restore();
        }
    };
    return Particle5;
}());
export { Particle5 };
/*
    clase 6 particulas, efecto 3 de la ventana 2
*/
var Particle6 = /** @class */ (function () {
    function Particle6(x, y, screenCanvas) {
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
        this.angle = 0;
        this.vax = Math.random() * 0.6 - 0.3;
        this.vs = Math.random() * 0.2 + 0.5;
        this.vay = Math.random() * 0.6 - 0.3;
        this.lightnees = 10;
        this.va = Math.random() * 0.02 + 0.05;
    }
    Particle6.prototype.update = function () {
        this.x += this.speedX + Math.sin(this.anglex);
        this.y += this.speedY + Math.sin(this.angley);
        this.size += this.vs;
        this.anglex += this.vax;
        this.angley += this.vay;
        this.angle += this.va;
        /*
        
             if(this.lightnees<70)this.lightnees+=0.25;
             if(this.size < this.maxSize){
               this.ctx2.save();
               this.ctx2.translate(this.x,this.y);
               this.ctx2.rotate(this.angle);
               this.ctx2.fillRect(0 - this.size/2, 0 - this.size/2, this.size, this.size);
               
               let double= this.size*2;
               this.ctx2.lineWidth=0.5;
               this.ctx2.strokeStyle='#3c5186';
               
               this.ctx2.strokeRect(0-double/2, 0-double/2, double,double);
               let trip = this.size*3;
               this.ctx2.lineWidth=0.1;
                this.ctx2.strokeStyle='white';
               this.ctx2.strokeRect(0-trip/2, 0-trip/2, trip,trip);
              requestAnimationFrame(this.update.bind(this));
              this.ctx2.restore();
              }
          
          }*/
    };
    return Particle6;
}());
export { Particle6 };
/*
    clase 7 particulas, efecto 4 de la ventana 2
*/
var Particle7 = /** @class */ (function () {
    function Particle7(x, y, screenCanvas) {
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
        this.angle = 0;
        this.vax = Math.random() * 0.6 - 0.3;
        this.vs = Math.random() * 0.2 + 0.5;
        this.vay = Math.random() * 0.6 - 0.3;
        this.lightnees = 10;
        this.va = Math.random() * 0.02 + 0.05;
    }
    Particle7.prototype.update = function () {
        this.x += this.speedX + Math.sin(this.anglex);
        this.y += this.speedY + Math.sin(this.angley);
        this.size += this.vs;
        this.anglex += this.vax;
        this.angley += this.vay;
        this.angle += this.va;
        if (this.lightnees < 70)
            this.lightnees += 0.25;
        if (this.size < this.maxSize) {
            this.ctx2.save();
            this.ctx2.translate(this.x, this.y);
            this.ctx2.rotate(this.angle);
            this.ctx2.fillRect(0 - this.size / 2, 0 - this.size / 2, this.size, this.size);
            var double = this.size * 2;
            this.ctx2.lineWidth = 0.5;
            /*
            this.ctx2.strokeStyle='#3c5186';
            
            this.ctx2.strokeRect(0-double/2, 0-double/2, double,double);
            let trip = this.size*3;
            this.ctx2.lineWidth=0.1;
             this.ctx2.strokeStyle='white';
            this.ctx2.strokeRect(0-trip/2, 0-trip/2, trip,trip);
            */
            requestAnimationFrame(this.update.bind(this));
            this.ctx2.restore();
        }
    };
    return Particle7;
}());
export { Particle7 };
