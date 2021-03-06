"use strict";
const deleteButtons = document.querySelectorAll('button.deleteButton');
deleteButtons.forEach((deleteButton) => {
    deleteButton.addEventListener('click', () => {
        // @ts-ignore
        axios.delete(`/api/orders/${deleteButton.value}`)
            .then(function (response) {
            console.log(response);
            window.location.href = "/";
        })
            .catch(function (error) {
            console.log(error);
        });
    });
});
