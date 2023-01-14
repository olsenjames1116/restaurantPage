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

function personFactory(id, headerText, titleText, phoneText, emailText) {
    const personName = elementFactory('h3', null, headerText);
    const personTitle = elementFactory('p', null, titleText);
    const personPhone = elementFactory('p', null, phoneText);
    const personEmail = elementFactory('p', null, emailText);

    const person = elementFactory('div', id, personName, personTitle, personPhone, personEmail);
    return person;
}

function clearMainContent() {
    const mainContent = document.querySelector('div#mainContent')
    mainContent.innerHTML = '';

    return mainContent;
}

function loadPeople() {
    const peopleHeader = elementFactory('h2', null, 'Contact Us');
    const frank = personFactory('frank', 'Frank', 'Co-Owner', '999-999-9990', 'frank@paddyspub.com');
    const dennis = personFactory('dennis', 'Dennis', 'Co-Owner', '999-999-9991', 'dennis@paddyspub.com');
    const mac = personFactory('mac', 'Mac', 'Co-Owner/Bouncer', '999-999-9992', 'mac@paddyspub.com');
    const charlie = personFactory('charlie', 'Charlie', 'Custodian', '999-999-9993', 'charlie@paddyspub.com');
    const dee = personFactory('dee', 'Dee', 'Bartender', '999-999-9994', 'dee@paddyspub.com');

    const people = elementFactory('div', 'people', peopleHeader, frank, dennis, mac, charlie, dee);
    return people;
}

function loadMainContent(mainContent, people) {
    mainContent.append(people);
}

export default function loadContact() {
    const mainContent = clearMainContent();

    const people = loadPeople();

    loadMainContent(mainContent, people);
}