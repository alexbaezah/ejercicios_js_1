/*
    Utilizando un bucle, mostrar la suma y la media de los números introducidos
    hasta introducir un número negativo y ahí mostrar el resultado
*/

var suma = 0;
var contador = 0;

do{
    var num = parseInt(prompt("Introduce un número hasta que metas un negativo"));

    if (isNaN(num)){
        num = 0
    }else if(num >= 0){
        suma += num;
        contador ++; 

    }

    
    console.log("la suma es: "+ suma);
    console.log("contador: "+ contador);

}while(num >= 0) 

alert("La suma de todos los números es: "+ suma);
alert("La media de todos los números es: "+ suma/contador);