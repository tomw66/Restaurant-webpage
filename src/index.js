import {homePage} from './home';
import {menuPage} from './menu';
import {contactPage} from './contact';
import './style.css';

const headerGeneration = (() => {
    const content = document.querySelector('#content');
    const header = document.querySelector('#header');
    const headerButtons = document.createElement('div');
    headerButtons.classList.add('headerButtons');
    header.appendChild(headerButtons);

    const homeButton = document.createElement('button');
    homeButton.textContent = 'Home';
    homeButton.id = 'homeButton';
    headerButtons.appendChild(homeButton);
    homeButton.addEventListener('click', () => {
        while(content.firstChild){
            content.removeChild(content.firstChild);
        }
        homePage();
    })

    const menuButton = document.createElement('button');
    menuButton.textContent = 'Menu';
    menuButton.id = 'menuButton';
    headerButtons.appendChild(menuButton);
    menuButton.addEventListener('click', () => {
        while(content.firstChild){
            content.removeChild(content.firstChild);
        }
        menuPage();
    })

    const contactButton = document.createElement('button');
    contactButton.textContent = 'Contact';
    contactButton.id = 'contactButton';
    headerButtons.appendChild(contactButton);
    contactButton.addEventListener('click', () => {
        while(content.firstChild){
            content.removeChild(content.firstChild);
        }
        contactPage();
    })
})();
homePage();