//@ts-ignore
const nameInput: HTMLInputElement = document.querySelector('input.nameInput');
//@ts-ignore
const priceInput: HTMLInputElement = document.querySelector('input.priceInput');
//@ts-ignore
const quantityInput: HTMLInputElement = document.querySelector('input.quantityInput');
//@ts-ignore
const submitButton: HTMLButtonElement = document.querySelector('button.submit');

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