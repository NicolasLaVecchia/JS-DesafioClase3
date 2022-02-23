let carga = 100;

console.log("Nivel de carga: " + carga + "%");

let nombre = prompt("¡Hola extraño! Mi nombre es ProjectCoder. ¿Como es el tuyo?").toUpperCase();

while (nombre === ""){
    nombre = prompt ("¡Hola! ¿Estás allí? Por favor, ingresa tu nombre").toUpperCase();
} 

let lugar = prompt("¡Perfecto " + nombre + "! ¿En dónde te encuentras?").toUpperCase();

while (lugar === ""){
    lugar = prompt ("No ingresaste ningún lugar. Escríbelo para poder continuar").toUpperCase();
} 

console.log("El sujeto se llama " + nombre + ", y es de " + lugar);

alert (lugar + "… hhmmm, creo que ya estuve allí.");

alert ("La verdad es que llevo dormido hace muchos años");

alert ("Si me ayudas, lograre recuperar la información perdida en mi memoria. Empecemos " + nombre);

let fecha = parseInt (prompt ("Primero situémonos… ¿En qué año estamos?"));

while (fecha != 2022){
    alert("Mmmm .. ¿Eso es correcto?")
    fecha = parseInt (prompt ("¿En qué año estamos?"));
}

console.log("Actualizando fecha de sistema a... " + fecha);

alert("Sistema actualizado al: " + fecha);

alert("Mi GPS se ha dañado, es necesario reconfigurar mi brújula");

let galaxia = prompt("¿En que galaxia nos encontramos?").toUpperCase();
while (galaxia != "VIA LACTEA" || galaxia != "VÍA LÁCTEA") {

    if ((galaxia != "VIA LACTEA" || galaxia != "VÍA LÁCTEA") && (galaxia === "")){
        alert("Error, no coincide con mis últimos datos de mi bitácora");
    }else if ((galaxia === "VIA LACTEA" || galaxia === "VÍA LÁCTEA") && (galaxia !== "")){
        alert("Mis datos se actualizaron parcialmente")
        break;
    }
    galaxia = prompt("Ingrese nuevamente la galaxia").toUpperCase();
}

let sistema = "SOLAR";

alert("Estamos en la " + galaxia + " dentro del sistema " + sistema)

let planetaCantidad = parseInt(prompt("¿En este sistema cuantos planetas existen? Numero entero"));

while(planetaCantidad !== 8){

    if(planetaCantidad < 8 || planetaCantidad > 8){
        alert("¿Estás seguro de eso?");
    }
    planetaCantidad = parseInt(prompt("Ingrese la cantidad de planetas correcta:"));
}

alert("Perfecto entonces hay " + planetaCantidad + " planetas en este sistema " + sistema);

let planeta = prompt("¿En cuál de ellos nos encontramos? \n\nSATURNO \n \nMERCURIO \n \nTIERRA \n \nURANO \n \nVENUS \n \nJUPITER \n \nMARTE \n \nNEPTUNO").toUpperCase();

while(planeta != "TIERRA"){

    switch (planeta.toUpperCase()){
        case "SATURNO":
            alert("Mmm creo que no es correcto");
            break;
        case "MERCURIO":
            alert("Mmm creo que no es correcto");
            break;
        case "URANO":
            alert("Mmm creo que no es correcto");
            break;
        case "VENUS":
            alert("Mmm creo que no es correcto");
            break;
        case "JUPITER":
            alert("Mmm creo que no es correcto");
            break;
        case "MARTE":
            alert("Mmm creo que no es correcto");
            break;
        case "NEPTUNO":
            alert("Mmm creo que no es correcto");
            break;
        case "":
            alert("No ingresaste ningún valor, escribe una opción por favor.");
            break;
        default:
            alert("Esa opción no es valida");
            break;
    }
    planeta = prompt("¿En cuál de ellos nos encontramos? \n\nSATURNO \n \nMERCURIO \n \nTIERRA \n \nURANO \n \nVENUS \n \nJUPITER \n \nMARTE \n \nNEPTUNO").toUpperCase();
}

alert("¡Perfecto! " + nombre + " estamos en la " + planeta);

console.log("Estado de GPS: " + lugar + " , " + planeta + " , " + galaxia);

alert("Mi brújula esta al 100% gracias a ti, " + nombre + " de " + lugar);

let carga2 = 100*(20/100);

console.log("Nivel de carga: " + carga2 + "%");

alert("Mi nivel de carga es bajo, esta al " + carga2 + "%");

alert("Entrare en reposo hasta recuperar la totalidad");

alert("¡Gracias por tu ayuda " + nombre + "! Nos volveremos a ver pronto.")

console.log("REPOSO")

let experiencia = prompt("Una última pregunta ¿Tu experiencia fue satisfactoria? \n \nSI \n \nNO").toUpperCase();

do{

    if (experiencia === "NO"){
        alert("Lamentamos tu experiencia, trabajaremos por mejorar");
        experiencia = "NO SATISFACTORIA";
        break;
    } else if (experiencia === "SI"){
        alert("¡Nos alegramos mucho!");
        experiencia = "SATISFACTORIA";
        break;
    } else{
        alert("Opción invalida");
    }
    experiencia = prompt("Una última pregunta ¿Tu experiencia fue satisfactoria? \n \nSI \n \nNO").toUpperCase();

}while(experiencia != "NO" || experiencia != "SI")

console.log("La experiencia de " + nombre + " fue " + experiencia)