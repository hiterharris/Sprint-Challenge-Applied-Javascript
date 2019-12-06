axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        const articles = response.data.articles;
        const javascript = articles.javascript;
        const bootstrap = articles.bootstrap;
        const technology = articles.technology;
        const jquery = articles.jquery;
        const node = articles.node;

        javascript.forEach(element => {
            document.querySelector('.cards-container').appendChild(Cards(element))
        });
        bootstrap.forEach(element => {
            document.querySelector('.cards-container').appendChild(Cards(element))
        });
        technology.forEach(element => {
            document.querySelector('.cards-container').appendChild(Cards(element))
        });
        jquery.forEach(element => {
            document.querySelector('.cards-container').appendChild(Cards(element))
        });
        node.forEach(element => {
            document.querySelector('.cards-container').appendChild(Cards(element))
        })
    })
    .catch(error => {
        console.log(error);
    })

function Cards(data) {
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    const name = document.createElement('span');

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(img);
    author.appendChild(name);

    headline.textContent = data.headline;
    img.src = data.authorPhoto;
    name.textContent = `By ${data.authorName}`;

    return card;
}
