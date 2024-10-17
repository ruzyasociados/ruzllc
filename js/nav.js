let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const halfWindowHeight = windowHeight / 2;

    if (scrollTop > halfWindowHeight) {
        // Solo oculta la barra si el usuario se desplaza hacia abajo
        if (scrollTop > lastScrollTop) {
            navbar.style.top = '-80px'; // Ajusta la altura de la barra de navegación según sea necesario
        } else {
            // Desplazamiento hacia arriba: Mostrar la barra de navegación
            navbar.style.top = '0';
        }
    } else {
        // Si el usuario está en la parte superior, muestra la barra
        navbar.style.top = '0';
    }

    lastScrollTop = scrollTop;
});

// Cerrar el menú de navegación al hacer clic en un enlace
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            const navbarCollapse = document.getElementById('navbarS');
            if (navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                bsCollapse.hide();
            }
        });
    });
});

// Cerrar el menú de navegación al hacer clic fuera de él
document.addEventListener('click', function(event) {
    const navbarCollapse = document.getElementById('navbarS');
    const toggler = document.querySelector('.navbar-toggler');

    // Comprobar si el clic fue fuera del menú y del toggler
    if (!navbarCollapse.contains(event.target) && !toggler.contains(event.target) && navbarCollapse.classList.contains('show')) {
        const bsCollapse = new bootstrap.Collapse(navbarCollapse);
        bsCollapse.hide();
    }
});
