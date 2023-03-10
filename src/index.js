import loadHome from './home.js';
import loadMenu from './menu.js';
import loadContact from './contact.js';
import './style.css';
import background from './images/background.jpg';

loadHome();

document.querySelector('ul#navBar>li:first-child')
        .addEventListener('click', loadHome);
document.querySelector('ul#navBar>li:nth-child(2)')
        .addEventListener('click', loadMenu);
document.querySelector('ul#navBar>li:last-child')
        .addEventListener('click', loadContact);
