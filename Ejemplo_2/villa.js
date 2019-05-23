/**
 * @fileoverview Canvas con una granja de animales
 * @version 1.0
 * @author Jesús Herrera
 * @copyright Platzi.com
*/

var marco = document.getElementById("marcoTrabajo");
var papel = marco.getContext("2d");

//Animales disponibles
var mapa = "tile.png";
var pollo = "pollo.png";
var cerdo = "cerdo.png";
var vaca = "vaca.png";

//Mapa
var imgMapa = new Image(); 
imgMapa.src = mapa;
imgMapa.addEventListener("load", dibujar);

//Vaca
var imgVaca = new Image(); 
imgVaca.src = vaca;
imgVaca.addEventListener("load", dibujar);

//Pollo
var imgPollo = new Image(); 
imgPollo.src = pollo;
imgPollo.addEventListener("load", dibujar);

//Cerdo
var imgCerdo = new Image(); 
imgCerdo.src = cerdo;
imgCerdo.addEventListener("load", dibujar);


function dibujar(){
    papel.drawImage(imgMapa, 0, 0);
    papel.drawImage(imgPollo, (obtenerAleatorio(0, 6) * 40), (obtenerAleatorio(0, 6) * 40));
    papel.drawImage(imgCerdo, (obtenerAleatorio(0, 6) * 40), (obtenerAleatorio(0, 6) * 40));
    papel.drawImage(imgVaca, (obtenerAleatorio(0, 6) * 40), (obtenerAleatorio(0, 6) * 40));
}
/**
 * Método que devuelve un número al azar entre un rango
 * @param {*} numMin valor mínimo
 * @param {*} numMax valor máximo
 */
function obtenerAleatorio(numMin, numMax){
    var resultado;
    resultado = Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;
    return resultado;
}