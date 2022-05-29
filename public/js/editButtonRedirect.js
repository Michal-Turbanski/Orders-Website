"use strict";
const editButtons = document.querySelectorAll('button.editButton');
editButtons.forEach((editButton) => {
    editButton.addEventListener('click', () => {
        window.location.href = `/edit/${editButton.value}`;
    });
});
