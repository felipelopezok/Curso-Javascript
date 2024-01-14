// Proyecto II

let final = document.getElementById("final");
let dame = document.getElementById("dame");
let dame2 = document.getElementById("dameDos");

let cap1 = document.getElementById("cap1");
let cap2 = document.getElementById("cap2");
let cap3 = document.getElementById("cap3");

let btnCap1 = document.getElementById("btn-cap1");
let btnCap2 = document.getElementById("btn-cap2");

btnCap1.addEventListener("click", () => {
    cap1.classList.remove("d-block");
    cap1.classList.add("d-none");

    cap2.classList.remove("d-none");
    cap2.classList.add("d-block");
});

btnCap2.addEventListener("click", () => {
    cap2.classList.remove("d-block");
    cap2.classList.add("d-none");

    cap3.classList.remove("d-none");
    cap3.classList.add("d-block");
});

// Finales alternativos
dame.addEventListener("click", () => {
    final.innerHTML = "El niño se hizo un joven casi adulto y quiso llenar su vacío interior adentrándose por las intransitables selvas de la droga, alcohol y la delincuencia.Cada vez se encontró mayor rechazo social y familiar, y tras ingresar en centros de menores, y posteriormente, penales, al final, murió joven, en una espiral de violencia y furia, llevándose por delante a cuantos inocentes osaron enfrentarse en su camino de violencia y destrucción.";
});
dame2.addEventListener("click", () => {
    final.innerHTML = "Aún con muchas dificultades, la familia, y el colegio mantuvieron un esfuerzo coordinado por hacerle sentir especialmente amado y bueno. Pudo tener, por fin, un amigo, haciéndolo sentir, por primera vez, merecedor del afecto de sus iguales. Un profesor se atrevió a mirar mas allá de su apariencia hosca, y logró hacerse un hueco en su corazón atribulado. Inconmensurables cantidades de amor y paciencia de todos cuantos le rodearon le ayudaron a llenar su vacío interior y restañar su herida primigenia con el amor de sus semejantes. Y cuando alcanzó la madurez, pudo elevarse más allá de su doloroso origen, y desarrollar una vida plena, criar una familia, y crear relaciones plenas afectivas con cuantos lo rodearon, y hacer felices a sus semejantes siendo feliz el mismo.";
});