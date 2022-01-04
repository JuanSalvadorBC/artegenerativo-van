import { Particle } from "./particle.js";
var lienzo1;
var pantalla1;
var lienzo2;
var pantalla2;
lienzo1 = document.getElementById('img1');
pantalla1 = lienzo1.getContext("2d");
lienzo2 = document.getElementById('img2');
pantalla2 = lienzo2.getContext("2d");
var mouse = { x: null, y: null, };
/*
----------------------------efecto1--------------------------------
*/
function efecto1(evt) {
    lienzo1.addEventListener('mousemove', function (e) {
        mouse.x = e.x - lienzo1.offsetLeft;
        mouse.y = e.y - lienzo1.offsetTop;
        var objeto = new Particle(mouse.x, mouse.y, pantalla1);
        objeto.update();
    });
}
/*
        eventos para los checkbox
*/
document.getElementById("eft1").addEventListener('click', efecto1, false);
