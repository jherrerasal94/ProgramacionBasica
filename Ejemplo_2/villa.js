

for(var i = 0; i <= 20; i++){
    console.log(obtenerAleatorio(0, 20));
}

var marco = document.getElementById("villaPC");
var papel = marco.getContext("2d");
var mapa = "tile.png";

var imagen = new Image();
imagen.src = mapa;
imagen.addEventListener("load", dibujar);

function dibujar(){
    papel.drawImage(imagen, 0, 0);
}

function obtenerAleatorio(numMin, numMax){
    var resultado;
    resultado = Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;
    return resultado;
}