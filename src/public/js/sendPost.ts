const nameInputPost = document.querySelector('input.nameInput') as HTMLInputElement;
const priceInputPost = document.querySelector('input.priceInput') as HTMLInputElement;
const quantityInputPost = document.querySelector('input.quantityInput') as HTMLInputElement;
const submitButton = document.querySelector('button.submit') as HTMLButtonElement;

submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    const nameValue: string = nameInputPost.value;
    const priceValue: string = priceInputPost.value;
    const quantityValue: string = quantityInputPost.value;

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