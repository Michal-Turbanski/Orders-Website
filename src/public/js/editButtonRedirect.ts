const editButtons = document.querySelectorAll('button.editButton');

editButtons.forEach((editButton) => {
    editButton.addEventListener('click', () => {
        //@ts-ignore
        window.location.href = `/edit/${editButton.value}`;
    })
})