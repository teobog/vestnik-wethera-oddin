import fiveDaysTemplate from '../templates/fiveDays.hbs';

export default {fetchfiveDays};

const ref = {
  fiveDaysWeatherBlock: document.querySelector('.five_days_list'),
  fiveDaysTitle: document.querySelector('.h2_container'),

};


function fetchfiveDays(serchQuery) {

  return fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${serchQuery}&appid=33417cdb9f22734d9f99a1eef2dd1402&units=metric`)
    .then(res => res.json()).then(checkQuery).catch();
}

function checkQuery(data) {
  console.log(data);

  if (data.cod === '404') {
    ref.fiveDaysWeatherBlock.innerHTML = '';
  }
  let name = data.city.name;
  let country = data.city.country;
  ref.fiveDaysTitle.innerHTML = `<h2 class="five_days_city_title">${name}, <span class="five_days_country_title">${country}</span></h2>`

  let date1 = 0;
  let arr = [];
  let dateNow = new Date;
  let first = 0;

  for (let i = 0; i < 8; i += 1) {
    date1 = +(data.list[i].dt_txt.substr(8, 2));
    // console.log(date1);

    if (dateNow.getDate() == date1) {
      arr.push(data.list[i].main.temp_min);
      first = arr.length;

    }

  }
  dataProcessing(first, data);
}

let daysArr = [];

function dataProcessing(first, data) {


  let firstDayArr = [];

  for (let i = 0; i < first; i += 1) {
    firstDayArr.push(data.list[i].main.temp_min);
    firstDayArr.push(data.list[i].main.temp_max);
  }
  let minFirstDay = Math.round(Math.min(...firstDayArr));
  let maxFirstDay = Math.round(Math.max(...firstDayArr));

  getDates(0, minFirstDay, maxFirstDay)
  let second = first + 8;

  let secondtDayArr = [];
  for (let i = first; i < second; i += 1) {
    secondtDayArr.push(data.list[i].main.temp_min)
    secondtDayArr.push(data.list[i].main.temp_max)
  }
  let minSecondtDay = Math.round(Math.min(...secondtDayArr));
  let maxSecondtDay = Math.round(Math.max(...secondtDayArr));

  getDates(first, minSecondtDay, maxSecondtDay)
  first = second + 8;

  let thirdDayArr = [];
  for (let i = second; i < first; i += 1) {
    thirdDayArr.push(data.list[i].main.temp_min)
    thirdDayArr.push(data.list[i].main.temp_max)

  }
  let minThirdDay = Math.round(Math.min(...thirdDayArr));
  let maxThirdDay = Math.round(Math.max(...thirdDayArr));
  getDates(second, minThirdDay, maxThirdDay)
  second = first + 8;

  let fourthDayArr = [];
  for (let i = first; i < second; i += 1) {
    fourthDayArr.push(data.list[i].main.temp_min)
    fourthDayArr.push(data.list[i].main.temp_max)
  }
  let minFourthDay = Math.round(Math.min(...fourthDayArr));
  let maxFourthDay = Math.round(Math.max(...fourthDayArr));
  getDates(first, minFourthDay, maxFourthDay)
  first = second + 8;

  ;
  let fifthDayArr = [];
  for (let i = second; i < first; i += 1) {
    fifthDayArr.push(data.list[i].main.temp_min)
    fifthDayArr.push(data.list[i].main.temp_max)
  }
  let minFifthDay = Math.round(Math.min(...fifthDayArr));
  let maxFifthDay = Math.round(Math.max(...fifthDayArr));
  getDates(second, minFifthDay, maxFifthDay)


  function getDates(index, minT, maxT) {
    const date = new Date(data.list[index].dt * 1000);
    const dateName = date.getDate();

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayName = days[date.getDay()];

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const monthName = months[date.getMonth()];


    createObjDay(dateName, dayName, monthName, minT, maxT);

  }


  function createObjDay(dateName, dayName, monthName, minT, maxT) {
    daysArr.push({
      date: dateName,
      day: dayName,
      month: monthName,
      min: minT,
      max: maxT,
      link: dateName
    });
  }

  console.log(daysArr)
  ref.fiveDaysWeatherBlock.innerHTML = ''
  renderWeather(daysArr);
}

function renderWeather(daysArr) {
  ref.fiveDaysWeatherBlock.innerHTML = fiveDaysTemplate(daysArr);
}
