window.onload = function() {

    
    
}





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
    const slideshowImages = document.querySelectorAll('.start-slideshow-img');
    const dots = document.querySelectorAll('.dot');

    // Hide all images except for the first one
    for (let i = 1; i < slideshowImages.length; i++) {
        slideshowImages[i].style.display = 'none';
    }

    // Set the first dot to active
    dots[currentImageIndex].classList.add('active');


    // Set an interval timer to change the image every few seconds
    setInterval(() => {
        // Hide the current image
        slideshowImages[currentImageIndex].style.display = 'none';
        dots[currentImageIndex].classList.remove('active');

        // Increment the current image index
        currentImageIndex++;

        // If the current index is equal to the number of images, reset it to zero
        if (currentImageIndex >= slideshowImages.length) {
            currentImageIndex = 0;
        }

        // Display the next image
        slideshowImages[currentImageIndex].style.display = 'block'
        dots[currentImageIndex].classList.add('active');
    }, 3000);



});


