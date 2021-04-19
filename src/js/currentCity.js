import currentCityTemplate from '../templates/currentCity.hbs';
import debounce from 'lodash.debounce';

const ref = {
    serchQuery: document.querySelector('.input_nav'),
    curentWeatherBlock: document.querySelector('.current_city_list')
};
ref.serchQuery.addEventListener('input', debounce(cityRequest,500));


function cityRequest(e) {
    let serchQuery = (e.target.value);
    if (serchQuery != '') {
        fetchCityWeather(serchQuery)
    }
    
    console.log(serchQuery);
 }

function fetchCityWeather(serchQuery) {

    return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${serchQuery}&appid=2b30446187616e7178e0cd559ea22385&units=metric`)
        .then(res => res.json()).then(checkQuery).catch(console.log('ошибка'));
}


function checkQuery(data) {
    console.log(data);
    if (data.cod === '404') {
        ref.curentWeatherBlock.innerHTML = '';

    }
    dataProcessing(data)

}

function dataProcessing({ name, sys: { country }, main: { temp, temp_min, temp_max }, weather }) {
   console.log(name,country,temp, temp_min, temp_max,weather[0].description);

    let roundTemp = Math.round(temp);
    let roundTemp_min = Math.round(temp_min);
    let roundTemp_max = Math.round(temp_max);
    let weatherDescription = (weather[0].description);
    let wearherIcon ='';
    if (weatherDescription === 'clear sky') {
        wearherIcon = './images/symbol-defs.svg#icon-sun-wc'
    } else {
        wearherIcon ='./images/symbol-defs.svg#icon-snow-wc'
    }

        

        renderWeather(name,country,roundTemp,roundTemp_min,roundTemp_max, wearherIcon)
     
}





function renderWeather(name, country, temp, temp_min, temp_max, wearherIcon) {
        ref.curentWeatherBlock.innerHTML = currentCityTemplate({ name, country, temp, temp_min, temp_max, wearherIcon });
    }