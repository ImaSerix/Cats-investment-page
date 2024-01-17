let slideIndex = 1;

function plusSlides(n){
    slideIndex += n;
    if (slideIndex < 1) slideIndex = 4;
    if (slideIndex > 4) slideIndex = 1;
    showSlide (slideIndex);
}

function showSlide(slideIndex){
    const slides = document.getElementsByClassName("slideshow-slide");
    for (let slide of slides)
        slide.style.display = "none";
    const targetSlide = document.getElementById("slideshow-slide-" + slideIndex);
    targetSlide.style.display = "block";
}

document.addEventListener('DOMContentLoaded', (e) =>{
    showSlide (slideIndex);
});