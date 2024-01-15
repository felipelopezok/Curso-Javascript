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

// La función "Math.random()" retorna un número de coma flotante pseudo-aleatorio,
// comprendido en el rango de 0 a menor que 1 (es decir, incluido el 0 pero no el 1)
// console.log(Math.random());
// Ej: 0.7489399423

// La función "Math.floor()" retorna el máximo entero menor o igual a un número.
// Como la estamos ejecutando con un "Math.random()", nos va a dar 0 o 1
// console.log(Math.floor(Math.random()));

// La función "Math.round()" retorna el valor de un número redondeado al entero más cercano.
// En este caso queremos un numero entre 1 y 10, entonces multiplicamos el random por 9
// y al resultado le agregamos 1 porque si el "round()" redondea hacia 0, se le suma 1 y es entre 1 y 10
// console.log(Math.round(Math.random() * 9) + 1);

// La función espera dos parámetros, minimo y maximo, al ejecutarla retorna
// el "random()" retorna 0 o 1, se multiplica por el max y se redondea
// luego a ese total le sumamos el mínimo
let dameRandom = (min, max) => {
    return Math.round(Math.random() * max) + min;
}

// Ejemplo para buscar numero entre 1 y 10
// Si da 2, + 1 = 3, si da 5, + 1 = 6 y en el caso q de nuestro máximo: 9 + 1 = 10
// que es el ultimo numero máximo que permitimos
console.log(dameRandom(1,9));

// Y en este último ejemplo, seleccionamos un producto del array "arreglo"
// pidiendo con la funcion "dameRandom()" uno entre 0 (Que es el primero del array) 
// y como máximo el length del array
// alert(arreglo[dameRandom(0, arreglo.length)].nombre);

// El método "map()" es un método de array, crea un nuevo array con los resultados de 
// la llamada a la función anónima indicada aplicados a cada uno de sus elementos

// En este caso itera uno por uno los elementos del array "arreglo" y 
// por cada vuelta, agrega el NOMBRE y el PRECIO de cada uno dentro del array "producto"

// La función que se creó, sirve para agregar al nodo "contenedor"
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