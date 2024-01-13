// Instanciamos los nodos con los que vamos a trabajar

let convert = document.getElementById("convert");
let cantidad = document.getElementById("cantidad");
let divisa = document.getElementById("divisa");
let resultado = document.getElementById("resultado");
let modo = document.getElementById("modo");
let contenedor = document.getElementById("contenedor");
let pic = document.getElementById("pic");
// Logueamos cuando haya un cambio para ver si funciona
divisa.addEventListener('change', (e) => {
    console.log(e.target.value);
});

modo.addEventListener("change", () => {
    // Si el input "modo" esta checked, le agregamos la clase noche, de lo contrario la removemos

    // Para trabajar con clases utilizamos el "classList"

    // Forma extensa
    // if (modo.checked) {
    //     contenedor.classList.add("noche");
    // }else{
    //     contenedor.classList.remove("noche");
    // }

    // Forma corta
    contenedor.classList.toggle("noche");
});

let convertilos = () => {

    let valor = 0;
    let moneda = "usd";

    if (divisa.value == "usd") {
        valor = 1120;
        moneda = "usd";
        // Modificamos la propiedad que queremos con el atributo ".style"
        resultado.style.color = "green";
        resultado.style.border = "solid 1px black";
        // Modificamos el src de la img con JS
        pic.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Presidential_dollar_coin_reverse.png/220px-Presidential_dollar_coin_reverse.png";
    } else {
        valor = 1258;
        moneda = "euro";
        resultado.style.color = "blue";
        resultado.style.border = "solid 1px black";
        pic.src = "https://cdn.pixabay.com/photo/2013/07/12/12/14/euro-145386__480.png";
    }

    let cuanto = parseInt(cantidad.value);
    let result = cuanto * valor;
    resultado.innerHTML = cuanto + " " + moneda + " son: " + result + " pesos.";
};

convert.addEventListener("click", convertilos);

let saludadora = (nombre, apellido, pp) => {
    console.log("Hola, tu nombre es:", nombre, "y tu apellido es:", apellido);
    if (pp) {
        console.log("pp contiene uno o mas datos");
    }
};