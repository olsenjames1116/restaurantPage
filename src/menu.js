export default function loadMenu() {
    const content = document.querySelector('div#content');
    content.innerHTML = '';

    const navBar = document.createElement('ul');
    const homeNav = document.createElement('li');
    homeNav.textContent = 'Home';
    const menuNav = document.createElement('li');
    menuNav.textContent = 'Menu';
    const contactNav = document.createElement('li');
    contactNav.textContent = 'Contact';
    navBar.append(homeNav, menuNav, contactNav);

    const header = document.createElement('div');
    header.setAttribute('id', 'header');
    const h1 = document.createElement('h1');
    h1.textContent = 'Menu';
    header.appendChild(h1);

    const mainContent = document.createElement('div');
    mainContent.setAttribute('id', 'header');

    const drinks = document.createElement('div');
    drinks.setAttribute('id', 'drinks');
    const drinksHeader = document.createElement('h2');

    const fightMilk = document.createElement('div');
    fightMilk.setAttribute('id', 'fightMilk');
    const fightMilkHeader = document.createElement('h3');
    const fightMilkContent = document.createElement('p');
    
    const paint = document.createElement('div');
    paint.setAttribute('id', 'paint');
    const paintHeader = document.createElement('h3');
    const paintContent = document.createElement('p');

    const beer = document.createElement('div');
    paint.setAttribute('id', 'beer');
    const beerHeader = document.createElement('h3');
    const beerContent = document.createElement('p');




    content.append(navBar, header);
}