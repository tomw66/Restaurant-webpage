function contactPage() {
    const content = document.querySelector('#content');
    const container = document.createElement('div');

    const title = document.createElement('h1');
    title.textContent = 'Contact';
    container.appendChild(title);

    const text = document.createElement('p');
    text.innerHTML = 'Write your phone number on the window and we\'ll get back to you.'
    container.appendChild(text);
}
    
export {contactPage};