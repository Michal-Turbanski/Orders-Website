const nameInput = document.querySelector('input.nameInput') as HTMLInputElement;
const priceInput = document.querySelector('input.priceInput') as HTMLInputElement;
const quantityInput = document.querySelector('input.quantityInput') as HTMLInputElement;
const submitButton = document.querySelector('button.submit') as HTMLButtonElement;

submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    const nameValue: string = nameInput.value;
    const priceValue: string = priceInput.value;
    const quantityValue: string = quantityInput.value;

    if (nameValue && priceValue && quantityValue) {

        // @ts-ignore
        axios.post('/api/orders', {
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

export { };