
function test() {
    let content = document.getElementById('content');
    let aboutPage = document.createElement('div');
    
    const headerContainer = document.createElement('div')
    headerContainer.id = 'headerContainer';
    aboutPage.appendChild(headerContainer);

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
    navButtonContainer.appendChild(homeButton);

    const menuButton = document.createElement('button');
    menuButton.className = 'navButton';
    menuButton.innerHTML = 'Menu';
    navButtonContainer.appendChild(menuButton);

    const contactButton = document.createElement('button');
    contactButton.className = 'navButton';
    contactButton.innerHTML = 'Contact Us';
    navButtonContainer.appendChild(contactButton);
    
    const aboutSection = document.createElement('p');
    aboutSection.id = 'aboutSection';
    aboutSection.innerHTML = 'For 20 weeks this small family owned business has been selling' +
        'buns, rolls, and those large loafs we know and love. Our owner, a member of the small family of one,' +
        'had a supermarket in the suburb he grew up in and he has 20 years experience watching the bakers' +
        'inside the bakery section bake their bread! This is where our bread comes from to this day!' +
        'Come on in!';
    aboutPage.appendChild(aboutSection);


    console.log(content);

    content.innerHTML = '';
    aboutPage.classList.add('tabContent');
    content.appendChild(aboutPage);
};



export { test }