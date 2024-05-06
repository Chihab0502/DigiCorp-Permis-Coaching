function zoomIn(element) {
    element.style.transform = "scale(1.2)";
    element.style.transition = "transform 0.25s ease";
}

function zoomOut(element) {
    element.style.transform = "scale(1)";
    element.style.transition = "transform 0.25s ease";
}
