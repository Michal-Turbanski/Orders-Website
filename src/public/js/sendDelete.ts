const deleteButtons = document.querySelectorAll('button.deleteButton');


deleteButtons.forEach((deleteButton: HTMLButtonElement) => {
    deleteButton.addEventListener('click', () => {
        axios.delete(`/api/orders/${deleteButton.value}`)
            .then(function (response) {
                console.log(response);
                window.location.href = "/";
            })
            .catch(function (error) {
                console.log(error);
            });
    })
})