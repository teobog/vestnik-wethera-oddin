import timeList from '../templates/time.hbs';
const input = document.querySelector('.input_nav');
const listTime = document.querySelector('.date_list');
const date = new Date();


// console.log(date);
const options = {
    weekday: 'short',
    day: 'numeric',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
};

function onTime(e) {
    e.preventDefault();
    const inputValue = e.target.value;
    console.log(inputValue);

    const localeUs = date.toLocaleString('EN-en', options);
    const mass = localeUs.split(',');
    
listTime.innerHTML = `
        <li>
        <p>${mass[1]}</p>
        </li>
        <li>
        <p>${mass[0]}</p>
        </li>
        <li>
          <p>${mass[2]}</p>
        </li>
        
     `
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=metric&appid=9f82154cc61ca06904eb64ae2c103336`)
        .then(response => response.json())
        .then(render)
    
}
function render({ sys }) {
    
    const sunrise = sys.sunrise

    console.log(sunrise);
    const hours = Math.floor((sunrise % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    console.log(hours);
    const mins = Math.floor((sunrise % (1000 * 60 * 60)) / (1000 * 60))
    console.log(mins);
    

    const sunset = sys.sunset
    console.log(sunset);
    const hour = Math.floor((sunset % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    console.log(hour);
    const min = Math.floor((sunset % (1000 * 60 * 60)) / (1000 * 60))
    console.log(min);


    listTime.insertAdjacentHTML('beforeend',
        `<li>
    <svg class="sunrise_icon">
        <use href="./images/symbol-defs.svg#icon-sunrise"></use>
    </svg>
    <p>${hours}:${mins}</p>
</li>
<li>
    <svg class="sunset_icon">
        <use href="./images/symbol-defs.svg#icon-sunset"></use>
    </svg>
    <p>${hour}:${min}</p>
</li>`)
       
}

input.addEventListener('change', onTime);
