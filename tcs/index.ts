import { Particle } from "./particle.js";
import { Particle2 } from "./particle.js";
import { Particle3 } from "./particle.js";
import { Particle31 } from "./particle.js";
/*
VENTANA 2
*/

import { Particle4 } from "./particle.js";
import { Particle5 } from "./particle.js";
import { Particle6 } from "./particle.js";
import { Particle7 } from "./particle.js";

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
----------------------------efecto3--------------------------------
*/
function efecto3(evt:any):void{
  lienzo1.addEventListener('mousemove',function(e:any){
      mouse.x=e.x -lienzo1.offsetLeft;
      mouse.y=e.y -lienzo1.offsetTop;
if(band)
{
  for(let i=0; i<4; i++){
      const objeto = new Particle3(mouse.x,mouse.y,pantalla1);
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
----------------------------efecto 4 de la ventana 1--------------------------------
*/
function efecto31(evt:any):void{
  lienzo1.addEventListener('mousemove',function(e:any){
      mouse.x=e.x -lienzo1.offsetLeft;
      mouse.y=e.y -lienzo1.offsetTop;
      pantalla1.lineWidth = 0.2;
      pantalla1.globalCompositeOperation = 'lighten';

if(band)
{
  for(let i=0; i<5; i++){
      const objeto = new Particle31(mouse.x,mouse.y,pantalla1);
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
----------------------------efecto4, bt1 ventana 2--------------------------------
*/


function efecto4(evt:any):void{
  lienzo2.addEventListener('mousemove',function(e:any){
      mouse.x=e.x -lienzo2.offsetLeft;
      mouse.y=e.y -lienzo2.offsetTop;
if(band)
{
  for(let i=0; i<3; i++){
      const objeto = new Particle4(mouse.x,mouse.y,pantalla2);
      objeto.update();
    }
}
});

  lienzo2.addEventListener('mousedown', function(){
    band= true;
  });

  lienzo2.addEventListener('mouseup', function(){
    band= false;
  });
}
/*
----------------------------efecto5 bt2 ventana 2--------------------------------
*/
function efecto5(evt:any):void{
  lienzo2.addEventListener('mousemove',function(e:any){
      mouse.x=e.x -lienzo2.offsetLeft;
      mouse.y=e.y -lienzo2.offsetTop;
      console.log(mouse.x,mouse.y)
if(band)
{
  for(let i=0; i<3; i++){
      const objeto = new Particle5(mouse.x,mouse.y,pantalla2);
      objeto.update();
    }
}
});

  lienzo2.addEventListener('mousedown', function(){
    band= true;
  });

  lienzo2.addEventListener('mouseup', function(){
    band= false;
  });
}
/*
----------------------------efecto6 bt3 ventana 2--------------------------------
*/
/*
    funcion del efecto 6
*/

function efecto6(evt:any):void{
  lienzo2.addEventListener('mousemove',function(e:any){
      mouse.x=e.x -lienzo2.offsetLeft;
      mouse.y=e.y -lienzo2.offsetTop;
     

      pantalla2.fillStyle='#FFF5DE';
      
      //pantalla2.lineWidth=0.5;
      pantalla2.shadowOffsetX=0;
       pantalla2.shadowOffsetY=10;
       pantalla2.shadowBlur=10;
      pantalla2.shadowColor = 'rgba(0,0,0,0,5)';
      pantalla2.globalCompositeOperation='destination-over';
if(band)
{
  for(let i=0; i<5; i++){
      const objeto = new Particle5(mouse.x,mouse.y,pantalla2);
      objeto.update();
    }
}
});

  lienzo2.addEventListener('mousedown', function(){
    band= true;
  });

  lienzo2.addEventListener('mouseup', function(){
    band= false;
  });
}

/*
----------------------------efecto7 bt4 ventana 2--------------------------------
*/
function efecto7(evt:any):void{
  lienzo2.addEventListener('mousemove',function(e:any){
      mouse.x=e.x -lienzo2.offsetLeft;
      mouse.y=e.y -lienzo2.offsetTop;
     

      pantalla2.fillStyle='#FFF5DE';
      
      //pantalla2.lineWidth=0.5;
      pantalla2.shadowOffsetX=0;
       pantalla2.shadowOffsetY=10;
       pantalla2.shadowBlur=10;
      pantalla2.shadowColor = 'rgba(0,0,0,0.5)';
      pantalla2.globalCompositeOperation='destination-over';
if(band)
{
  for(let i=0; i<20; i++){
      const objeto = new Particle7(mouse.x,mouse.y,pantalla2);
      objeto.update();
    }
}
});


  lienzo2.addEventListener('mousedown', function(){
    band= true;
  });

  lienzo2.addEventListener('mouseup', function(){
    band= false;
  });
}


/*
		eventos para los checkbox
*/
document.getElementById("eft1").addEventListener('click', efecto1, false);
document.getElementById("eft2").addEventListener('click', efecto2, false);
document.getElementById("eft3").addEventListener('click', efecto3, false);
document.getElementById("eft31").addEventListener('click', efecto31, false);
/*
   checkbox 2
 */
document.getElementById("eft4").addEventListener('click', efecto4, false);
document.getElementById("eft5").addEventListener('click', efecto5, false);
document.getElementById("eft6").addEventListener('click', efecto6, false);
document.getElementById("eft7").addEventListener('click', efecto7, false);