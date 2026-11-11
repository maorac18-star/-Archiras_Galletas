const pestañas = document.querySelectorAll("nav a");
const ventanas = document.querySelectorAll(".seccion");

function mostrarVentana(id) {
  const ventanaElegida = document.getElementById(id);
  if (!ventanaElegida || !ventanaElegida.classList.contains("seccion")) return;

  ventanas.forEach(ventana => ventana.classList.remove("activa"));
  void ventanaElegida.offsetWidth;
  ventanaElegida.classList.add("activa");

  pestañas.forEach(pestaña => {
    pestaña.classList.toggle("activa", pestaña.getAttribute("href") === "#" + id);
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.querySelectorAll('a[href^="#"]').forEach(enlace => {
  enlace.addEventListener("click", function(event) {
    const id = this.getAttribute("href").substring(1);
    const destino = document.getElementById(id);
    if (destino && destino.classList.contains("seccion")) {
      event.preventDefault();
      mostrarVentana(id);
    }
  });
});

mostrarVentana("inicio");
