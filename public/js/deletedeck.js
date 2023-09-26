
document.addEventListener("DOMContentLoaded", function () {
    const deleteButtons = document.querySelectorAll(".delete-deck");

    deleteButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const deckId = button.getAttribute("data-deckid");

            fetch(`/mydeck/mydeck/${deckId}`, {
                method: "DELETE",
            })
            .then(response => {
                if (response.ok) {
                    console.log(`Deck ${deckId} deleted successfully.`);
                    const deckContainer = document.querySelector(`.deckcontainer[data-deckid="${deckId}"]`);
                    if (deckContainer) {
                        deckContainer.remove(); // Remove the deck from the DOM
                    }
                } else {
                    console.error(`Error deleting deck ${deckId}: ${response.status}`);
                }

            })
            .catch(error => {
                console.error(`Error deleting deck ${deckId}:`, error);
            });
        });
    });
});
