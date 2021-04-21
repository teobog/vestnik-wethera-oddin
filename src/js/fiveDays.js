
import form from './currentCity';
import debounce from 'lodash.debounce';
import fiveDaysTemplate from '../templates/fiveDays.hbs';
export default { fetchfiveDays };

 const ref = {
     fiveDaysWeatherBlock: document.querySelector('.five_days_list'),
    fiveDaysTitle: document.querySelector('.h2_container'),

};


function fetchfiveDays(serchQuery) {
                      
    return fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${serchQuery}&appid=33417cdb9f22734d9f99a1eef2dd1402&units=metric`)
        .then(res => res.json()).then(checkQuery).catch(console.log('ошибка'));
}

function checkQuery(data) {
    console.log(data.list);

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


function dataProcessing(first, data) {       



    let firstDayArr = [];
    // console.log(`0`);
    // console.log(`1 ${first}`);
    for (let i = 0; i < first; i += 1) {
        firstDayArr.push(data.list[i].main.temp_min);
        firstDayArr.push(data.list[i].main.temp_max);
    }

    getDates(0)
    let second = first + 8;
    // console.log(`2 ${second}`);
    // console.log(`2 ${first}`);
    let secondtDayArr = [];
    for (let i = first; i < second; i += 1) {
        secondtDayArr.push(data.list[i].main.temp_min)
        secondtDayArr.push(data.list[i].main.temp_max)
    }
    getDates(first)
    first = second + 8;
    // console.log(`3 ${second}`);
    // console.log(`3 ${first}`);
    let thirdDayArr = [];
    for (let i = second; i < first; i += 1) {
        thirdDayArr.push(data.list[i].main.temp_min)
        thirdDayArr.push(data.list[i].main.temp_max)
            
    }
    getDates(second)
    second = first + 8;
    // console.log(`4 ${second}`);
    // console.log(`4 ${first}`);
    let fourthDayArr = [];
    for (let i = first; i < second; i += 1) {
        fourthDayArr.push(data.list[i].main.temp_min)
        fourthDayArr.push(data.list[i].main.temp_max)
    }
    getDates(first)
    first = second + 8;
    // console.log(`5 ${second}`);
    // console.log(`5 ${first}`);
    ;
    let fifthDayArr = [];
    for (let i = second; i < first; i += 1) {
        fifthDayArr.push(data.list[i].main.temp_min)
        fifthDayArr.push(data.list[i].main.temp_max)
    }
    getDates(second)
    let minFirstDay = Math.round(Math.min(...firstDayArr));
    let minSecondtDay = Math.round(Math.min(...secondtDayArr));
    let minThirdDay = Math.round(Math.min(...thirdDayArr));
    let minFourthDay = Math.round(Math.min(...fourthDayArr));
    let minFifthDay = Math.round(Math.min(...fifthDayArr));

    let maxFirstDay = Math.round(Math.max(...firstDayArr));
    let maxSecondtDay = Math.round(Math.max(...secondtDayArr));
    let maxThirdDay = Math.round(Math.max(...thirdDayArr));
    let maxFourthDay = Math.round(Math.max(...fourthDayArr));
    let maxFifthDay = Math.round(Math.max(...fifthDayArr));

    function getDates(index) {
    const date = new Date(data.list[index].dt * 1000);
    const dateName = date.getDate();
    
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayName = days[date.getDay()];
    
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const monthName = months[date.getMonth()];
        
        console.log(dateName,dayName,monthName);
        createObjDay(dateName, dayName, monthName);
        
    }
    // let daysArr = [];
    // function createObjDay(dateName, dayName, monthName) {
        
    //     for (let i = 0; i < 6; i += 1) {
    //         daysArr.push(dateName);
            
    //     }        
    //     console.log(`где массив ${daysArr}`);
    //  }

    

    
    //    let daysArr = [
    //        {
    //     day: dayName,
    //     date: dateName,
    //     month: monthName,
    //     minDay: minFirstDay,
    //     maxDay: maxFirstDay    
    // },
    //       {
    //     minDay: minSecondtDay,
    //     maxDay: maxSecondtDay    
    //        },
    //         {
    //     minDay: minThirdDay,
    //     maxDay: maxThirdDay    
    //        },
    //           {
    //     minDay: minFourthDay,
    //     maxDay: maxFourthDay    
    //        },
    //             {
    //     minDay: minFifthDay,
    //     maxDay: maxFifthDay    
    // }
    // ]
    
    // console.log(daysArr);
    // console.log(data.city.name);
    // console.log(data.city.country);
    // console.log(data.list[0].dt_txt);   
    // renderWeather();
}
    
// function renderWeather(daysArr,name,country) {
//     ref.fiveDaysWeatherBlock.innerHTML = fiveDaysTemplate(daysArr);
//   }