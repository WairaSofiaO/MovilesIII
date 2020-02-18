/*
Construya un programa con la siguiente información.
Una empresa necesita un software que le permita calcular el promedio de edad, peso de un
número desconocido de personas.
Deberá determinar cuántas personas son mayores de 30 años, pero menores a 40 años,
cuántas hay entre 40 y 60 años, 
cuantas son mayores a 60 años y 
debe mostrar la cantidad de personas encuestadas.

Si lleva un múltiplo de 5 en cantidad de personas encuestadas, se imprime un mensaje
donde se muestre que ya se lleva X cantidad de personas y pregunta si desea continuar, 
de ser falso, finaliza el programa y arroja los resultados obtenidos hasta el momento. Si es
verdadero continúa realizando encuestas.
Los datos se imprimen solo hasta que el usuario decida terminar de realizar encuestas y se
debe imprimir promedio de edad, promedio de peso y cantidad de personas encuestadas.
*/
let contPers = 0;
let cont1 = 0;
let cont2 = 0;
let cont3 = 0;
continuar = 1;

// continuar = prompt("Escriba 0 para terminar o 1 para seguir: ");
while (continuar != 0) {
    contPers++;
    edad = prompt("Ingrese edad: ");
    peso = prompt("Ingrese peso en Kg: ");
    

    if (edad > 30 && edad < 40) {
        cont1++;
        
    } else if (edad > 40 && edad < 60) {
        cont2++;
    } else if (edad > 60) {
        cont3++;
    }
    edad= edad/contPers;
    peso = peso/contPers;
    let resto = contPers % 5;
    if(resto==0) {
        continuar = prompt("Escriba 0 para terminar o 1 para seguir: ");
        continuar =0;
    }else {
       continuar=1;
    }
}
    
console.log("Cantidad de personas encuestadas: " + contPers);
console.log("son mayores de 30 años, pero menores a 40 años: " + cont1);
console.log("son personas entre 40 y 60 años: " + cont2);
console.log("son mayores a 60 años: " + cont3);
console.log("Promedio de edad: " + edad);
console.log("Promedio de peso: " + peso);




