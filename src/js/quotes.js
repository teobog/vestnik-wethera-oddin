import quotesTemplate from '../templates/quotes.hbs';

const ref = {
    serchQuery: document.querySelector('.input_nav'),
    quotesDiv : document.querySelector('.quotes')
}

function quotesData() {
    fetch(`https://favqs.com/api/qotd`)
        .then(response => response.json())
        .then(quotesCreator)
    
}
quotesData()

function quotesCreator({quote:{author,body}}) {
    quotesRender(author, body);
}

function quotesRender(author, body) {
    ref.quotesDiv.innerHTML = quotesTemplate({ author, body });
}


ref.serchQuery.addEventListener('change', quotesData);