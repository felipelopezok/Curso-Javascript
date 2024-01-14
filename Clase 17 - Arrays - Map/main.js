let entrada = document.getElementById("entrada");
let meter = document.getElementById("meter");
let contenedor = document.getElementById("contenedor");

meter.addEventListener("click", () => {
    // Con el método "push()" le agregamos un elemento a un array
    arreglo.push(entrada.value);

    // Con el método "lenght()" sabemos cuantos elementos contiene el array
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

// El método "map()" es un método de array, crea un nuevo array con los resultados de 
// la llamada a la función anónima indicada aplicados a cada uno de sus elementos

// En este caso itera uno por uno los elementos del array "arreglo" y 
// por cada vuelta, agrega el NOMBRE y el PRECIO de cada uno dentro del array "producto"

// La función que se creó en este caso, sirve para agregar al nodo "contenedor"
// varios "<li>" que contienen productos con la info que se pidió de los objetos (nombre y precio)
arreglo.map((producto) => {
    let modelo =
        "<li>" +
        producto.nombre +
        " precio: <strong>" +
        producto.precio +
        "</strong></li>";
    // Utilizamos el "+=" para ir concatenando nuevos elementos, manteniendo los que ya estaban
    contenedor.innerHTML += modelo;
});