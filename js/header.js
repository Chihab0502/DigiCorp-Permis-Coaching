function scrollToSection(event) {
    event.preventDefault(); // Empêcher le comportement de lien par défaut
    const section = document.querySelector(event.currentTarget.getAttribute('href')); // Obtenir l'élément cible en utilisant currentTarget
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Défilement doux vers la section
    }
}
