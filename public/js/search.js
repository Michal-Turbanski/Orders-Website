"use strict";
//@ts-ignore
const searchButton = document.querySelector('button.searchButton');
//@ts-ignore
const searchInput = document.querySelector('input.searchInput');
searchButton.addEventListener('click', (e) => {
    e.preventDefault();
    const searchValue = searchInput.value;
    window.location.href = `/?search=${searchValue}`;
});
