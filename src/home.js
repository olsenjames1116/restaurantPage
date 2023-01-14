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

function clearContent(mainContent) {
    document.querySelector('div#content')
            .removeChild(mainContent);
}

function loadNavBar() {
    const homeNav = elementFactory('li', 'homeNav', 'Home');
    const menuNav = elementFactory('li', 'menuNav', 'Menu');
    const contactNav = elementFactory('li', 'contactNav', 'Contact');
    
    const navBar = elementFactory('ul', 'navBar', homeNav, menuNav, contactNav);
    return navBar;
}

function loadHeader() {
    const h1 = elementFactory('h1', null, 'Paddy\'s Pub');
    
    const header = elementFactory('div', 'header', h1);
    return header;
}

function loadQuote() {
    const quoteMain = elementFactory('p', null, 'This place totally rocks. Me and all my friends went here on a Friday night after Kyle\'s mom kicked us out. What a bummer! They still served us even after they asked for an ID which we all left in our cars. I know where we\'re partying for prom!');
    const quotePerson = elementFactory('p', null, '-Connor');
    
    const quote = elementFactory('div', 'quote', quoteMain, quotePerson);
    return quote;
}

function loadHours() {
    const hoursHeader = elementFactory('h2', null, 'Hours');
    const hoursSunday = elementFactory('li', null, 'Sunday 10am - 2am');
    const hoursMonday = elementFactory('li', null, 'Monday 10am - 2am');
    const hoursTuesday = elementFactory('li', null, 'Tuesday 10am - 2am');
    const hoursWednesday = elementFactory('li', null, 'Wednesday 10am - 2am');
    const hoursThursday = elementFactory('li', null, 'Thursday 10am - 2am');
    const hoursFriday = elementFactory('li', null, 'Friday 10am - 2am');
    const hoursSaturday = elementFactory('li', null, 'Saturday 10am - 2am');
    const hoursContent = elementFactory('ul', null, hoursSunday, hoursMonday, hoursTuesday, hoursWednesday, hoursThursday, hoursFriday, hoursSaturday);

    const hours = elementFactory('div', 'hours', hoursHeader, hoursContent);
    return hours;
}

function loadLocation() {
    const locationHeader = elementFactory('h2', null, 'Location');
    const locationContent = elementFactory('p', null, '123 Jabroni Lane, Philadelphia, PA');

    const location = elementFactory('div', 'location', locationHeader, locationContent);
    return location;
}

function loadMainContent(quote, hours, location) {
    const mainContent = elementFactory('div', 'mainContent', quote, hours, location);
    return mainContent;
}

function loadFooter() {
    const footerAuthor = document.createElement('p');
    footerAuthor.innerHTML = 'Built and designed by <a href="https://github.com/olsenjames1116">olsenjames1116</a>';
    
    const footer = elementFactory('div', 'footer', footerAuthor);
    return footer;
}

function loadContent(content, mainContent) {
    content.insertBefore(mainContent, document.querySelector('div#footer'));
}


export default function loadHome() {
    let mainContent = document.querySelector('div#mainContent');
    const content = document.querySelector('div#content');

    if(mainContent===null) {
        const header = loadHeader();
        const navBar = loadNavBar();
        const footer = loadFooter();
        content.append(header, navBar, footer);
    }
    else{
        clearContent(mainContent);
    }
    

    const quote = loadQuote();
    const hours = loadHours();
    const location = loadLocation();
    mainContent = loadMainContent(quote, hours, location);


    loadContent(content, mainContent);
}
