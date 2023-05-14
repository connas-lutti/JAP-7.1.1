function cantidadEvidencias(array){

    count = 0;
    for(let i of array){
        if(i===true){
            count++;
        }
    }
    return count;

}

function resultadoDelCurso(estudiante){
    
    if(estudiante.puntosIngles >= 50){
        estadoIngles = "ok";
    }else{
        estadoIngles = "no aprobado";
    }

    if(estudiante.completaCT){
        estadoCT="ok";
    }else{
        estadoCT="no aprobado";
    }

    if(estudiante.totalTecnicas >= 60){ 
        estadoTecnicas = "ok" 
    }else if(estudiante.totalTecnicas >= 50){
        estadoTecnicas= "debe rendir examen supervisado, y obtener un puntaje igual o mayor a 60% para aprobar";
    }else{
        estadoTecnicas = "no aprobado";
    }

    if(estudiante.entregaEvidencias){
        estadoEvidencias = "ok";
    }else{
        estadoEvidencias = "incompleto";
    }
    
    puntajeSinRedondear = (estudiante.totalTecnicas + estudiante.puntosIngles + estudiante.puntosCT)/3;
    puntajeFinal = puntajeSinRedondear.toFixed(2);

    if(estadoIngles === "ok" && estudiante.completaCT){
        if(estadoTecnicas === "ok" && estadoEvidencias === "ok"){
            statusFinal = `aprobado con ${puntajeFinal}`;
        }
        else if( estadoTecnicas === "ok" && !(estadoEvidencias === "ok") || !(estadoTecnicas === "ok") && estadoEvidencias === "ok"){
            statusFinal = `debe rendir examen supervisado, y obtener un puntaje igual o mayor a 60% para aprobar`;
        }else{
            statusFinal = `reprobado con ${puntajeFinal}`;
        }
    }else{
        statusFinal =  `reprobado con ${puntajeFinal}`;
    }

    console.log(`
    Hola ${estudiante.nombre}! El detalle de tu status final es:

        En Inglés  - ${estudiante.puntosIngles} puntos  - ${estadoIngles}
        En CT      - ${estudiante.puntosCT} puntos - ${estadoCT}
        En Tecnica - ${estudiante.totalTecnicas} puntos - ${estadoTecnicas}
        Evidencias - ${estudiante.cantEvidencias}/3 - ${estadoEvidencias}

    En conclusión, tu status final es: ${statusFinal}.
    `);

}

let estudiante = {};

let nombre = prompt("Ingrese su nombre: ");
let apellido = prompt("Ingrese su apellido: ");
let depto = prompt("Ingrese el departamento donde vive: ");
let puntosFP = prompt("Ingrese el puntaje de su evaluación de fundamentos de programación: ");
let puntosPI = prompt("Ingrese el puntaje de su evaluación de programación imperativa: ");
let puntosPOO = prompt("Ingrese el puntaje de su evaluación de programación orientada a objetos: ");
let evFP = prompt("Cargó evidencia en FP? (true/false): ");
let evPI = prompt("Cargó evidencia en PI? (true/false): ");
let evPOO = prompt("Cargó evidencia en POO? (true/false): ");
let puntosIng = prompt("Ingrese su puntaje promedio en inglés: ");
let completaCT = prompt("Cuantas lecciones de competencias transversales realizó? (0-10): ");

let evidenciasEntregadas = cantidadEvidencias([evFP === "true",evPI === "true",evPOO === "true"]);

estudiante = {
    nombre: nombre,
    apellido: apellido,
    departamento: depto,
    puntosFP: puntosFP,
    puntosPI: puntosPI,
    puntosPOO: puntosPOO,
    totalTecnicas: puntosFP*0.3 + puntosPI*0.5 + puntosPOO*0.2,
    evFP: evFP,
    evPI: evPI,
    evPOO: evPOO,
    entregaEvidencias: evFP === "true" && evPI === "true" && evPOO === "true",
    cantEvidencias: evidenciasEntregadas, 
    puntosIngles: puntosIng*1,
    completaCT: completaCT === "10",
    cantidadCT: completaCT,
    puntosCT: completaCT*10,
}

resultadoDelCurso(estudiante);