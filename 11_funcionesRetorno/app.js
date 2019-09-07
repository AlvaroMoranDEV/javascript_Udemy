function obtenerAleatorio() {
    return Math.random();
}

function obtenerNombre() {
    return "Juan";
}

function esMayorMitad() {
    if (obtenerAleatorio() > 0.5) {
        return true;
    } else {
        return false;
    }
}

function crearPersona(nombre, apellido) {
    return {
        nombre: nombre,
        apellido: apellido
    };
}


function crearFuncion() {
    return function() {
        console.log("Funcion creada");
    };
}

function funcionEnFuncion() {
    return function(nombreF) {
        console.log("Me creo: " + nombreF);
        return function() {
            console.log("Segunda funcion");
        };
    };
}

var primeraFuncion = funcionEnFuncion();
var segundaFuncion = primeraFuncion("Pepe");
segundaFuncion();





console.log(obtenerAleatorio() + 10);
var nombre = obtenerNombre();
console.log(nombre + "Padillo");
console.log(esMayorMitad());

if (esMayorMitad()) {
    console.log("Es mayor que 0.5");
} else {
    console.log("Es menor que 0.5");
}
var persona = crearPersona("Nombre", "Apellido");

var funcion = crearFuncion();
funcion();