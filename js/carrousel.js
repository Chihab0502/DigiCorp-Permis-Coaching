// Carousel pour le premier élément
const wrapper = document.querySelector(".finance-paiement .wrapper");
const carousel = document.querySelector(".finance-paiement .carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".finance-paiement .wrapper i");
const carouselChildrens = [...carousel.children];

let isDragging = false, isAutoPlay = false, startX, startScrollLeft, timeoutId;

// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
});

// Carousel pour le deuxième élément
const wrapperBis = document.querySelector(".partenaires .wrapper");
const carouselBis = document.querySelector(".partenaires .carousel");
const firstCardWidthBis = carouselBis.querySelector(".card").offsetWidth;
const arrowBtnsBis = document.querySelectorAll(".partenaires .wrapper i");
const carouselChildrensBis = [...carouselBis.children];

// Get the number of cards that can fit in the carousel at once
let cardPerViewBis = Math.round(carouselBis.offsetWidth / firstCardWidthBis);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrensBis.slice(-cardPerViewBis).reverse().forEach(card => {
    carouselBis.insertAdjacentHTML("afterbegin", card.outerHTML);
});

// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrensBis.slice(0, cardPerViewBis).forEach(card => {
    carouselBis.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carouselBis.classList.add("no-transition");
carouselBis.scrollLeft = carouselBis.offsetWidth;
carouselBis.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtnsBis.forEach(btn => {
    btn.addEventListener("click", () => {
        carouselBis.scrollLeft += btn.id == "left_bis" ? -firstCardWidthBis : firstCardWidthBis;
    });
});

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    // Records the initial cursor and scroll position of the carousel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return; // if isDragging is false return from here
    // Updates the scroll position of the carousel based on the cursor movement
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

const infiniteScroll = () => {
    // If the carousel is at the beginning, scroll to the end
    if(carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }
    // If the carousel is at the end, scroll to the beginning
    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }

    // Clear existing timeout & start autoplay if mouse is not hovering over carousel
    clearTimeout(timeoutId);
    if(!wrapper.matches(":hover")) autoPlay();
}

const autoPlay = () => {
    if(window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
    // Autoplay the carousel after every 2500 ms
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
}
autoPlay();

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);

carouselBis.addEventListener("mousedown", dragStart);
carouselBis.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carouselBis.addEventListener("scroll", infiniteScroll);
wrapperBis.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapperBis.addEventListener("mouseleave", autoPlay);
