/* 
    Hacer un programa que muestre todos los números entre 
    dos números introducidos por el usuario
*/

var num_1 = parseInt(prompt("Introduce el primer número: ", 0));
var num_2 = parseInt(prompt("Introduce el segundo número: ", 0));

// sintaxis del ciclo for es 
/* for(var inicio (i); var final (i < número); i++){
    salida con console.log(i) u otras
}
*/

document.write("<h1> del "+ num_1 + " a "+ num_2 + " están estos números </h1>");

for(var i = num_1; i <= num_2; i++){
    document.write(i+ "<br/>");
    console.log(i);
}