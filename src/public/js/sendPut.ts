const confirmEditButton = document.querySelector('button.confirmEditButton') as HTMLButtonElement;
const nameInput = document.querySelector('input.nameInput') as HTMLInputElement;
const priceInput = document.querySelector('input.priceInput') as HTMLInputElement;
const quantityInput = document.querySelector('input.quantityInput') as HTMLInputElement;

confirmEditButton.addEventListener('click', (e) => {
    e.preventDefault();

    const nameValue: string = nameInput.value;
    const priceValue: string = priceInput.value;
    const quantityValue: string = quantityInput.value;

    if (nameValue && priceValue && quantityValue) {

        //@ts-ignore
        axios.put(`/api/orders/${confirmEditButton.value}`, {
            name: nameValue,
            price: priceValue,
            quantity: quantityValue
        })
            .then(function (response: Response) {
                console.log(response);
                window.location.href = "/";
            })
            .catch(function (error: Error) {
                console.log(error);
            });
    } else {
        alert('You have to give all three values')
    }
})