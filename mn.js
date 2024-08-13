let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu');


btnMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu');
    overlay.classList.add('active'); // Exibe a sobreposição
});


const closeMenu = () => {
    menu.classList.remove('abrir-menu');
    overlay.classList.remove('active'); // Oculta a sobreposição
};

menu.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);