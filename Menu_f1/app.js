const btnMenu = document.querySelector('#menu');
const menuContent = document.querySelector('.menu-content');

btnMenu.addEventListener('click', () =>{
    menuContent.classList.toggle('menu-active');
})