/**
 * @fileoverview Canvas con una granja de animales
 * @version 1.0
 * @author Jesús Herrera
 * @copyright Platzi.com
*/
var marco = document.getElementById("marcoTrabajo");
var papel = marco.getContext("2d");
var posicionVacaEnX = 0;
var posicionVacaEnY = 0;
var posicionCerdoEnX = 0;
var posicionCerdoEnY = 240;
var posicionPolloEnX = 0;
var posicionPolloEnY = 420;
var animalEnMovimiento = "POLLO";

/**
 * ------------Este es el objeto del mapa------------
 */
var fondo = {
    url : "tile.png",
    cargaOk : false
};
fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

function cargarFondo(){
    fondo.cargaOk = true;
    dibujar();
}
/**
 * ------------Este es el objeto de la vaca------------
 */
var vaca = {
    url : "vaca.png",
    cargaOk : false
};
vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);

function cargarVaca(){
    vaca.cargaOk = true;
    dibujar();
}
/**
 * ------------Este es el objeto del pollo------------
 */
var pollo = {
    url : "pollo.png",
    cargaOk : false
};
pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);

function cargarPollo(){
    pollo.cargaOk = true;
    dibujar();
}
/**
 * ------------Este es el objeto del cerdo------------
 */
var cerdo = {
    url : "cerdo.png",
    cargaOk : false
};
cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);

function cargarCerdo(){
    cerdo.cargaOk = true;
    dibujar();
}


function dibujar(){
    if(fondo.cargaOk){
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if(vaca.cargaOk){
        papel.drawImage(vaca.imagen, 0, 0);
    }
    if(pollo.cargaOk){
        papel.drawImage(pollo.imagen, 0, 420);
    }
    if(cerdo.cargaOk){
        papel.drawImage(cerdo.imagen, 0, 240);
    }
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
function moverElemento(e){
    const TIZQUIERDA = 37;
    const TARRIBA = 38;
    const TDERECHA = 39;
    const TABAJO = 40;
    var codigoTecla = (e.which) ? e.which : event.keycode;

    if(codigoTecla == TIZQUIERDA){
        caminar(-5, 0);
    }
    if(codigoTecla == TARRIBA){
        caminar(0, -5);
    }
    if(codigoTecla == TDERECHA){
        caminar(5, 0);
    }
    if(codigoTecla == TABAJO){
        caminar(0, 5);
    }
}
function caminar(pasosEnX, pasosEnY){
    if(animalEnMovimiento == "POLLO"){
        var posicionActualX = (posicionPolloEnX == "" ? 0 : posicionPolloEnX);
        var posicionActualY = (posicionPolloEnY == "" ? 0 : posicionPolloEnY);
        var nuevaPosicionX = parseInt(posicionActualX) + parseInt(pasosEnX);
        var nuevaPosicionY = parseInt(posicionActualY) + parseInt(pasosEnY);
    
        if((nuevaPosicionX <= 445 && nuevaPosicionX >= -20) && (nuevaPosicionY <= 445 && nuevaPosicionY >= -30)){
            papel.drawImage(fondo.imagen, 0, 0);
            papel.drawImage(vaca.imagen, posicionVacaEnX, posicionVacaEnY);
            papel.drawImage(cerdo.imagen, posicionCerdoEnX, posicionCerdoEnY);
            papel.drawImage(pollo.imagen, nuevaPosicionX, nuevaPosicionY);
            posicionPolloEnX = nuevaPosicionX;
            posicionPolloEnY = nuevaPosicionY;
        }
    }
    if(animalEnMovimiento == "VACA"){
        var posicionActualX = (posicionVacaEnX == "" ? 0 : posicionVacaEnX);
        var posicionActualY = (posicionVacaEnY == "" ? 0 : posicionVacaEnY);
        var nuevaPosicionX = parseInt(posicionActualX) + parseInt(pasosEnX);
        var nuevaPosicionY = parseInt(posicionActualY) + parseInt(pasosEnY);
    
        if((nuevaPosicionX <= 425 && nuevaPosicionX >= -5) && (nuevaPosicionY <= 435 && nuevaPosicionY >= -20)){
            papel.drawImage(fondo.imagen, 0, 0);
            papel.drawImage(cerdo.imagen, posicionCerdoEnX, posicionCerdoEnY);
            papel.drawImage(pollo.imagen, posicionPolloEnX, posicionPolloEnY);
            papel.drawImage(vaca.imagen, nuevaPosicionX, nuevaPosicionY);
            posicionVacaEnX = nuevaPosicionX;
            posicionVacaEnY = nuevaPosicionY;
        }
    }
    if(animalEnMovimiento == "CERDO"){
        var posicionActualX = (posicionCerdoEnX == "" ? 0 : posicionCerdoEnX);
        var posicionActualY = (posicionCerdoEnY == "" ? 0 : posicionCerdoEnY);
        var nuevaPosicionX = parseInt(posicionActualX) + parseInt(pasosEnX);
        var nuevaPosicionY = parseInt(posicionActualY) + parseInt(pasosEnY);
    
        if((nuevaPosicionX <= 430 && nuevaPosicionX >= -10) && (nuevaPosicionY <= 440 && nuevaPosicionY >= -25)){
            papel.drawImage(fondo.imagen, 0, 0);
            papel.drawImage(pollo.imagen, posicionPolloEnX, posicionPolloEnY);
            papel.drawImage(vaca.imagen, posicionVacaEnX, posicionVacaEnY);
            papel.drawImage(cerdo.imagen, nuevaPosicionX, nuevaPosicionY);
            posicionCerdoEnX = nuevaPosicionX;
            posicionCerdoEnY = nuevaPosicionY;
        }
    }
}
function cambiarAnimal(){
    var animalSeleccionado = document.getElementsByName("animal");
    
    for(var i = 0; i <= animalSeleccionado.length - 1; i++){
        console.log(animalSeleccionado[i].value);
        if(animalSeleccionado[i].checked){
            animalEnMovimiento = animalSeleccionado[i].value;
        }
    }
}