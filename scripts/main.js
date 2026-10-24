const loader = document.getElementById("loader");
const website = document.getElementById("website");

setTimeout(() => {
    // Activamos la transicion de CSS
    loader.classList.add("hide");
    website.classList.remove("show");

    // Permitir iteraccion con la pagina
    website.removeAttribute("inert");

    // Retiramos el loader cuando termina la transicion
    setTimeout(() => {
        loader.remove();
    }, 700);

}, 3000);