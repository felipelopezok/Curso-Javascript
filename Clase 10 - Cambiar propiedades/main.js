let convert = document.getElementById("convert");
let cantidad = document.getElementById("cantidad");
let divisa = document.getElementById("divisa");

let resultado = document.getElementById("resultado");
// Logueamos cuando haya un cambio para ver si funciona
divisa.addEventListener('change', (e) => {
    console.log(e.target.value);
});

let convertilos = ()=> {

    let valor = 0;
    let moneda = "usd";

    if (divisa.value == "usd") {
        valor = 1120;
        moneda = "usd";
        // Modificamos la propiedad que querramos con el atributo ".style"
        resultado.style.color = "green";
        resultado.style.border = "solid 1px black";
    } else {
        valor = 1258;
        moneda = "euro";
        resultado.style.color = "blue";
        resultado.style.border = "solid 1px black";
        // to lower csase console log
        console.log("Hola".toLowerCase());
    }

    let cuanto = parseInt(cantidad.value);
    let result = cuanto * valor;
    resultado.innerHTML = cuanto + " " + moneda + " son: " + result + " pesos.";
};

convert.addEventListener("click", convertilos);

let saludadora = (nombre, apellido, pp) => {
    console.log("Hola, tu nombre es:", nombre, "y tu apellido es:", apellido);
    if(pp){
        console.log("pp contiene uno o mas datos");
    }
};