//Clase animales
class Animal{
    constructor(ruta, nombre, ataque, vida, mensaje){
        this.nombre = nombre;
        this.vida = ataque;
        this.ataque = vida;
        this.imagen = new Image();
        this.imagen.src = ruta;
        this.ruta = ruta;
        this.mensaje = mensaje
    }
    hablar(){
        alert(mensaje);
    }
    mostrar(clase){
        document.write("<div class='" + clase + "'>");
        document.write("<img src='" + this.ruta + "'class='animalEvent' data-mensaje='"+ this.mensaje + "'>");
        document.write("<hr><center>" + this.nombre + "</center><hr>");
        document.write("Vida: " + this.vida + "<br>");
        document.write("Ataque: " + this.ataque + "<br>");
        document.write("</div>");
    }
}

var granja = [];
granja.push(new Animal("../Ejemplo_3/vaca.png", "Vaca", 80, 90, "Muuuuu!!"));
granja.push(new Animal("../Ejemplo_3/pollo.png", "Pollo", 85, 85, "ki kiri kiiii!!"));
granja.push(new Animal("../Ejemplo_3/cerdo.png", "Cerdo", 95, 90, "griiiimm!!"));

for(var animal of granja){
    animal.mostrar("tarjeta");
}
var claseAnimal = document.getElementsByClassName("animalEvent");
var mensajeAnimal = function() {
    var attribute = this.getAttribute("data-mensaje");
    alert(attribute);
};

for (var i = 0; i < claseAnimal.length; i++) {
    claseAnimal[i].addEventListener('click', mensajeAnimal, false);
}