"use strict";
//@ts-ignore
const nameInput = document.querySelector('input.nameInput');
//@ts-ignore
const priceInput = document.querySelector('input.priceInput');
//@ts-ignore
const quantityInput = document.querySelector('input.quantityInput');
//@ts-ignore
const submitButton = document.querySelector('button.submit');
submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    const nameValue = nameInput.value;
    const priceValue = priceInput.value;
    const quantityValue = quantityInput.value;
    if (nameValue && priceValue && quantityValue) {
        // @ts-ignore
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
    }
    else {
        alert('You have to give all three values');
    }
});
