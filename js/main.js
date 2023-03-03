window.onload = function() {
    let currentImageIndex = 0;
    const slideshowImages = document.querySelectorAll('.start-slideshow-img');

    // Hide all images except for the first one
    for (let i = 1; i < slideshowImages.length; i++) {
        slideshowImages[i].style.display = 'none';
    }

    // Set an interval timer to change the image every few seconds
    setInterval(() => {
        // Hide the current image
        slideshowImages[currentImageIndex].style.display = 'none';

        // Increment the current image index
        currentImageIndex++;

        // If the current index is equal to the number of images, reset it to zero
        if (currentImageIndex >= slideshowImages.length) {
            currentImageIndex = 0;
        }

        // Display the next image
        slideshowImages[currentImageIndex].style.display = 'block';
    }, 3000);
}





document.addEventListener("DOMContentLoaded", () => {
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
});

