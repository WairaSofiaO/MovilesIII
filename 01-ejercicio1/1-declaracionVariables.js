var nombre = "juan";
var nombre = "camilo";
console.log(nombre);

// let fuera del contexto es global
let costo = 5;
if (costo > 3) {
    // var hace las variables globales aunque se declaren en un contexto
    var comida = "galletas";

    // es local en este contexto
    let costo = 14;
}
console.log("La comida: "+comida);
