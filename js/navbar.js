document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector('.navbar');
    function adjustNavbarStyle() {
        if (window.scrollY === 0) {
            navbar.classList.add('navbar-top');
        } else {
            navbar.classList.remove('navbar-top');
        }
    }

    // Applique le style initial en fonction de la position de scroll au chargement de la page
    adjustNavbarStyle();

    // Écoute l'événement de défilement pour ajuster le style de la navbar
    window.addEventListener('scroll', adjustNavbarStyle);

    // Assure-toi que le script s'exécute uniquement sur la page d'accueil
    if (!window.location.href.includes('Accueil.html')) {
        navbar.classList.remove('navbar-top');
    }
});
