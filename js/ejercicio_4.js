/*
    Mostrar todos los números impares que hay entre dos números introducidos
*/

var num_1 = parseInt(prompt("introduce el primer número", 0));
var num_2 = parseInt(prompt("Introduce el segun número", 0));

for(var i = num_1; i <= num_2; i++){
    if(i % 2 == 1){
        console.log(i + " impar")
    }
    
}

