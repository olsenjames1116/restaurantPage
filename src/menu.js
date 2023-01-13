export default function loadMenu() {
    const content = document.querySelector('div#content');
    content.innerHTML = '';

    const navBar = document.createElement('ul');
    navBar.setAttribute('id', 'navBar');
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
    mainContent.setAttribute('id', 'mainContent');

    const drinks = document.createElement('div');
    drinks.setAttribute('id', 'drinks');
    const drinksHeader = document.createElement('h2');
    drinksHeader.textContent = 'Drinks';

    const fightMilk = document.createElement('div');
    fightMilk.setAttribute('id', 'fightMilk');
    const fightMilkHeader = document.createElement('h3');
    fightMilkHeader.textContent = 'Fight Milk';
    const fightMilkContent = document.createElement('p');
    fightMilkContent.textContent = 'An alcoholic, dairy-based protein drink for bodyguards by bodyguards.';
    fightMilk.append(fightMilkHeader, fightMilkContent);
    
    const riotJuice = document.createElement('div');
    riotJuice.setAttribute('id', 'riotJuice');
    const riotJuiceHeader = document.createElement('h3');
    riotJuiceHeader.textContent = 'Riot Juice';
    const riotJuiceContent = document.createElement('p');
    riotJuiceContent.textContent = 'Made to be consumed in public and at a potentially violent sporting event.';
    riotJuice.append(riotJuiceHeader, riotJuiceContent);

    const beer = document.createElement('div');
    beer.setAttribute('id', 'beer');
    const beerHeader = document.createElement('h3');
    beerHeader.textContent = 'Beer';
    const beerContent = document.createElement('p');
    beerContent.textContent = 'The gang\'s drink of choice.';
    beer.append(beerHeader, beerContent);

    drinks.append(drinksHeader, fightMilk, riotJuice, beer);

    const food = document.createElement('div');
    food.setAttribute('id', 'food');
    const foodHeader = document.createElement('h2');
    foodHeader.textContent = 'Food';

    const rumHam = document.createElement('div');
    rumHam.setAttribute('id', 'rumHam');
    const rumHamHeader = document.createElement('h3');
    rumHamHeader.textContent = 'Rum Ham';
    const rumHamContent = document.createElement('p');
    rumHamContent.textContent = 'Ham, soaked in rum. It\'s loaded with booze.';
    rumHam.append(rumHamHeader, rumHamContent);

    const grilledCharlie = document.createElement('div');
    grilledCharlie.setAttribute('id', 'grilledCharlie');
    const grilledCharlieHeader = document.createElement('h3');
    grilledCharlieHeader.textContent = 'Grilled Charlie';
    const grilledCharlieContent = document.createElement('p');
    grilledCharlieContent.textContent = 'Peanut butter outside, chocolate inside, butter inside, cheese outside.';
    grilledCharlie.append(grilledCharlieHeader, grilledCharlieContent);

    const milkSteak = document.createElement('div');
    milkSteak.setAttribute('id', 'milkSteak');
    const milkSteakHeader = document.createElement('h3');
    milkSteakHeader.textContent = 'Milk Steak';
    const milkSteakContent = document.createElement('p');
    milkSteakContent.textContent = 'Ribeye, boiled in milk and topped with jelly beans.';
    milkSteak.append(milkSteakHeader, milkSteakContent);

    const macNCheese = document.createElement('div');
    macNCheese.setAttribute('id', 'macNCheese');
    const macNCheeseHeader = document.createElement('h3');
    macNCheeseHeader.textContent = 'Mac\'s Famous Mac N Cheese';
    const macNCheeseContent = document.createElement('p');
    macNCheeseContent.textContent = 'Mac\'s specialty dish.';
    macNCheese.append(macNCheeseHeader, macNCheeseContent);

    const grilledFrank = document.createElement('div');
    grilledFrank.setAttribute('id', 'grilledFrank');
    const grilledFrankHeader = document.createElement('h3');
    grilledFrankHeader.textContent = 'Grilled Frank';
    const grilledFrankContent = document.createElement('p');
    grilledFrankContent.textContent = 'Sausage, spam and bacon wrapped in a jelly pancake and cooked with a stick of butter.';
    grilledFrank.append(grilledFrankHeader, grilledFrankContent);

    food.append(foodHeader, rumHam, grilledCharlie, milkSteak, macNCheese, grilledFrank);

    mainContent.append(drinks, food);

    const footer = document.createElement('div');
    footer.setAttribute('id', 'footer');
    const footerAuthor = document.createElement('p');
    footerAuthor.innerHTML = 'Built and designed by <a href="https://github.com/olsenjames1116">olsenjames1116</a>';
    footer.appendChild(footerAuthor);

    content.append(navBar, header, mainContent, footer);
}