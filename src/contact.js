export default function loadContact() {
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
    h1.textContent = 'Contact Us';
    header.appendChild(h1);

    const mainContent = document.createElement('div');
    mainContent.setAttribute('id', 'mainContent');

    const frank = document.createElement('div');
    frank.setAttribute('id', 'frank');
    const frankName = document.createElement('h3');
    frankName.textContent = 'Frank';
    const frankTitle = document.createElement('p');
    frankTitle.textContent = 'Co-Owner';
    const frankNumber = document.createElement('p');
    frankNumber.textContent = '999-999-9990';
    const frankEmail = document.createElement('p');
    frankEmail.textContent = 'frank@paddyspub.com';
    frank.append(frankName, frankTitle, frankNumber, frankEmail);

    const dennis = document.createElement('div');
    dennis.setAttribute('id', 'dennis');
    const dennisName = document.createElement('h3');
    dennisName.textContent = 'Dennis';
    const dennisTitle = document.createElement('p');
    dennisTitle.textContent = 'Co-Owner';
    const dennisNumber = document.createElement('p');
    dennisNumber.textContent = '999-999-9991';
    const dennisEmail = document.createElement('p');
    dennisEmail.textContent = 'dennis@paddyspub.com';
    dennis.append(dennisName, dennisTitle, dennisNumber, dennisEmail);

    const mac = document.createElement('div');
    mac.setAttribute('id', 'mac');
    const macName = document.createElement('h3');
    macName.textContent = 'Mac';
    const macTitle = document.createElement('p');
    macTitle.textContent = 'Co-Owner/Bouncer';
    const macNumber = document.createElement('p');
    frankNumber.textContent = '999-999-9992';
    const macEmail = document.createElement('p');
    macEmail.textContent = 'mac@paddyspub.com';
    mac.append(macName, macTitle, macNumber, macEmail);

    const charlie = document.createElement('div');
    charlie.setAttribute('id', 'charlie');
    const charlieName = document.createElement('h3');
    charlieName.textContent = 'Charlie';
    const charlieTitle = document.createElement('p');
    charlieTitle.textContent = 'Custodian';
    const charlieNumber = document.createElement('p');
    charlieNumber.textContent = '999-999-9993';
    const charlieEmail = document.createElement('p');
    charlieEmail.textContent = 'charlie@paddyspub.com';
    charlie.append(charlieName, charlieTitle, charlieNumber, charlieEmail);

    const dee = document.createElement('div');
    dee.setAttribute('id', 'dee');
    const deeName = document.createElement('h3');
    deeName.textContent = 'Dee';
    const deeTitle = document.createElement('p');
    deeTitle.textContent = 'Bartender';
    const deeNumber = document.createElement('p');
    deeNumber.textContent = '999-999-9994';
    const deeEmail = document.createElement('p');
    deeEmail.textContent = 'dee@paddyspub.com';
    dee.append(deeName, deeTitle, deeNumber, deeEmail);

    mainContent.append(frank, dennis, mac, charlie, dee);

    const footer = document.createElement('div');
    footer.setAttribute('id', 'footer');
    const footerAuthor = document.createElement('p');
    footerAuthor.innerHTML = 'Built and designed by <a href="https://github.com/olsenjames1116">olsenjames1116</a>';
    footer.appendChild(footerAuthor);

    content.append(navBar, header, mainContent, footer);
}