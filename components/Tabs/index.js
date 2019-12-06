axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => {
        response.data.topics.forEach(item => {
            const topics = Tabs(item);
            entryPoint.appendChild(topics);
        })
    })
    .catch(error => {
        console.log('Data not returned', error);
    })

const entryPoint = document.querySelector('.topics');

function Tabs(response) {
    const tab = document.createElement('div');
    tab.classList.add('tab');
    tab.textContent = response;

    return tab;
}
