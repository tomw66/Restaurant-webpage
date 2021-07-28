function menuPage() {
    const content = document.querySelector('#content');
    const container = document.createElement('div');

    const title = document.createElement('h1');
    title.textContent = 'Menu';
    container.appendChild(title);

    const text = document.createElement('p');
    text.innerHTML = 'Only Soup.'
    container.appendChild(text);
}
    
export {menuPage};