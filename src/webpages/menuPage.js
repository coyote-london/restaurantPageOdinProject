import { renderAboutPage } from './aboutPage.js';
import { renderContactPage } from './contactPage.js';
import mixedBreadBasketSrc from '../images/MixedBreadBasketMohamedHassounaUnsplash.jpg';
import seededBreadBasketSrc from '../images/SeededBreadBasketSlashioUnsplash.jpg';
import croissantSrc from '../images/CroissantMaeMuUnsplash.jpg';
import halfBaguetteSrc from '../images/HalfBaguetteBasPeperzakUnsplash.jpg';
import creamPuffSrc from '../images/CreamPuffDaniUnsplash.jpg';


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

    const menuSection = document.createElement('div');
        menuSection.id = 'menuSection';
        menuPage.appendChild(menuSection);

    
    const randomBread = document.createElement('div');
        randomBread.className = 'menuItemContainer';
        menuSection.appendChild(randomBread);
    const randomBreadImg = document.createElement('img');
        randomBreadImg.src = mixedBreadBasketSrc;
        randomBreadImg.className = 'menuItemImg';
        randomBread.appendChild(randomBreadImg);
    const randomBreadHeading = document.createElement('h3');
        randomBreadHeading.className = 'menuItem';
        randomBreadHeading.innerHTML = 'Random Bread'
        randomBread.appendChild(randomBreadHeading);

    const randomBreadWithSeeds = document.createElement('div');
        randomBreadWithSeeds.className = 'menuItemContainer';
        menuSection.appendChild(randomBreadWithSeeds);
    const randomBreadWithSeedsImg = document.createElement('img');
        randomBreadWithSeedsImg.src = seededBreadBasketSrc;
        randomBreadWithSeedsImg.className = 'menuItemImg';
        randomBreadWithSeeds.appendChild(randomBreadWithSeedsImg);
    const randomBreadWithSeedsHeading = document.createElement('h3');
        randomBreadWithSeedsHeading.className = 'menuItem';
        randomBreadWithSeedsHeading.innerHTML = 'Random Bread With Seeds'
        randomBreadWithSeeds.appendChild(randomBreadWithSeedsHeading);

    const staleCroissant = document.createElement('div');
        staleCroissant.className = 'menuItemContainer';
        menuSection.appendChild(staleCroissant);
    const staleCroissantImg = document.createElement('img');
        staleCroissantImg.src = croissantSrc;
        staleCroissantImg.className = 'menuItemImg';
        staleCroissant.appendChild(staleCroissantImg);
   const staleCroissantHeading = document.createElement('h3');
        staleCroissantHeading.className = 'menuItem';
        staleCroissantHeading.innerHTML = 'Stale Croissant'
        staleCroissant.appendChild(staleCroissantHeading);

    const halfBaguette = document.createElement('div');
        halfBaguette.className = 'menuItemContainer';
        menuSection.appendChild(halfBaguette);
    const halfBaguetteImg = document.createElement('img');
        halfBaguetteImg.src = halfBaguetteSrc;
        halfBaguetteImg.className = 'menuItemImg';
        halfBaguette.appendChild(halfBaguetteImg);
    const halfBaguetteHeading = document.createElement('h3');
        halfBaguetteHeading.className = 'menuItem';
        halfBaguetteHeading.innerHTML = 'Half of a Baguette'
        halfBaguette.appendChild(halfBaguetteHeading);
    
    const creamPuff = document.createElement('div');
        creamPuff.className = 'menuItemContainer';
        menuSection.appendChild(creamPuff);
    const creamPuffImg = document.createElement('img');
        creamPuffImg.src = creamPuffSrc;
        creamPuffImg.className = 'menuItemImg';
        creamPuff.appendChild(creamPuffImg);
    const creamPuffHeading = document.createElement('h3');
        creamPuffHeading.className = 'menuItem';
        creamPuffHeading.innerHTML = 'Cream Puff';
        creamPuff.appendChild(creamPuffHeading);
    menuPage.className = 'tabContent';
    content.appendChild(menuPage);
}

export { renderMenuPage };