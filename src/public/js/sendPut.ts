const confirmEditButton: HTMLButtonElement = document.querySelector('button.confirmEditButton');
const nameInput: HTMLInputElement = document.querySelector('input.nameInput');
const priceInput: HTMLInputElement = document.querySelector('input.priceInput');
const quantityInput: HTMLInputElement = document.querySelector('input.quantityInput');

confirmEditButton.addEventListener('click', (e) => {
    e.preventDefault();

    const nameValue: string = nameInput.value;
    const priceValue: string = priceInput.value;
    const quantityValue: string = quantityInput.value;

    if (nameValue && priceValue && quantityValue) {

        // eslint-disable-next-line no-undef
        axios.put(`/api/orders/${confirmEditButton.value}`, {
            name: nameValue,
            price: priceValue,
            quantity: quantityValue
        })
            .then(function (response) {
                console.log(response);
                window.location.href = "/";
            })
            .catch(function (error) {
                console.log(error);
            });
    } else {
        alert('You have to give all three values')
    }
})