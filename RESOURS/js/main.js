const canciones = [
    { titulo: "Un Hombre Normal", artista: "Espinoza Paz", archivo: "../RESOURS/audio/cancion01.mp3", portada: "../RESOURS/img/portada01.jpg" },
    { titulo: "¿Lo Intentamos?", artista: "Espinoza Paz", archivo: "../RESOURS/audio/cancion02.mp3", portada: "../RESOURS/img/portada02.jpg" },
    { titulo: "De Contrabando", artista: "Jenni Rivera", archivo: "../RESOURS/audio/cancion03.mp3", portada: "../RESOURS/img/portada03.jpg" },
    { titulo: "40 y 20", artista: "José José", archivo: "../RESOURS/audio/cancion04.mp3", portada: "../RESOURS/img/portada04.jpg" },
    { titulo: "El Triste", artista: "José José", archivo: "../RESOURS/audio/cancion05.mp3", portada: "../RESOURS/img/portada05.jpg" },
    { titulo: "Rata de Dos Patas", artista: "Paquita la del Barrio", archivo: "../RESOURS/audio/cancion06.mp3", portada: "../RESOURS/img/portada06.jpg" },
    { titulo: "La Gata Bajo la Lluvia", artista: "Rocío Dúrcal", archivo: "../RESOURS/audio/cancion07.mp3", portada: "../RESOURS/img/portada07.jpg" },
    { titulo: "A Esa", artista: "Pimpinela", archivo: "../RESOURS/audio/cancion08.mp3", portada: "../RESOURS/img/portada08.jpg" },
    { titulo: "Secreto de Amor", artista: "Joan Sebastian", archivo: "../RESOURS/audio/cancion09.mp3", portada: "../RESOURS/img/portada09.jpg" },
    { titulo: "Hasta Que Te Conocí", artista: "Juan Gabriel", archivo: "../RESOURS/audio/cancion10.mp3", portada: "../RESOURS/img/portada10.jpg" }
];

const audio = document.getElementById("audio");
const titulo = document.getElementById("titulo");
const artista = document.getElementById("artista");
const portadaCancion = document.getElementById("portadaCancion");
const listaCanciones = document.getElementById("listaCanciones");

let indiceActual = 0;

function mostrarLista() {
    canciones.forEach(function (cancion, i) {
        const li = document.createElement("li");
        li.className = "col";
        li.tabIndex = 0;

        const cuadro = document.createElement("div");
        cuadro.className = "cuadro";

        const img = document.createElement("img");
        img.src = cancion.portada;
        img.alt = "Portada de " + cancion.titulo;

        const nombre = document.createElement("p");
        nombre.className = "nombre";
        nombre.textContent = cancion.titulo;

        const autor = document.createElement("p");
        autor.className = "autor";
        autor.textContent = cancion.artista;

        cuadro.append(img, nombre, autor);
        li.appendChild(cuadro);

        li.addEventListener("click", function () {
            cargarCancion(i);
            audio.play();
        });
        li.addEventListener("keydown", function (e) {
            if (e.key === "Enter") {
                cargarCancion(i);
                audio.play();
            }
        });
        listaCanciones.appendChild(li);
    });
}

function cargarCancion(i) {
    indiceActual = i;
    audio.src = canciones[i].archivo;
    titulo.textContent = canciones[i].titulo;
    artista.textContent = canciones[i].artista;
    portadaCancion.src = canciones[i].portada;
    portadaCancion.alt = "Portada de " + canciones[i].titulo;

    const items = listaCanciones.querySelectorAll("li");
    items.forEach(function (item, j) {
        item.classList.toggle("activa", j === i);
    });
}

function siguiente() {
    cargarCancion((indiceActual + 1) % canciones.length);
    audio.play();
}

audio.addEventListener("ended", siguiente);

mostrarLista();
cargarCancion(0);
