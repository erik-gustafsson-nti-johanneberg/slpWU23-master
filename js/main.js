document.addEventListener("DOMContentLoaded", () => {
    // --- The navigation --- //
    let button = document.querySelector("i");
    let menu = document.querySelector("nav");
    let layer = document.querySelector(".fade-layer");

    button.addEventListener("click", show);
    layer.addEventListener("click", show);

    function show() {
        console.log("funkar");
        menu.classList.toggle("show");
        layer.classList.toggle("visible");
    }


    // --- The slideshow --- //
    let currentImageIndex = 0;
    let slideshow_timer = true;
    const slideshowImages = document.querySelectorAll('.start-slideshow-img');
    const dots = document.querySelectorAll('.dot');

    // Hide all images except for the first one
    for (let i = 1; i < slideshowImages.length; i++) {
        slideshowImages[i].style.display = 'none';
    }

    // Set the first dot to active
    dots[currentImageIndex].classList.add('active');

    function switchSlideshowImage(incrament) {
        // Hide the current image
        slideshowImages[currentImageIndex].style.display = 'none';
        dots[currentImageIndex].classList.remove('active');

        // Increment the current image index
        currentImageIndex += incrament;

        // If the current index is equal to the number of images, reset it to zero
        if (currentImageIndex >= slideshowImages.length) {
            currentImageIndex = 0;
        }

        // Display the next image
        slideshowImages[currentImageIndex].style.display = 'block'
        dots[currentImageIndex].classList.add('active');
    }


    // Set an interval timer to change the image every few seconds
    setInterval(() => {
        if (slideshow_timer) {
            switchSlideshowImage(1);
        }
    }, 3000);

    // Set the query for the next or previous image buttons
    let btnNext = document.querySelector('.next')
    let btnPrev = document.querySelector('.prev')

    btnNext.addEventListener("click", nextImg);
    btnPrev.addEventListener("click", prevImg);


    function nextImg() {
        slideshow_timer = false;
        switchSlideshowImage(1);
    }

    function prevImg() {
        slideshow_timer = false;
        if (currentImageIndex == 0) {
            switchSlideshowImage(slideshowImages.length-1)
        } else {
            switchSlideshowImage(-1);
        }
    }


});


