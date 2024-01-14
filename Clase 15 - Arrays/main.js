let entrada = document.getElementById("entrada");
let meter = document.getElementById("meter");

meter.addEventListener("click", () => {
    // Con el método "push" le agregamos un elemento a un array
    arreglo.push(entrada.value);

    // Con el método "lenght" sabemos cuantos elementos contiene el array
    // console.log(arreglo.length);
});

let arreglo = ["pepe", "loro", "perrito"];