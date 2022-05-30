const searchButton = document.querySelector('button.searchButton') as HTMLButtonElement;
const searchInput = document.querySelector('input.searchInput') as HTMLInputElement;

searchButton.addEventListener('click', (e) => {
    e.preventDefault();
    const searchValue: string = searchInput.value;
    window.location.href = `/?search=${searchValue}`;
})