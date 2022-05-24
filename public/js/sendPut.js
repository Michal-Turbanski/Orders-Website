const confirmEditButton = document.querySelector('button.confirmEditButton');
const nameInput = document.querySelector('input.nameInput');
const priceInput = document.querySelector('input.priceInput');
const quantityInput = document.querySelector('input.quantityInput');

confirmEditButton.addEventListener('click', (e) => {
    e.preventDefault();

    const nameValue = nameInput.value;
    const priceValue = priceInput.value;
    const quantityValue = quantityInput.value;

    if (nameValue && priceValue && quantityValue) {

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