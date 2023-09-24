
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
            cardImage.style.width = '150px';

            const imageClone = cardImage.cloneNode(true);
            imageItemDiv.appendChild(imageClone);

            // Append the new div (with image) to the top section
            topSection.appendChild(imageItemDiv);

            // Remove the clicked card from the cData picture pool
            card.remove();
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Get the "Delete Deck" button element
    const deleteDeckButton = document.getElementById('deleteDeck');

    // Add a click event listener to the button
    deleteDeckButton.addEventListener('click', function () {
        // Refresh the page
        location.reload();
    });
});




document.addEventListener('DOMContentLoaded', function () {
    // Get the "Delete Deck" and "Save Deck" buttons
    const deleteDeckButton = document.getElementById('deleteDeck');
    const saveDeckButton = document.getElementById('saveDeck');

    // Function to check if the top section is empty
    function isTopSectionEmpty() {
        const topSection = document.querySelector('.top-section');
        return topSection.childElementCount === 0;
    }

    // Function to toggle button visibility
    function toggleButtonVisibility() {
        if (isTopSectionEmpty()) {
            deleteDeckButton.style.display = 'none';
            saveDeckButton.style.display = 'none';
        } else {
            deleteDeckButton.style.display = 'block';
            saveDeckButton.style.display = 'block';
        }
    }

    // Add a click event listener to the "Delete Deck" button
    deleteDeckButton.addEventListener('click', function () {
        // Refresh the page
        location.reload();
    });

    // Check if the top section is empty and hide the buttons initially
    toggleButtonVisibility();

    // Add an event listener to watch for changes in the top section
    const topSectionObserver = new MutationObserver(function () {
        toggleButtonVisibility();
    });

    // Start observing changes in the top section
    const topSection = document.querySelector('.top-section');
    topSectionObserver.observe(topSection, { childList: true });
});


