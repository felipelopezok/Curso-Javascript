let convert = document.getElementById("convert");
let cantidad = document.getElementById("cantidad");
let divisa = document.getElementById("divisa");

let resultado = document.getElementById("resultado");
// Logueamos el cambio para ver si funciona
divisa.addEventListener('change', (e) => {
    console.log(e.target.value);
});

convert.addEventListener('click', () => {
    total_convertido = parseInt(cantidad.value) * parseInt(divisa.value);
    resultado.innerHTML = total_convertido;
});