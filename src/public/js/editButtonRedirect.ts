const editButtons = document.querySelectorAll('button.editButton');

editButtons.forEach((editButton: HTMLButtonElement) => {
    editButton.addEventListener('click', () => {
        window.location.href = `/edit/${editButton.value}`;
    })
})