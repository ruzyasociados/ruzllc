let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Desplazamiento hacia abajo: Ocultar la barra de navegación
        navbar.style.top = '-80px'; // Ajusta la altura de la barra de navegación según sea necesario
    } else {
        // Desplazamiento hacia arriba: Mostrar la barra de navegación
        navbar.style.top = '0';
    }
    lastScrollTop = scrollTop;
});
