/*
Una institución educativa se encuentra en proceso de finalizar semestre y en proceso de admisión
para el próximo semestre. La institución requiere un software que le permite solucionar esta
problemática.
Para finalización de semestre:
Se desean subir las notas de los alumnos al sistema de los programas de sistemas y finanzas, para
ello se le pide al docente el número de alumnos y
programa académico,
si es hombre o mujer,
además, se le va preguntando por cada estudiante las 5 notas obtenidas durante el curso y el
software calcula el promedio de las 5 notas.
Al finalizar la ejecución debe mostrar cuántos hombres y mujeres hay en cada programa académico 
y el promedio de notas por cada programa.
*/

let num=0;
let prog="";
let sex="";


num = prompt("Ingrese la cantidad de estudiantes que registrará: ");

for (let i = 0; i < num; i++) {
    prog = parseInt(prompt("Ingrese el programa académico (1. Sistemas / 2. Finanzas ): "));    
    let notes =0;
    let acumNotes=0;
    let prom=0;
    let countH=0;
    let countF=0;
    let countProg1=0;
    let countProg2=0;
    switch (prog) {
        case 1:
           
            countProg1++;
            sex = prompt("Ingrese que sexo tiene (h / f): ");
            
            if (sex=="h" || sex=="H") {
                countH++;
                
            }else if(sex=="f" || sex=="F"){
                countF++;
            }else{
                console.log("Carácter incorrecto");
            }

            for (let index = 0; index < 5; index++) {
                notes = parseInt(prompt("Ingrese la nota " + (index+1) + " : "));   
                acumNotes += notes;
            }
            prom= acumNotes/5;
            console.log("En Sistemas hay " + countF + " mujeres y " + countH + " hombres");
            console.log("El promedio de notas es " + prom/countProg1);

            break;
            
        case 2:
            
    

            countProg2++;
            sex = prompt("Ingrese que sexo tiene (h / f): ");

            if (sex=="h" || sex=="H") {
                countH++;
                
            }else if(sex=="f" || sex=="F"){
                countF++;
            }else{
                console.log("Carácter incorrecto");
            }

            for (let index = 0; index < 5; index++) {
                notes = parseInt(prompt("Ingrese la nota " + (index+1) + " : "));   
                acumNotes += notes;
            }
            prom= acumNotes/5;

            console.log("En finanzas hay " + countF + " mujeres y " + countH + " hombres");
            console.log("El promedio de notas es " + prom/countProg2);

            break;
            
    
        default:
            console.log("Opción incorrecta");
            break;
    }

    


    
}

/*
let acumEdad=0;
        let acumPeso=0;
        let edad = 0;
        let peso = 0;
        let contPers = 0;
        let cont1 = 0;
        let cont2 = 0;
        let cont3 = 0;
        continuar = 1;
        
        while (continuar != 0) {
            contPers++;
            
            edad = parseInt(prompt("Ingrese la edad: "));
            peso = parseInt(prompt("Ingrese peso en Kg: "));

            acumEdad += edad;
            acumPeso += peso;

            if (edad > 30 && edad < 40) {
                cont1++;

            } else if (edad > 40 && edad < 60) {
                cont2++;

            } else if (edad > 60) {
                cont3++;
            }

            let resto = contPers % 5;
            if (resto == 0) {
                continuar = prompt("Lleva " + contPers + " personas registradas. Escriba 0 para terminar o 1 para seguir: ");
            }
        }

        console.log("Cantidad de personas encuestadas: " + contPers);
        console.log("son mayores de 30 años, pero menores a 40 años: " + cont1);
        console.log("son personas entre 40 y 60 años: " + cont2);
        console.log("son mayores a 60 años: " + cont3);
        console.log("Promedio de edad: " + acumEdad/contPers);
        console.log("Promedio de peso: " + acumPeso/contPers);
*/



