export default function loadHome() {
    const header = document.createElement('div');
    header.setAttribute('id', 'header');

    const h1 = document.createElement('h1');
    header.appendChild(h1);

    const mainContent = document.createElement('div');
    mainContent.setAttribute('id', 'mainContent');

    const quote = document.createElement('div');
    quote.setAttribute('id', 'quote');
    const quoteMain = document.createElement('p');
    const quotePerson = document.createElement('p');
    quote.append(quoteMain, quotePerson);

    const hours = document.createElement('div');
    hours.setAttribute('id', 'hours');
    const hoursHeader = document.createElement('h2');
    const hoursContent = document.createElement('p');
    hours.append(hoursHeader, hoursContent);

    const location = document.createElement('div');
    location.setAttribute('id', 'location');
    const locationHeader = document.createElement('h2');
    const locationContent = document.createElement('p');
    location.append(locationHeader, locationContent);
    
    mainContent.append(quote, hours, location);

    const footer = document.createElement('div');
    footer.setAttribute('id', 'footer');
    const footerAuthor = document.createElement('p');
    footer.appendChild(footerAuthor);

    const content = document.querySelector('div#content');
    content.append(header, mainContent, footer);
}
