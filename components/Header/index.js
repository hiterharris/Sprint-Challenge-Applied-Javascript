function Header() {
    const container = document.querySelector('.header-container');

    const header = document.createElement('div');
    header.classList.add('header');
    container.appendChild(header);

    const date = document.createElement('span');
    date.classList.add('date');
    date.textContent = 'December 6, 2019';
    header.appendChild(date);

    const title = document.createElement('h1');
    header.appendChild(title);

    const temp = document.createElement('span');
    temp.classList.add('temp');
    header.appendChild(temp);
}

Header();
