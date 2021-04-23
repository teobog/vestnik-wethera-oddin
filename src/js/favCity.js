
import a from './currentCity.js';
import debounce from 'lodash.debounce';
import dataTemplates from '../templates/data.hbs';


const sun={
  formSearch:document.querySelector('.input_form_city'),
  inputSearch: document.querySelector('.input_nav'),
  inputFavBtn : document.querySelector('.input_btn'),
  inputGeoBtn: document.querySelector('.input-location'),
  favIcon : document.querySelector('.favourites_icon'),
  favList: document.querySelector('.fav_country_list'),
favItem: document.querySelector('.fav_country_item'),
  closeIconBtn: document.querySelector('.close_icon')
}
sun.formSearch.addEventListener("submit", function(event){
  event.preventDefault()
});
let cityName = '';

sun.inputSearch.addEventListener('input', (e)=>{
  
  cityName = e.target.value;
  let city = localStorage.getItem('city');
  if (city && city.split(',').includes(cityName)){
    sun.favIcon.classList.add("is_active")
  }else{
    sun.favIcon.classList.remove("is_active")
  }
});

function saveFavCity() {
  let favorite = '';
  let favoriteArr = [];
  sun.favIcon.classList.add('is_active');

  if (localStorage.getItem('city')) {
    favorite = localStorage.getItem('city');
    favoriteArr = favorite.split(',');
    if (favoriteArr.includes(cityName)) {
      console.log('uzhe est v massive');
      let filteredFavorites = favoriteArr.filter((city) => city !== cityName);
      sun.favIcon.classList.remove('is_active');
      localStorage.setItem('city', filteredFavorites.join(','));
    } else {
      favoriteArr.push(cityName);
      localStorage.setItem('city', favoriteArr);
      console.log(favoriteArr);
    }
  } else if (cityName !== '') {
    favoriteArr.push(cityName);
    localStorage.setItem('city', favoriteArr.join(','));
    console.log(favorite);
  } else {
    console.log('Enter the text');
  }

  const cityFav = cityName;
  markupFavorites(cityFav);
}

sun.inputFavBtn.addEventListener('click', saveFavCity)

function markupFavorites(city) {
cityName.length >3 ? sun.favList.insertAdjacentHTML('beforeend',`<li class="fav_country_item">
<a class="fav_country_link">${city}</a>
<svg class="close_icon">
<use href="./images/symbol-defs.svg#icon-close"></use>
</svg>
</li>`):''
}

function closeIcon(e) {
if (e.target.nodeName === 'svg' ) {
  console.log(e.target.parentElement.textContent);
  e.target.parentElement.remove()
  let test = document.querySelectorAll('.fav_country_item')
  let arrF=[];
test.forEach(el=> {
  arrF.push(el.textContent)
})
localStorage.setItem('city', arrF)
sun.favIcon.classList.remove("is_active")
}
}


function onClickCity(e) {
  if (e.target.nodeName === 'A') {
sun.inputSearch.value = e.target.textContent;
  sun.favIcon.classList.add("is_active");
  // backgroundImg.onImg(e);
    onImg(e)
    a.cityRequest(e);
    onTime(e)
}
}
const oldCity = localStorage.getItem('city')


function onTestLocal() {
  if (oldCity && oldCity.length) {
    oldCity.split(',').forEach(num => sun.favList.insertAdjacentHTML('beforeend',`<li class="fav_country_item">
<a class="fav_country_link">${num}</a>
<svg class="close_icon">
  <use href="./images/symbol-defs.svg#icon-close"></use>
</svg>
</li>`))
  }
}
onTestLocal()



const body = document.querySelector('body');
const input = document.querySelector('.input_nav');
function onImg(e) {
        let inputValue = e.target.textContent
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
    const inputValue = e.target.textContent
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


refs.input.addEventListener('input', onTime);
input.addEventListener('input', onImg);
sun.inputFavBtn.addEventListener('click', saveFavCity);
sun.favList.addEventListener('click', closeIcon);
sun.favList.addEventListener('click', onClickCity);
