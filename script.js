console.log("Krono Deka Music en línea!");

let index = 0;
const canciones = document.querySelectorAll(".cancion");

function mostrarCancion(i) {
  canciones.forEach(c => c.classList.remove("activo"));
  canciones[i].classList.add("activo");
}

function siguiente() {
  index = (index + 1) % canciones.length;
  mostrarCancion(index);
}

function anterior() {
  index = (index - 1 + canciones.length) % canciones.length;
  mostrarCancion(index);
}

// Mostrar la primera canción al cargar
mostrarCancion(index);
