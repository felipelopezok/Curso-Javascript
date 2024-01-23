// Una función de callback es una función que se pasa a otra función como un argumento
// que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.

// La función dameData espera 3 parámetros, "operación" va a ser una función que devuelve "a" y "b" de nuevo
function dameData(a, b, operacion) {
    operacion(a, b);
}

// Entonces al llamar a la función dameData() le estamos pasando "a" = 1 y "b" = 2, para luego en el
// tercer parámetro "c" pasar una función anónima que espera dos parámetros, para luego hacer
// un console.log() que suma x(1) + v(2)
dameData(1, 2, (x, v) => {
    console.log(x + v, " suma");
});

dameData(1, 2, (x, v) => {
    console.log(x * v, " multiplicación");
});

dameData(1, 2, (x, v) => {
    console.log(x / v, " división");
});