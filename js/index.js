const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav');
const closed = document.querySelector('.closed');


menu.addEventListener('click', (e) => {
    e.preventDefault();

    nav.style.display = 'flex';
})

closed.addEventListener('click', (e) => {
    e.preventDefault();

    nav.style.display = 'none';
})
