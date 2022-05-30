const deleteButtons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('button.deleteButton');


deleteButtons.forEach((deleteButton) => {
    deleteButton.addEventListener('click', () => {
        // @ts-ignore
        axios.delete(`/api/orders/${deleteButton.value}`)
            .then(function (response: Response) {
                console.log(response);
                window.location.href = "/";
            })
            .catch(function (error: Error) {
                console.log(error);
            });
    })
})