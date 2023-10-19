// Carrusel
const textElements = [
    "...vestibulum mollis",
    "tortor ac congue commodo",
    "...vestibulum mollis, tortor ac congue commodo"
];

const textElement = document.querySelector(".text-carousel");
let currentIndex = 0;

function changeText() {
    textElement.textContent = textElements[currentIndex];
    currentIndex = (currentIndex + 1) % textElements.length;
}

// Cambia de texto cada 2 segundos del carrusel.
setInterval(changeText, 2000);

// JavaScript para mostrar las subopciones cuando se hace clic en "Opciones"
const opcionesMenu = document.getElementById("opciones-menu");
const opcionesDropdown = document.getElementById("opciones-dropdown");

opcionesMenu.addEventListener("click", function() {
    opcionesDropdown.classList.toggle("show");
});

// Función para manejar el cambio de tamaño de la ventana
function handleWindowSizeChange() {
    const serchBarra = document.getElementById("serch-barra");
    const serchClon = document.getElementById("serch-clon");
    const opcionesMenu = document.getElementById("opciones-menu");
    const listaClon = document.getElementById("lista-clon");

    const isNotLG = !window.matchMedia("(min-width: 992px)").matches; 
    // Comprueba que no sea LG

    if (isNotLG) {
        opcionesMenu.style.display = "block"; // Muestra opciones-menu
        listaClon.style.display = "none"; // Oculta lista-clon
        serchClon.style.display = "none"; // Oculta el serch-clon
        serchBarra.style.display = "block"; // Muestra el serch-barra
    } else {
        opcionesMenu.style.display = "none"; // Oculta opciones-menu
        listaClon.style.display = "block"; // Muestra lista-clon
        serchClon.style.display = "block"; // Muestra el serch-clon
        serchBarra.style.display = "none"; // Oculta el serch-barra
    }
}

// Agrega un listener para el evento resize para cuando cambia el tamaño 
// de pantalla.
window.addEventListener("resize", handleWindowSizeChange);

// Llama a la función para establecer el estado inicial
handleWindowSizeChange();

//Función para mostrar el submenu
const submenu = document.getElementById("submenu");
const submenu2 = document.getElementById("submenu2");

function desplegarMenu(){
    submenu2.style.display = "block";
}

submenu.addEventListener("click", desplegarMenu);