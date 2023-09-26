document.addEventListener("DOMContentLoaded", function () {
    const deleteButtons = document.querySelectorAll(".delete-deck");

    deleteButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const deckId = button.getAttribute("data-deckid"); // Get the deck ID from data attribute


            fetch(`/mydeck/${deckId}`, {
                method: "DELETE",
            })
                .then(function (response) {
                    if (response.ok) {

                        console.log(`Deck ${deckId} deleted successfully.`);

                        const deckContainer = document.querySelector(`.deckcontainer[data-deckid="${deckId}"]`);
                        if (deckContainer) {
                            deckContainer.remove();
                        }
                    } else {

                        console.error(`Error deleting deck ${deckId}: ${response.status}`);
                    }
                })
                .catch(function (error) {

                    console.error(`Error deleting deck ${deckId}:`, error);
                });
        });
    });
});
