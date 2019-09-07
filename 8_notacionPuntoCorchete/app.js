var objeto = {
    nombre: "Pepe",
    edad: 30,
    direccion: {
        calle: "Calle",
        numero: 46,
        edificio: {
            nombre: "Casoplon",
            telefono: "23415141"
        }
    }
};

console.log(objeto.direccion.edificio.nombre);

objeto.direccion.zipcode = 28100;
console.log(objeto.direccion.zipcode);

console.log(objeto.nombre);
console.log(objeto.edad);
console.log(objeto.direccion.calle);
console.log(objeto.direccion.numero);

var edificio = objeto.direccion.edificio;
// Operamos de manera directa
edificio.nopiso = 3;
edificio.puerta = "B";
console.log(objeto);

// Corchetes
console.log(objeto["nombre"] + "," + objeto["direccion"]["calle"]);

var field = "edad2";
console.log(objeto[field]);