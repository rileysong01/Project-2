document.addEventListener("DOMContentLoaded", function () {
    const deleteButtons = document.querySelectorAll(".delete-deck");

    deleteButtons.forEach(async function (button) {
        button.addEventListener("click", async function () {
            const deckId = button.getAttribute("data-deckid"); // Get the deck ID from data attribute

            try {
                const response = await fetch(`/mydeck/${deckId}`, {
                    method: "DELETE",
                });

                if (response.ok) {
                    console.log(`Deck ${deckId} deleted successfully.`);
                    const deckContainer = document.querySelector(`.deckcontainer[data-deckid="${deckId}"]`);
                    if (deckContainer) {
                        deckContainer.remove();
                    }
                } else {
                    console.error(`Error deleting deck ${deckId}: ${response.status}`);
                }
            } catch (error) {
                console.error(`Error deleting deck ${deckId}:`, error);
            }
        });
    });
});
