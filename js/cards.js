function toggleDescription(card) {
    const longText = card.querySelector('.long-text');
    const shortText = card.querySelector('.short-text');

    // Alternar la visibilidad de los textos en pantallas pequeñas
    if (window.innerWidth < 768) {
        if (longText.style.display === "none" || longText.style.display === "") {
            longText.style.display = "block"; // Muestra la descripción larga
            shortText.style.display = "none"; // Oculta la descripción corta
        } else {
            longText.style.display = "none"; // Oculta la descripción larga
            shortText.style.display = "block"; // Muestra la descripción corta
        }
    }
}
