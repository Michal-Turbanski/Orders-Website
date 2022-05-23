const nameInput = document.querySelector('input.nameInput');
const priceInput = document.querySelector('input.priceInput');
const quantityInput = document.querySelector('input.quantityInput');
const submitButton = document.querySelector('button.submit');

submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    const nameValue = nameInput.value;
    const priceValue = priceInput.value;
    const quantityValue = quantityInput.value;

    axios.post('/api/orders', {
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
})