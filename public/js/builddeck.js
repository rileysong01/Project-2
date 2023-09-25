
document.addEventListener('DOMContentLoaded', function () {
    // Get the container for the top section where cards will be moved
    const topSection = document.querySelector('.top-section');

    // Get all the card elements in the cData list
    const cardElements = document.querySelectorAll('.card');

    // Loop through each card and add a click event listener
    cardElements.forEach(function (card) {
        card.addEventListener('click', function (event) {

            event.preventDefault();

            // Clone the clicked card
            const clonedCard = card.cloneNode(true);
            console.log(clonedCard)

            const imageItemDiv = document.createElement('div');
            imageItemDiv.className = 'image-item';
            const id = clonedCard.getAttribute('data-cardid');
            imageItemDiv.dataset.cardid = id;
            console.log(id);
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
    saveDeckButton.addEventListener('click', async function (){
        const topSection = document.querySelector('.top-section');
        const deckName = (document.getElementById('teamNameInput')).value;

        console.log(topSection.children)
        console.log(topSection.children.length)
        if (topSection.children.length < 12) {
            alert('need to have 12 cards')
        } else if (topSection.children.length > 12) {
            alert('cannot exceed 12 cards')
        } else if (topSection.children.length === 12 && deckName) {
            const cardIDs = [];
            for (let i=0; i < topSection.children.length; i++) {
                cardIDs.push(parseInt(topSection.children[i].getAttribute('data-cardid')))
            }
            console.log(cardIDs);

            const response = await fetch('/deckbuild', {
                method: 'POST',
                body: JSON.stringify({ cardIDs, deckName }),
                headers: { 'Content-Type': 'application/json' },
              });
          
              if (response.ok) {
                document.location.replace('/deckbuild');
                alert('saved')
              } else {
                alert(response.statusText);
              }
        }
    })

    toggleButtonVisibility();

    const topSectionObserver = new MutationObserver(function () {
        toggleButtonVisibility();
    });

    const topSection = document.querySelector('.top-section');
    topSectionObserver.observe(topSection, { childList: true });
});


