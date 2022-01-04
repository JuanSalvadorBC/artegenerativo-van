let lienzo1: HTMLCanvasElement;
let pantalla1: CanvasRenderingContext2D;

let lienzo2: HTMLCanvasElement;
let pantalla2: CanvasRenderingContext2D;

lienzo1 = <HTMLCanvasElement>document.getElementById('img1');
pantalla1 = lienzo1.getContext("2d");

lienzo2 = <HTMLCanvasElement>document.getElementById('img2');
pantalla2 = lienzo2.getContext("2d");
