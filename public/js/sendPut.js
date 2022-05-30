"use strict";
const confirmEditButton = document.querySelector('button.confirmEditButton');
const nameInputPut = document.querySelector('input.nameInput');
const priceInputPut = document.querySelector('input.priceInput');
const quantityInputPut = document.querySelector('input.quantityInput');
confirmEditButton.addEventListener('click', (e) => {
    e.preventDefault();
    const nameValue = nameInputPut.value;
    const priceValue = priceInputPut.value;
    const quantityValue = quantityInputPut.value;
    if (nameValue && priceValue && quantityValue) {
        //@ts-ignore
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
    }
    else {
        alert('You have to give all three values');
    }
});
