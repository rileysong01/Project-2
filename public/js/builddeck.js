
document.addEventListener('DOMContentLoaded', function () {
    // Get the container for the top section where cards will be moved
    const topSection = document.querySelector('.top-section');

    // Get all the card elements in the cData list
    const cardElements = document.querySelectorAll('.card');

    // Loop through each card and add a click event listener
    cardElements.forEach(function (card) {
        card.addEventListener('click', function () {
            // Clone the clicked card
            const clonedCard = card.cloneNode(true);

            // Create a new div element with the 'image-item' class
            const imageItemDiv = document.createElement('div');
            imageItemDiv.className = 'image-item';

            // Copy the image and attributes from the cloned card to the new div
            const cardImage = clonedCard.querySelector('img');

            // Set the 'width' style to '100%' instead of 'max-width: 100%'
            cardImage.style.width = '175px';

            const imageClone = cardImage.cloneNode(true);
            imageItemDiv.appendChild(imageClone);

            // Append the new div (with image) to the top section
            topSection.appendChild(imageItemDiv);

            // Remove the clicked card from the cData picture pool
            card.remove();
        });
    });
});

