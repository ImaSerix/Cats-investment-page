let slideIndex = {
    "reviews-container": {
        "value":1,
        "max":4
    },
    "team-container":{
        "value":1,
        "max":3
    }
}

function plusSlides(elem, n){
    const containerId = elem.dataset.containerid;
    slideIndex[containerId].value += n;  
    if (slideIndex[containerId].value < 1) slideIndex[containerId].value = slideIndex[containerId].max;
    if (slideIndex[containerId].value > slideIndex[containerId].max) slideIndex[containerId].value = 1;
    showSlide (containerId, slideIndex[containerId].value);
}
function showSlide(containerId, slideIndex){
    const container = document.getElementById(containerId);
    const slides = container.getElementsByClassName("slideshow-slide");
    for (let slide of slides)
        slide.classList.remove("slideshow-active");
    const targetSlide = document.getElementById(containerId+"-"+"slideshow-slide-" + slideIndex);
    targetSlide.classList.add("slideshow-active");
}
