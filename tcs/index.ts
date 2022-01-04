import { Particle } from "./particle.js";
import { Particle2 } from "./particle.js";

/*
	fin del importado de clases
*/

let lienzo1: HTMLCanvasElement;
let pantalla1: CanvasRenderingContext2D;

let lienzo2: HTMLCanvasElement;
let pantalla2: CanvasRenderingContext2D;

lienzo1 = <HTMLCanvasElement>document.getElementById('img1');
pantalla1 = lienzo1.getContext("2d");

lienzo2 = <HTMLCanvasElement>document.getElementById('img2');
pantalla2 = lienzo2.getContext("2d");

let mouse:any ={ x: null, y: null, };
let band =false;

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
----------------------------efecto2--------------------------------
*/
function efecto2(evt:any):void{
  lienzo1.addEventListener('mousemove',function(e:any){
      mouse.x=e.x -lienzo1.offsetLeft;
      mouse.y=e.y -lienzo1.offsetTop;
if(band)
{
  for(let i=0; i<3; i++){
      const objeto = new Particle2(mouse.x,mouse.y,pantalla1);
      objeto.update();
    }
}
});

  lienzo1.addEventListener('mousedown', function(){
    band= true;
  });

  lienzo1.addEventListener('mouseup', function(){
    band= false;
  });
}



/*
		eventos para los checkbox
*/
document.getElementById("eft1").addEventListener('click', efecto1, false);
document.getElementById("eft2").addEventListener('click', efecto2, false);