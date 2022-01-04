import { Particle } from "./particle.js";

let lienzo1: HTMLCanvasElement;
let pantalla1: CanvasRenderingContext2D;

let lienzo2: HTMLCanvasElement;
let pantalla2: CanvasRenderingContext2D;

lienzo1 = <HTMLCanvasElement>document.getElementById('img1');
pantalla1 = lienzo1.getContext("2d");

lienzo2 = <HTMLCanvasElement>document.getElementById('img2');
pantalla2 = lienzo2.getContext("2d");

let mouse:any ={ x: null, y: null, };

/*
----------------------------efecto1--------------------------------
*/

function efecto1(evt:any):void{
    lienzo1.addEventListener('mousemove',function(e:any){
      mouse.x=e.x -lienzo1.offsetLeft;
      mouse.y=e.y -lienzo1.offsetTop;

      const objeto = new Particle(mouse.x,mouse.y,pantalla1);
      objeto.update();
    });
}


/*
		eventos para los checkbox
*/
document.getElementById("eft1").addEventListener('click', efecto1, false);