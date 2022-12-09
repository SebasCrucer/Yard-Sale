const navEmail = document.querySelector('.email');
const desktopMenu = document.querySelector('.desktop-menu');

navEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('hide')
}