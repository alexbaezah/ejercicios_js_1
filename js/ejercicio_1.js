/* programa que nos pida dos números y nos diga cuál es
    el mayor, el menor y si son iguales
*/

// Nunca declarar const las variables que se reutilizarán en un ciclo while
// ya que si son declaradas con CONST, estas no pueden cambiar sus valores de nuevo
// se declaran con var

var num_1 = parseInt(prompt("ingrese el primer número"));
var num_2 = parseInt(prompt("ingrese el segundo número"));

while (num_1 <= 0 || num_2 <= 0 || isNaN(num_1) || isNaN(num_2)) {
    alert("El número ingresado debe ser mayor a 0 y no debe ser string");
    num_1 = parseInt(prompt("ingrese el primer número"));
    num_2 = parseInt(prompt("ingrese el segundo número"));
}

if(num_1 > num_2){
    alert(num_1 + " es mayor que " + num_2);
    console.log(num_1 + " es mayor que " + num_2);
}
else if(num_1 < num_2){
    alert(num_2 + " es mayor que " + num_1);
    console.log(num_2 + " es mayor que " + num_1);
}
else if(num_1 == num_2){
    alert(num_1 + " y " + num_2 + " son iguales");
    console.log(num_1 + " y " + num_2 + " son iguales");
}
else{
    alert("introduce los números correctos");
}