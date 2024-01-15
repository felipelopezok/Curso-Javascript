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
    { nombre: "Felipe", precio: "33", txt: "la descripcion3" },
    { nombre: "Pepe", precio: "334", txt: "la descripcion1" },
    { nombre: "Carlos", precio: "310", txt: "la descripcion2" },
    { nombre: "Juan", precio: "10", txt: "la descripcion4" },
    { nombre: "Felipe", precio: "33", txt: "la descripcion3" },
    { nombre: "Felipe", precio: "33", txt: "la descripcion3" }
];

// El método "filter()" recorre cada posición del array y 
// crea un nuevo array con todos los elementos que 
// cumplan la condición implementada por la función dada.

// Por cada iteración del filter en el array "arreglo", guardamos los productos que cumplan 
// la condición (menor a 100) del return dentro del array "productosBaratos"
let productosBaratos = arreglo.filter((producto) => {
    // Si esta condición da verdadero (Que el producto valga menos de 100), se guarda en el array
    return producto.precio < 100;
});

// Lo mismo que arriba pero al contrario
let productosCaros = arreglo.filter((producto) => {
    return producto.precio > 100;
});

// El método "reduce()" ejecuta una función reductora sobre cada elemento de un array
// devolviendo como resultado un único valor.

// Por ejemplo, en el caso de que deseamos saber cuantos productos "x" se vendieron
// utilizaremos este método

let productosVendidos = arreglo.reduce((contador, producto) => {
    // Si algún producto que cumpla con la condición, "contador" aumenta su valor
    // En el caso contrario, no le agrega nada
    if (producto.nombre == "Felipe") {
        return contador + 1;
    }else{
        return contador;
    }
    // Con este "0" nos sirve para poner el valor del contador en 0
}, 0);

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