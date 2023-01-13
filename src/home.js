export default function loadHome() {
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
    h1.textContent = `Paddy's Pub`;
    header.appendChild(h1);

    const mainContent = document.createElement('div');
    mainContent.setAttribute('id', 'mainContent');

    const quote = document.createElement('div');
    quote.setAttribute('id', 'quote');
    const quoteMain = document.createElement('p');
    quoteMain.textContent = `This place totally rocks. Me and all my friends went here on a Friday night after Kyle's mom kicked us out. What a bummer! They still served us even after they asked for an ID which we all left in our cars. I know where we're partying for prom!`;
    const quotePerson = document.createElement('p');
    quotePerson.textContent = '-Connor';
    quote.append(quoteMain, quotePerson);

    const hours = document.createElement('div');
    hours.setAttribute('id', 'hours');
    const hoursHeader = document.createElement('h2');
    hoursHeader.textContent = 'Hours';
    const hoursContent = document.createElement('p');
    hoursContent.innerHTML = 'Sunday: 10am - 2am</br>Monday: 10am - 2am</br>Tuesday: 10am - 2am</br>Wednesday: 10am - 2am</br>Thursday: 10am - 2am</br>Friday: 10am - 2am</br>Saturday: 10am - 2am';
    hours.append(hoursHeader, hoursContent);

    const location = document.createElement('div');
    location.setAttribute('id', 'location');
    const locationHeader = document.createElement('h2');
    locationHeader.textContent = 'Location';
    const locationContent = document.createElement('p');
    locationContent.textContent = '123 Jabroni Lane, Philadelphia, PA';
    location.append(locationHeader, locationContent);
    
    mainContent.append(quote, hours, location);

    const footer = document.createElement('div');
    footer.setAttribute('id', 'footer');
    const footerAuthor = document.createElement('p');
    footerAuthor.innerHTML = 'Built and designed by <a href="https://github.com/olsenjames1116">olsenjames1116</a>';
    footer.appendChild(footerAuthor);

    const content = document.querySelector('div#content');
    content.append(navBar, header, mainContent, footer);
}
