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
    filterLength(author,body)
}

function filterLength(author,body) {
    const lengText = body.split(' ').length;
    console.log(lengText);
    if (lengText > 6 && lengText < 30) {
       quotesRender(author, body) 
    } else {
        return quotesData()
    }
}

function quotesRender(author, body) {
    ref.quotesDiv.innerHTML = quotesTemplate({ author, body });  
}


ref.serchQuery.addEventListener('change', quotesData);