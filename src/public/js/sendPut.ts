const confirmEditButton = document.querySelector('button.confirmEditButton') as HTMLButtonElement;
const nameInputPut = document.querySelector('input.nameInput') as HTMLInputElement;
const priceInputPut = document.querySelector('input.priceInput') as HTMLInputElement;
const quantityInputPut = document.querySelector('input.quantityInput') as HTMLInputElement;

confirmEditButton.addEventListener('click', (e) => {
    e.preventDefault();

    const nameValue: string = nameInputPut.value;
    const priceValue: string = priceInputPut.value;
    const quantityValue: string = quantityInputPut.value;

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