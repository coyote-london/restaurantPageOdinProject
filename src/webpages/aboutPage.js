
function test() {
    let content = window.document.getElementById('content');
    let aboutPage = window.document.createElement('div');
    console.log(content);
    content.innerHTML = '';
    aboutPage.classList.add('tabContent');
    aboutPage.innerHTML = '<div id="headerContainer" class="container"> <h1 id="restaurantName" class="heading">Oops All Bread Hut</h1> <h2 id="restaurantSlogan" class="heading">It\'s all we can afford!</h2> <div id="navButtonContainer" class="container"> <button id="buttonHome" class="navButton">Home</button><button id="buttonMenu" class="navButton">Menu</button><button id="buttonContact" class="navButton">Contact Us</button></div></div><p id="aboutSection">For 20 weeks this small family owned business has been selling buns, rolls, and those large loafs we know and love. Our owner, a member of the small family of one, had a supermarket in the suburb he grew up in and he has 20 years experience watching the bakers inside the bakery section bake their bread! This is where our bread comes from to this day! Come on in!</p>';
    content.appendChild(aboutPage)
};



export { test }