// Una función de callback es una función que se pasa a otra función como un argumento
// que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.

// La función dameData espera 3 parámetros, "operación" va a ser una función que devuelve "a" y "b" de nuevo
function dameData(a, b, t, operacion) {
    // Creamos un setTimeout con los parámetros de la función dameData()
    setTimeout(() => {
        operacion(a, b);
    }, t);
}

// Entonces al llamar a la función dameData() le estamos pasando "a" = 1 y "b" = 2, para luego en el
// tercer parámetro "c" pasar una función anónima que espera dos parámetros, para luego hacer
// un console.log() que suma x(1) + v(2)
dameData(1, 2, 500, (x, v) => {
    console.log(x + v, " suma");
});

dameData(1, 2, 100, (x, v) => {
    console.log(x * v, " multiplicación");
});

dameData(1, 2, 1200, (x, v) => {
    console.log(x / v, " división");
});

// Ejemplo para promesa

// La variable "const" data es un array de objetos, con la 
// particularidad de que al ser "const" no se puede modificar su valor inicial.
// Es decir, no se puede hacer data = "otro valor", pero si se puede modificar
// el contenido de cada objeto dentro del array
const data = [
    { id: 1, nombre: "Felipe Lopez", edad: 18 },
    { id: 2, nombre: "Juan Perez", edad: 23 },
    { id: 3, nombre: "Carlos Rodriguez", edad: 33 }
];

const dameDatos = () => {
    // Retornamos una promesa, que es una función que espera dos parámetros
    // resolve y reject, que son funciones que se ejecutan cuando la promesa
    // se resuelve o se rechaza
    return new Promise((resolve, reject) => {
        // Simulamos una petición a un servidor con un setTimeout
        setTimeout(() => {
            // Si la petición es exitosa, resolvemos la promesa
            resolve(data);
        }, 500);
    });
};

// Llamamos a la función dameDatos() y le pasamos un .then() que espera una función
// que se ejecuta cuando la promesa se resuelve.
// En este caso, solo utilizamos () => console.log(datos), que es una función anónima
// que espera un parámetro "datos" que es el resultado de la promesa.

// Esta es una de las formas en que llamamos al then() de una promesa
dameDatos().then((datos) => console.log(datos));

// Pero también podemos utlizar de la forma async/await, que es una forma más
// simple de trabajar con promesas.

async function imprimirDatos(){
    const datita = await dameDatos();
    console.log(datita, " desde el await");
}

imprimirDatos();