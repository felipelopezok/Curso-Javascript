let titulo = document.getElementById("titulo");
let ingresoA = document.getElementById("ingresoA");
let ingresoB = document.getElementById("ingresoB");
let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    let resultado = parseInt(ingresoA.value) + parseInt(ingresoB.value);
    titulo.innerHTML = "El resultado es: " + resultado;
});