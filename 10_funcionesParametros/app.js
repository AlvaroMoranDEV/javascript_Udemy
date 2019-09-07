function imprimir(nombre, apellido) {

    apellido = apellido || "XXXX";
    console.log(nombre + " " + apellido);
}

imprimir("Juan");

function imprimirOjbeto(persona) {
    console.log(persona.nombre + " " + persona.apellido);
    persona.nombre = "Maria";
}

var obj = {
    nombre: "Juan",
    apellido: "Perez"
};
imprimirObjeto(obj);
console.log(obj.nombre);

function reciboFuncion(fn) {
    fn();
}

reciboFuncion(function() {
    console.log("Funcion anonima");
});

function reciboFuncionExplicita(fn) {
    fn();
}

var miFuncion = function() {
    console.log("miFuncion");
}

reciboFuncionExplicita(miFuncion);