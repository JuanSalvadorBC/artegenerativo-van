import { Particle } from "./particle.js";
import { Particle2 } from "./particle.js";
/*
    fin del importado de clases
*/
var lienzo1;
var pantalla1;
var lienzo2;
var pantalla2;
lienzo1 = document.getElementById('img1');
pantalla1 = lienzo1.getContext("2d");
lienzo2 = document.getElementById('img2');
pantalla2 = lienzo2.getContext("2d");
var mouse = { x: null, y: null, };
var band = false;
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
----------------------------efecto2--------------------------------
*/
function efecto2(evt) {
    lienzo1.addEventListener('mousemove', function (e) {
        mouse.x = e.x - lienzo1.offsetLeft;
        mouse.y = e.y - lienzo1.offsetTop;
        if (band) {
            for (var i = 0; i < 3; i++) {
                var objeto = new Particle2(mouse.x, mouse.y, pantalla1);
                objeto.update();
            }
        }
    });
    lienzo1.addEventListener('mousedown', function () {
        band = true;
    });
    lienzo1.addEventListener('mouseup', function () {
        band = false;
    });
}
/*
        eventos para los checkbox
*/
document.getElementById("eft1").addEventListener('click', efecto1, false);
document.getElementById("eft2").addEventListener('click', efecto2, false);
