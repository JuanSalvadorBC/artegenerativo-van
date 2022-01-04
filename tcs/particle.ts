export class Particle {
  protected x: number;
  protected y: number;
  protected speedX:number;
  protected speedY:number;
  protected maxSize:number;
  protected size:number;
  protected ctx: CanvasRenderingContext2D;
  protected _2PI: number;

  constructor (x:number, y:number, screenCanvas:CanvasRenderingContext2D){
     this.x = x;
     this.y = y;
     this.speedX = Math.random()*3-2;
     this.speedY = Math.random()*3-2;
     this.maxSize = Math.random()*5+4;
     this.size = Math.random()*1+2;
     this.ctx = screenCanvas;
     this._2PI = Math.PI * 2;
  }
  
  update(){   
    this.x += this.speedX;
     this.y += this.speedY;
     this.size += 0.1;
    if(this.size < this.maxSize){
      this.ctx.beginPath();
      this.ctx.fillRect(this.x,this.y,0.1,0.1);
      this.ctx.arc(this.x, this.y, this.size, 0, this._2PI); 
      this.ctx.fillStyle = 'hsl(151,92%,63%)';
      this.ctx.fill();
      this.ctx.stroke();
      requestAnimationFrame(this.update.bind(this));
     } 
   }
}
/*
	clase 2 particulas
*/
export class Particle2 {
  protected x: number;
  protected y: number;
  protected speedX:number;
  protected speedY:number;
  protected maxSize:number;
  protected size:number;
  protected ctx: CanvasRenderingContext2D;
  protected _2PI: number;
  protected anglex:number;
  protected vs:number;
  protected vax:number;
  protected angley:number;
  protected vay:number;
  protected lightnees=3;

  constructor (x:number, y:number, screenCanvas:CanvasRenderingContext2D){
     this.x = x;
     this.y = y;
     this.speedX = Math.random()*4-2;
     this.speedY = Math.random()*4-2;
     this.maxSize = Math.random()*7+5;
     this.size = Math.random()*1+2;
     this.ctx = screenCanvas;
     this._2PI = Math.PI * 2;
     this.vs = Math.random()*0.2+0.05;
     this.anglex = Math.random()*6.2;
     this.vax = Math.random()*0.6-0.3;
     this.angley = Math.random()*6.2;
     this.vay = Math.random()*0.6-0.3;
 }
  
  update(){    
   	 this.x += this.speedX + Math.sin(this.anglex);
     this.y += this.speedY + Math.sin(this.angley);
     this.size += this.vs;
     this.anglex += this.vax;
     this.angley += this.vay;
     if(this.lightnees<70)this.lightnees+=0.25;
     if(this.size < this.maxSize){
      this.ctx.beginPath();
      this.ctx.fillRect(this.x,this.y,0.1,0.1);
      this.ctx.arc(this.x, this.y, this.size, 0, this._2PI);     
      this.ctx.fillStyle = 'hsl(18,36%,'+this.lightnees+'%)';
      this.ctx.fill();
      this.ctx.stroke();
      requestAnimationFrame(this.update.bind(this));
    }   
  }
}
/*
	clase 3 particulas
*/


