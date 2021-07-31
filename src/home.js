import Icon from './restaurant.jpeg';

function homePage() {
    const content = document.querySelector('#content');
    const container = document.createElement('div');
    container.classList.add('container');
    content.appendChild(container);

    const title = document.createElement('h1');
    title.textContent = 'Tom\'s Diner';
    container.appendChild(title);

    const image = new Image;
    image.src = Icon;
    image.alt = 'restaurant';
    container.appendChild(image);

    const text = document.createElement('p');
    text.innerHTML = '<br><br>Folks, come on down to Tom\'s Diner! An eatery for all! We\'ve got food! Drink! Chairs!<br><br>You name it, we\'ve got it - that\'s the Tom\'s Diner guarantee!'
    container.appendChild(text);}
    
export {homePage};