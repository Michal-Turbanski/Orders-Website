"use strict";
const nameInputPost = document.querySelector('input.nameInput');
const priceInputPost = document.querySelector('input.priceInput');
const quantityInputPost = document.querySelector('input.quantityInput');
const submitButton = document.querySelector('button.submit');
submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    const nameValue = nameInputPost.value;
    const priceValue = priceInputPost.value;
    const quantityValue = quantityInputPost.value;
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
