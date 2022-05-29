//@ts-ignore
const searchButton: HTMLButtonElement = document.querySelector('button.searchButton');
//@ts-ignore
const searchInput: HTMLInputElement = document.querySelector('input.searchInput');

searchButton.addEventListener('click', (e) => {
    e.preventDefault();
    const searchValue: string = searchInput.value;
    window.location.href = `/?search=${searchValue}`;
})