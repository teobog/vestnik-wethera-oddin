import moreInfoTemplate from '../templates/moreInfo.hbs';
export default { fetchMoreInfo };

const ref = {
    fiveDaysWeatherBlock: document.querySelector('.five_days_list'),
    moreInfoBlock: document.querySelector('.full_info_list'),
    
};

ref.fiveDaysWeatherBlock.addEventListener('click', onClick);



function fetchMoreInfo(serchQuery) {
                      
     return fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${serchQuery}&appid=33417cdb9f22734d9f99a1eef2dd1402&units=metric`)
        .then(res => res.json()).then(dataCheck).catch();
    
}

function dataCheck(data) {
    
    if (data.cod === '404') {
        ref.moreInfoBlock.innerHTML = '';
    }
    
    let date1 = 0;
    let arr = [];
    let dateNow = new Date;
    let first = 0;
        for (let i = 0; i < 8; i += 1) {
        date1 = +(data.list[i].dt_txt.substr(8, 2));
        
        
        if (dateNow.getDate() == date1) {
            arr.push(data.list[i].main.temp_min);
            first = arr.length;
            
        }
         
    }
    dataProcessing(first, data);
}


function dataProcessing(first, data) {



    let firstDayArr = [];
   
    for (let i = 0; i < first; i += 1) {
        firstDayArr.push({
            time: data.list[i].dt_txt.substr(11, 5),
            icon: data.list[i].weather[0].description,
            temp: Math.round(data.list[i].main.feels_like),
            presure: data.list[i].main.pressure,
            humidity: data.list[i].main.humidity,
            wind: data.list[i].wind.speed,

        });
    }
    
    let second = first + 8;
   
    let secondDayArr = [];
    for (let i = first; i < second; i += 1) {
        secondDayArr.push({
            time: data.list[i].dt_txt.substr(11, 5),
            icon: data.list[i].weather[0].description,
            temp: Math.round(data.list[i].main.feels_like),
            presure: data.list[i].main.pressure,
            humidity: data.list[i].main.humidity,
            wind: data.list[i].wind.speed,

        });
    }
    first = second + 8;
   
    let thirdDayArr = [];
    for (let i = second; i < first; i += 1) {
        thirdDayArr.push({
            time: data.list[i].dt_txt.substr(11, 5),
            icon: data.list[i].weather[0].description,
            temp: Math.round(data.list[i].main.feels_like),
            presure: data.list[i].main.pressure,
            humidity: data.list[i].main.humidity,
            wind: data.list[i].wind.speed,
        });
            
    }
    second = first + 8;
    
    let fourthDayArr = [];
    for (let i = first; i < second; i += 1) {
        fourthDayArr.push({
            time: data.list[i].dt_txt.substr(11, 5),
            icon: data.list[i].weather[0].description,
            temp: Math.round(data.list[i].main.feels_like),
            presure: data.list[i].main.pressure,
            humidity: data.list[i].main.humidity,
            wind: data.list[i].wind.speed,

        });
    }
    first = second + 8;
    
    let fifthDayArr = [];
    for (let i = second; i < first; i += 1) {
        fifthDayArr.push({
            time: data.list[i].dt_txt.substr(11, 5),
            icon: data.list[i].weather[0].description,
            temp: Math.round(data.list[i].main.feels_like),
            presure: data.list[i].main.pressure,
            humidity: data.list[i].main.humidity,
            wind: data.list[i].wind.speed,

        });
    }
       renderMoreInfo(firstDayArr)
     
}

function renderMoreInfo(firstDayArr) {
    ref.moreInfoBlock.innerHTML = moreInfoTemplate(firstDayArr);
  }



    function onClick(e) {
    e.preventDefault()
    if (e.target === e.currentTarget) {
    return
    }
    
    console.log(e.target);
}