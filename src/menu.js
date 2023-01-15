const elementFactory = (selector, id, ...children) => {
    const element = document.createElement(selector);

    element.setAttribute('id', id);

    children.forEach(child => {
        if(typeof child === 'string'){
            element.textContent = child;
        } else{
            element.appendChild(child);
        }
    })

    return element;
};

const imageFactory = (src) => {
    const image = document.createElement('img');
    
    image.setAttribute('src', src);

    return image;
}

function menuFactory(id, headerText, contentText, src) {
    const itemHeader = elementFactory('h3', null,headerText);
    const itemContent = elementFactory('p', null, contentText);
    const image = imageFactory(src);

    const item = elementFactory('div', id, itemHeader, itemContent, image);
    return item;
}


function clearMainContent() {
    const mainContent = document.querySelector('div#mainContent');
    mainContent.innerHTML = '';
    return mainContent;
}

function loadDrinks() {
    const drinksHeader = elementFactory('h2', null, 'Drinks');
    const fightMilk = menuFactory('fightMilk', 'Fight Milk', 'An alcoholic, dairy-based protein drink for bodyguards by bodyguards.');
    const riotJuice = menuFactory('riotJuice', 'Riot Juice', 'Made to be consumed in public and at a potentially violent sporting event.');
    const beer = menuFactory('beer', 'Beer', 'The gang\'s drink of choice.');

    const drinks = elementFactory('div', 'drinks', drinksHeader, fightMilk, riotJuice, beer);
    return drinks;
}

function loadFood() {
    const foodHeader = elementFactory('h2', null, 'Food');
    const rumHam = menuFactory('rumHam', 'Rum Ham', 'Ham, soaked in rum. It\'s loaded with booze.');
    const grilledCharlie = menuFactory('grilledCharlie', 'Grilled Charlie', 'Peanut butter outside, chocolate inside, butter inside, cheese outside.');
    const milkSteak = menuFactory('milkSteak', 'Milk Steak', 'Ribeye, boiled in milk and topped with jelly beans.');
    const macNCheese = menuFactory('macNCheese', 'Mac\'s Famous Mac N Cheese', 'Mac\'s specialty dish. Served with mystery meat.');
    const grilledFrank = menuFactory('grilledFrank', 'Grilled Frank', 'Sausage, spam and bacon wrapped in a jelly pancake and cooked with a stick of butter.');

    const food = elementFactory('div', 'food', foodHeader, rumHam, grilledCharlie, milkSteak, macNCheese, grilledFrank);
    return food;
}

function loadMainContent(mainContent, drinks, food) {
    mainContent.append(drinks, food);
}

export default function loadMenu() {
    const mainContent = clearMainContent();

    const drinks = loadDrinks();
    const food = loadFood();

    loadMainContent(mainContent, drinks, food);
}