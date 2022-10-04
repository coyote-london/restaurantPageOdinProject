import { renderAboutPage } from "./aboutPage.js";
import { renderMenuPage } from './menuPage.js';

function renderContactPage() {
    const content = document.getElementById('content');
    const contactPage = document.createElement('div');
    
    const headerContainer = document.createElement('div')
    headerContainer.id = 'headerContainer';
    contactPage.appendChild(headerContainer);

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

    const contactSection = document.createElement('div');
    contactSection.id = 'contactSection';
    contactPage.appendChild(contactSection);

    const phoneNumber = document.createElement('h3');
    phoneNumber.className = 'restaurantContact';
    phoneNumber.innerHTML = 'Phone: (777) 777-7777 (If you get a lawyer hang up)';
    contactSection.appendChild(phoneNumber);

    const email = document.createElement('h3');
    email.className = 'restaurantContact';
    email.innerHTML = 'Email: breadbreadbreab@gmail.com (breadbreadbread was taken)';
    contactSection.appendChild(email);

    const socialMedia = document.createElement('h3');
    socialMedia.className = 'restaurantContact';
    socialMedia.innerHTML = ' Social Media: myspace.com (I don\'t remember the exact url)';
    contactSection.appendChild(socialMedia);

    contactPage.className = 'tabContent';
    content.appendChild(contactPage);
}

export { renderContactPage }