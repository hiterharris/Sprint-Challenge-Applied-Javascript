axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        function data() {
            const articles = response.data.articles;
            const bootstrap = Cards(articles.bootstrap);
            const javascript = Cards(articles.javascript);
            const jquery = Cards(articles.jquery);
            const node = Cards(articles.node);
            const technology = Cards(articles.technology);
            entryPoint2.appendChild(bootstrap, javascript, jquery, node, technology);
        }
        data();
    })
    .catch(error => {
        console.log('Data not returned', error);
    })

const entryPoint2 = document.querySelector('.card');
const container = document.querySelector('.cards-container');

function Cards(response) {

    let articles = [];
    for (i=0; i <= response.length; i++) {
        articles.push(response[i]);
    }
    const data = articles.map(item => {
        return item;
    });

    function Javascript() {
        const card = document.createElement('div');
        card.classList.add('card');
        container.appendChild(card);
     
        const headline = document.createElement('div');
        headline.classList.add('headline');
        card.appendChild(headline);
        headline.textContent = data[0].headline;
    
        const author = document.createElement('div');
        author.classList.add('author');
        card.appendChild(author);
    
        const imgContainer = document.createElement('div');
        imgContainer.classList.add('img-container');
        author.appendChild(imgContainer);
    
        const image = document.createElement('img');
        imgContainer.appendChild(image);
        image.src = data[0].authorPhoto;
    
        const name = document.createElement('span');
        author.appendChild(name);
        name.textContent = data[0].authorName;
    }
    Javascript();

    function Bootstrap() {
        const card = document.createElement('div');
        card.classList.add('card');
        container.appendChild(card);
     
        const headline = document.createElement('div');
        headline.classList.add('headline');
        card.appendChild(headline);
        headline.textContent = data[1].headline;
    
        const author = document.createElement('div');
        author.classList.add('author');
        card.appendChild(author);
    
        const imgContainer = document.createElement('div');
        imgContainer.classList.add('img-container');
        author.appendChild(imgContainer);
    
        const image = document.createElement('img');
        imgContainer.appendChild(image);
        image.src = data[1].authorPhoto;
    
        const name = document.createElement('span');
        author.appendChild(name);
        name.textContent = data[1].authorName;
    }
    Bootstrap();

    function jQuery() {
        const card = document.createElement('div');
        card.classList.add('card');
        container.appendChild(card);
     
        const headline = document.createElement('div');
        headline.classList.add('headline');
        card.appendChild(headline);
        headline.textContent = data[2].headline;
    
        const author = document.createElement('div');
        author.classList.add('author');
        card.appendChild(author);
    
        const imgContainer = document.createElement('div');
        imgContainer.classList.add('img-container');
        author.appendChild(imgContainer);
    
        const image = document.createElement('img');
        imgContainer.appendChild(image);
        image.src = data[2].authorPhoto;
    
        const name = document.createElement('span');
        author.appendChild(name);
        name.textContent = data[2].authorName;
    }
    jQuery();

    function NodeCard() {
        const card = document.createElement('div');
        card.classList.add('card');
        container.appendChild(card);
     
        const headline = document.createElement('div');
        headline.classList.add('headline');
        card.appendChild(headline);
        headline.textContent = data[0].headline;
    
        const author = document.createElement('div');
        author.classList.add('author');
        card.appendChild(author);
    
        const imgContainer = document.createElement('div');
        imgContainer.classList.add('img-container');
        author.appendChild(imgContainer);
    
        const image = document.createElement('img');
        imgContainer.appendChild(image);
        image.src = data[0].authorPhoto;
    
        const name = document.createElement('span');
        author.appendChild(name);
        name.textContent = data[0].authorName;
    }
    NodeCard();

    function Technology() {
        const card = document.createElement('div');
        card.classList.add('card');
        container.appendChild(card);
     
        const headline = document.createElement('div');
        headline.classList.add('headline');
        card.appendChild(headline);
        headline.textContent = data[0].headline;
    
        const author = document.createElement('div');
        author.classList.add('author');
        card.appendChild(author);
    
        const imgContainer = document.createElement('div');
        imgContainer.classList.add('img-container');
        author.appendChild(imgContainer);
    
        const image = document.createElement('img');
        imgContainer.appendChild(image);
        image.src = data[0].authorPhoto;
    
        const name = document.createElement('span');
        author.appendChild(name);
        name.textContent = data[0].authorName;
    }
    Technology();
}
