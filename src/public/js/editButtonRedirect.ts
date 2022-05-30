const editButtons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('button.editButton');

editButtons.forEach((editButton) => {
    editButton.addEventListener('click', () => {
        window.location.href = `/edit/${editButton.value}`;
    })
})