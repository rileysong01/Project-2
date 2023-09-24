
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

            const imageItemDiv = document.createElement('div');
            imageItemDiv.className = 'image-item';
            const cardImage = clonedCard.querySelector('img');

            cardImage.style.width = '150px';

            const imageClone = cardImage.cloneNode(true);
            imageItemDiv.appendChild(imageClone);
            topSection.appendChild(imageItemDiv);

            // Remove the clicked card from the cData picture pool
            card.remove();
        });
    });
});




document.addEventListener('DOMContentLoaded', function () {
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

    // Refresh page when delete button is clicked
    deleteDeckButton.addEventListener('click', function () {
        location.reload();
    });

    // Pass data to backend when save deck button is clicked
    saveDeckButton.addEventListener('click', function (){

    })

    toggleButtonVisibility();

    const topSectionObserver = new MutationObserver(function () {
        toggleButtonVisibility();
    });

    const topSection = document.querySelector('.top-section');
    topSectionObserver.observe(topSection, { childList: true });
});


