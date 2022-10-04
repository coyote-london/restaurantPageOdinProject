import { renderAboutPage } from './aboutPage.js';
import { renderContactPage } from './contactPage.js';

function renderMenuPage() {
    const content = document.getElementById('content');
    const menuPage = document.createElement('div');
    
    const headerContainer = document.createElement('div')
    headerContainer.id = 'headerContainer';
    menuPage.appendChild(headerContainer);

    const heading1 = document.createElement('h1');
    heading1.id = 'restaurantName';
    heading1.innerHTML = 'Oops All Bread';
    headerContainer.appendChild(heading1);

    const heading2 = document.createElement('h2');
    heading2.id = 'restaurantSlogan';
    heading2.innerHTML = 'It\s all we can afford!';
    headerContainer.appendChild(heading2);

    const navButtonContainer = document.createElement('div');
    navButtonContainer.id = 'navButtonContainer';
    headerContainer.appendChild(navButtonContainer);

    const homeButton = document.createElement('button');
    homeButton.className = 'navButton';
    homeButton.innerHTML = 'Home';
    homeButton.onclick = e => {
        e.stopPropagation;
        content.innerHTML = '';
        renderAboutPage();
    }
    navButtonContainer.appendChild(homeButton);

    const menuButton = document.createElement('button');
    menuButton.className = 'navButton';
    menuButton.innerHTML = 'Menu';
    menuButton.onclick = e => {
        e.stopPropagation;
        content.innerHTML = '';
        renderMenuPage();
    }
    navButtonContainer.appendChild(menuButton);

    const contactButton = document.createElement('button');
    contactButton.className = 'navButton';
    contactButton.innerHTML = 'Contact Us';
    contactButton.onclick = e => {
        e.stopPropagation;
        content.innerHTML = '';
        renderContactPage();
    }
    navButtonContainer.appendChild(contactButton);

    content.appendChild(menuPage);
}

export { renderMenuPage };