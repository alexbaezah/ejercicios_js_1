/*
    Muestre todos los números divisores de un
    número introducidos a través de un prompt

*/ 




var numero = parseInt(prompt("Ingrese un número ", 1));
document.write("<h1> Los siguientes números son divisor de: " + numero + "</h1>");


for(var i = 1; i <= numero; i++){
    if(numero % i == 0){
        document.write(  i + "</br>")
        console.log("divisor:" +i)
    }

}