window.onload = (event) => {
    //open default tab on page load
    checkDevice();
};

function checkDevice() {
    //check device size
    window.innerWidth >= 1200 ? document.getElementById("defaultOpen").click() : document.getElementById("defaultDot").click();
}
//open tabs on desktop
function openTab(evt, tabData) {
    let i, tabContent, tabLinks, tabDots;

    tabContent = document.getElementsByClassName("tab-data");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    tabLinks = document.getElementsByClassName("nav-indicator");
    tabDots = document.getElementsByClassName("dot");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
        tabLinks[i].addEventListener("click", (e) => e.preventDefault());
        tabDots[i].className = tabDots[i].className.replace(" active", "");
        tabDots[i].addEventListener("click", (e) => e.preventDefault());
    }

    document.getElementById(tabData).style.display = "flex";
    evt.currentTarget.className += " active";
}

//comments carousel
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let indicators = document.getElementsByClassName("arrow");
    let slides = document.getElementsByClassName("comment-body");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < indicators.length; i++) {
        indicators[i].addEventListener("click", (e) => e.preventDefault());
    }
    slides[slideIndex - 1].style.display = "flex";
}