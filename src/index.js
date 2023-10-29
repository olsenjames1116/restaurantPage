import loadHome from './home.js';
import loadMenu from './menu.js';
import loadContact from './contact.js';
import './style.css';
import background from './images/background.jpg';

loadHome();
document.querySelector('ul#navBar>li#homeNav')
        .classList.add('selected');

function removeSelectedClass() {
        document.querySelector('ul#navBar>li.selected')
        .classList.remove('selected');
}

document.querySelector('ul#navBar>li#homeNav')
        .addEventListener('click', () => {
                loadHome;
                removeSelectedClass();
                document.querySelector('ul#navBar>li#homeNav')
                        .classList.add('selected');
        });
document.querySelector('ul#navBar>li#menuNav')
        .addEventListener('click', () => {
                loadMenu;
                removeSelectedClass();
                document.querySelector('ul#navBar>li#menuNav')
                        .classList.add('selected');
        });
document.querySelector('ul#navBar>li#contactNav')
        .addEventListener('click', () => {
                loadContact;
                removeSelectedClass();
                document.querySelector('ul#navBar>li#contactNav')
                        .classList.add('selected')
        });
