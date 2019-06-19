//Obtener el residuo de un número
console.log("Residuo");
var NUMERO = 100;
var i;
for(i = 0; i <= NUMERO; i++){
    
    if(i % 3 == 0 && i % 5 == 0){
        console.log(i + ": Numero divisible en 3 y 5");
    }else if(i % 3 == 0){
        console.log(i + ": Numero divisible en 3");
    }else if(i % 5 == 0){
        console.log(i + ": Numero divisible en 5");
    }else{
        console.log(i);
    }
}