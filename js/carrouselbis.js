document.addEventListener('DOMContentLoaded', function() {
    var carouselEl = document.querySelector('#carouselCards');
    var items = carouselEl.querySelectorAll('.carousel-item .col-lg-4');
    var totalItems = items.length;
    var currentIndex = 0; // Pour garder une trace de l'index actuel

    // Désactiver le défilement automatique de Bootstrap
    var carousel = new bootstrap.Carousel(carouselEl, {
        interval: false,
        wrap: false
    });

    var nextButton = carouselEl.querySelector('.carousel-control-next');
    var prevButton = carouselEl.querySelector('.carousel-control-prev');

    // Gérer manuellement le défilement suivant
    nextButton.addEventListener('click', function (e) {
        e.stopPropagation(); // Stopper la propagation pour empêcher Bootstrap de déclencher
        moveSlide(1); // Déplacer d'une carte
    });

    // Gérer manuellement le défilement précédent
    prevButton.addEventListener('click', function (e) {
        e.stopPropagation(); // Stopper la propagation pour empêcher Bootstrap de déclencher
        moveSlide(-1); // Revenir d'une carte
    });

    function moveSlide(direction) {
        // Calculer le nouvel index
        currentIndex = (currentIndex + direction + totalItems) % totalItems;
        var itemToShow = Math.floor(currentIndex / 3); // Trouver l'index de 'carousel-item' à afficher

        // Masquer tous les éléments et montrer celui à l'index calculé
        carouselEl.querySelectorAll('.carousel-item').forEach(function(item, index) {
            item.classList.remove('active');
            if (index === itemToShow) {
                item.classList.add('active');
            }
        });
    }
});
