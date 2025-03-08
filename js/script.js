// Espera a que el contenido del DOM se haya cargado completamente
document.addEventListener("DOMContentLoaded", () => {
  // MENÚ DESPLEGABLE PARA MÓVILES
  // Selecciona el botón de hamburguesa y el menú de navegación
  const toggleButton = document.querySelector(".navbar-toggle");
  const navbarMenu = document.querySelector(".navbar-menu");
  
  console.log("Botón de hamburguesa:", toggleButton);
  console.log("Menú del navbar:", navbarMenu);
  
  // Verifica que existan los elementos y añade un listener para el clic
  if (toggleButton && navbarMenu) {
    toggleButton.addEventListener("click", () => {
      // Alterna la clase 'active' para mostrar u ocultar el menú
      navbarMenu.classList.toggle("active");
    });
  } else {
    console.error("No se encontró el botón de hamburguesa o el menú.");
  }
  
  // BOTÓN FLOTANTE "INICIO"
  // Selecciona el botón flotante por su ID
  const inicioBtn = document.getElementById("inicio-btn");
  
  if (inicioBtn) {
    // Muestra el botón cuando se hace scroll hacia abajo (más de 200px)
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        inicioBtn.classList.add("visible");
      } else {
        inicioBtn.classList.remove("visible");
      }
    });
  
    // Al hacer clic en el botón, se desplaza suavemente al inicio de la página
    inicioBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  } else {
    console.error("El botón 'inicio-btn' no se encontró en el DOM.");
  }
  
  // CARRUSEL DE IMÁGENES
  // Selecciona las diapositivas y los botones de navegación
  const carruselSlides = document.querySelectorAll(".carrusel-slide");
  const btnIzquierda = document.querySelector(".carrusel-btn-izquierda");
  const btnDerecha = document.querySelector(".carrusel-btn-derecha");
  
  console.log("Slides del carrusel:", carruselSlides);
  console.log("Botón izquierdo:", btnIzquierda);
  console.log("Botón derecho:", btnDerecha);
  
  // Variable para llevar el índice de la diapositiva actual
  let indiceActual = 0;
  
  // Función para mostrar la diapositiva en el índice dado y ocultar las demás
  function showSlide(index) {
    carruselSlides.forEach((slide, i) => {
      slide.classList.remove("active"); // Oculta la diapositiva
      if (i === index) {
        slide.classList.add("active"); // Muestra la diapositiva actual
      }
    });
  }
  
  // Muestra la primera diapositiva al cargar la página
  showSlide(indiceActual);
  
  // Eventos para los botones del carrusel
  if (btnIzquierda && btnDerecha) {
    // Al hacer clic en el botón izquierdo se muestra la diapositiva anterior
    btnIzquierda.addEventListener("click", () => {
      indiceActual = (indiceActual - 1 + carruselSlides.length) % carruselSlides.length;
      showSlide(indiceActual);
    });
    
    // Al hacer clic en el botón derecho se muestra la diapositiva siguiente
    btnDerecha.addEventListener("click", () => {
      indiceActual = (indiceActual + 1) % carruselSlides.length;
      showSlide(indiceActual);
    });
  } else {
    console.error("No se encontraron los botones del carrusel.");
  }
  
  // Transición automática del carrusel cada 5 segundos
  if (carruselSlides.length > 0) {
    setInterval(() => {
      indiceActual = (indiceActual + 1) % carruselSlides.length;
      showSlide(indiceActual);
    }, 5000);
  } else {
    console.error("No se encontró el carrusel o no hay slides.");
  }
});
