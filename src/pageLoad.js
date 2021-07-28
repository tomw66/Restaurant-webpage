import Icon from './restaurant.jpeg';
import './style.css';

function loader() {
    const content = document.querySelector('#content');

    const title = document.createElement('h1');
    title.textContent = 'Tom\'s Diner';
    content.appendChild(title);

    const image = new Image;
    image.src = Icon;
    image.alt = 'restaurant';
    content.appendChild(image);

    const text = document.createElement('p');
    text.innerHTML = '<br><br>Folks, come on down to Tom\'s Diner! An eatery for all! We\'ve got food! Drink! Chairs!<br><br>You name it, we\'ve got it - that\'s the Tom\'s Diner guarantee!'
    content.appendChild(text);}
    
export {loader};