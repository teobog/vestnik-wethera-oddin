import dataTemplates from '../templates/data.hbs';
import debounce from 'lodash.debounce';
const refs = {
 input : document.querySelector('.input_nav'),
 listTime : document.querySelector('.date_list'),
 date : new Date(),
 options : {
    weekday: 'short',
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
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=metric&appid=9f82154cc61ca06904eb64ae2c103336`)
        .then(response => response.json())
    .then(timeSun)
}


function timeSun({ sys: { sunrise }, sys: { sunset }, timezone }) {
  function pad(value){
    return String(value).padStart(2, '0');
  }
  const massUtc = refs.date.toUTCString('en-US', refs.options).split(' ');
  const secondsUtc = new Date('1970-01-01T' + massUtc[4] + 'Z').getTime() / 1000;
  const newSec = secondsUtc + timezone;
  const newHours = Math.floor(newSec / 60 / 60);
  const newMinutes = Math.floor(newSec / 60) - (newHours * 60);
  const newSeconds = newSec % 60;
  
  const formatted = [
  newHours.toString().padStart(2, '0'),
  newMinutes.toString().padStart(2, '0'),
  newSeconds.toString().padStart(2, '0')
  ].join(':');

  const mass = refs.date.toString('en-US', refs.options).split(' ');
  refs.listTime.innerHTML =
     `
        <li class="date_list_item">
          <ul class="full_date_list">
            <li>
              <p class="date_item_text">${mass[2]}th ${mass[0]}</p>
            </li>
          </ul>
        </li>
        <li class="date_list_item">
          <ul class="month_time_list">
            <li class="month_time_item">
              <p class="month_text">${mass[1]}</p>
            </li>
            <li>
              <p class="time_text">${formatted}</p>
            </li>
          </ul>
        </li>
     `

  const hours = pad(Math.floor(((sunrise + timezone) % (60 * 60 * 24)) / (60 * 60)));
  const mins = pad(Math.floor(((sunrise + timezone) % (60 * 60)) / (60)));
  const hour = pad(Math.floor(((sunset + timezone) % (60 * 60 * 24)) / (60 * 60)));
  const min = pad(Math.floor(((sunset + timezone) % (60 * 60)) / (60)));
  renderSun(hours, mins, hour, min)
  
}

function renderSun(sunrise,newSunrise,sunset,newSunset) { 
  refs.listTime.insertAdjacentHTML('beforeend', dataTemplates({ sunrise,newSunrise, sunset,newSunset }))
}

refs.input.addEventListener('input', debounce(onTime,800));
