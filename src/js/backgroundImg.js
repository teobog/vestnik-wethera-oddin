
const body = document.querySelector('body');
const input = document.querySelector('.input_nav');
function onImg(e) {
        const inputValue = e.target.value
     fetch(`https://api.unsplash.com/search/photos?query=${inputValue}&client_id=TniSvfzin4fhMiJQyIjy73jZHeB3jtKGpAte1fFNh5U`)
        .then(response => response.json())
    .then(doSomeFetch) 
}
   
        
function doSomeFetch({ results }) {
    const obj = []
    results.forEach(({ urls:{full} }) => {
    obj.push(full);
    })
    const img = obj[1]
    body.style.backgroundImage = "url('" + img + "')"
}

input.addEventListener('change', onImg);