/*
    que nos diga si un número es par o impar
    1) ventana prompt para input
    2) Si no es válido, que pida el número de nuevo

*/ 


/*
while(num >= 1){
    if(num % 2 == 1){
        console.log(num +" es un número es impar");
    }else if(i % 2 == 0){
        console.log(num + " es un número es par")
    }
    num = false;

}
*/

do{
    var num = parseInt(prompt("Ingrese un número"));
    if(isNaN(num)){
        num = 0;
    }else if(num % 2 == 1){
        console.log(num + " es un número impar");
    }else if(num % 2 == 0 & num == 0){
        num = 0
        console.log("el número ingresado debe ser mayor que 0");
    }else if(num % 2 == 0){
        console.log(num + " es un número par");
    }
}while(num == 0)