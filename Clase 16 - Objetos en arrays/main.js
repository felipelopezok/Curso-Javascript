let entrada = document.getElementById("entrada");
let meter = document.getElementById("meter");

meter.addEventListener("click", () => {
    // Con el método "push" le agregamos un elemento a un array
    arreglo.push(entrada.value);

    // Con el método "lenght" sabemos cuantos elementos contiene el array
    // console.log(arreglo.length);
});

// Un objeto se defina con llaves y
// a diferencia de un array, este contiene clave y valor. ej: nombre:"Felipe"
// let objeto = { nombre: "Felipe", precio: "33", txt: "la descripcion" };

let arreglo = [
    { nombre: "Felipe", precio: "33", txt: "la descripcion" },
    { nombre: "Pepe", precio: "334", txt: "la descripcion" },
    { nombre: "Carlos", precio: "310", txt: "la descripcion" }
];