import dataTemplates from '../templates/data.hbs'
const refs = {
 input : document.querySelector('.input_nav'),
 listTime : document.querySelector('.date_list'),
 date : new Date(),
 options : {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
}
}

function onTime(e) {
    e.preventDefault();
    const inputValue = e.target.value
    const mass = refs.date.toLocaleString('EN-en', refs.options).split(',');  
  refs.listTime.innerHTML =
     `
        <li class="date_list_item">
          <ul class="full_date_list">
            <li>
              <p class="date_item_text">${mass[1]}th</p>
            </li>
          </ul>
        </li>
        <li class="date_list_item">
          <ul class="month_time_list">
            <li class="month_time_item">
              <p class="month_text">${mass[0]}</p>
            </li>
            <li>
              <p class="time_text">${mass[2]}</p>
            </li>
          </ul>
        </li>
     `
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=metric&appid=9f82154cc61ca06904eb64ae2c103336`)
        .then(response => response.json())
        .then(timeSun)  
}


function timeSun({ sys: { sunrise }, sys: { sunset }, timezone }) {
  function pad(value){
  return String(value).padStart(2, '0');
  }
  const utc = timezone;
  const hours = pad(Math.floor(((sunrise + utc) % (60 * 60 * 24)) / (60 * 60)));
  const mins = pad(Math.floor(((sunrise + utc) % (60 * 60)) / (60)));
  const hour = pad(Math.floor(((sunset + utc) % (60 * 60 * 24)) / (60 * 60)));
  const min = pad(Math.floor(((sunset + utc) % (60 * 60)) / (60)));
  renderSun(hours,mins,hour,min)
}

function renderSun(sunrise,newSunrise,sunset,newSunset) { 
  refs.listTime.insertAdjacentHTML('beforeend', dataTemplates({ sunrise,newSunrise, sunset,newSunset }))
}

refs.input.addEventListener('change', onTime);
