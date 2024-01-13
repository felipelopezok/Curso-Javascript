let titulo = document.getElementById("titulo");
let registro = document.getElementById("registro");
let nombre = document.getElementById("nombre");
let nombreSolo = [];

registro.addEventListener("click", ()=> {
    nombreSolo = nombre.value.split(" ");
    mensaje = nombreSolo[0] + ", gracias por registrarte!";

    alert(mensaje);
});