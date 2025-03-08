document.addEventListener("DOMContentLoaded", () => {
    // Script para el menú desplegable en móviles
    const toggleButton = document.querySelector(".navbar-toggle");
    const navbarMenu = document.querySelector(".navbar-menu");
  
    console.log("Botón de hamburguesa:", toggleButton);
    console.log("Menú del navbar:", navbarMenu);
  
    if (toggleButton && navbarMenu) {
      toggleButton.addEventListener("click", () => {
        navbarMenu.classList.toggle("active");
      });
    } else {
      console.error("No se encontró el botón de hamburguesa o el menú.");
    }
  
    // Botón flotante "Inicio"
    const inicioBtn = document.getElementById("inicio-btn");
  
    if (inicioBtn) {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
          inicioBtn.classList.add("visible");
        } else {
          inicioBtn.classList.remove("visible");
        }
      });
  
      inicioBtn.addEventListener("click", () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      });
    } else {
      console.error("El botón 'inicio-btn' no se encontró en el DOM.");
    }
  
    // Carrusel de imágenes
    const carruselSlides = document.querySelectorAll(".carrusel-slide");
    const btnIzquierda = document.querySelector(".carrusel-btn-izquierda");
    const btnDerecha = document.querySelector(".carrusel-btn-derecha");
  
    console.log("Slides del carrusel:", carruselSlides);
    console.log("Botón izquierdo:", btnIzquierda);
    console.log("Botón derecho:", btnDerecha);
  
    let indiceActual = 0;
  
    function showSlide(index) {
        carruselSlides.forEach((slide, i) => {
            slide.classList.remove("active");
            if (i === index) {
                slide.classList.add("active");
            }
        });
    }
  
    showSlide(indiceActual);
  
    if (btnIzquierda && btnDerecha) {
      btnIzquierda.addEventListener("click", () => {
        indiceActual = (indiceActual - 1 + carruselSlides.length) % carruselSlides.length;
        showSlide(indiceActual);
      });
      
      btnDerecha.addEventListener("click", () => {
        indiceActual = (indiceActual + 1) % carruselSlides.length;
        showSlide(indiceActual);
      });
    } else {
      console.error("No se encontraron los botones del carrusel.");
    }
  
    if (carruselSlides.length > 0) {
      setInterval(() => {
        indiceActual = (indiceActual + 1) % carruselSlides.length;
        showSlide(indiceActual);
      }, 5000);
    } else {
      console.error("No se encontró el carrusel o no hay slides.");
    }
  });
