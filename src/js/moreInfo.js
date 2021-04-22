import moreInfoTemplateOne from '../templates/moreInfoOne.hbs';
import moreInfoTemplateTwo from '../templates/moreInfoTwo.hbs'
import moreInfoTemplateThree from '../templates/moreInfoThree.hbs';
import moreInfoTemplateFour from '../templates/moreInfoFour.hbs';
import moreInfoTemplateFive from '../templates/moreInfoFive.hbs';
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



let wearherIcon ='';

    let firstDayArr = [];

    let humidityArrDay1 = [];
    let tempArrDay1 = [];
    let presureArrDay1 = [];
    let windArrDay1 = [];

    let humidityArrDay2 = [];
    let tempArrDay2 = [];
    let presureArrDay2 = [];
    let windArrDay2 = [];

    let humidityArrDay3 = [];
    let tempArrDay3 = [];
    let presureArrDay3 = [];
    let windArrDay3 = [];

    let humidityArrDay4 = [];
    let tempArrDay4 = [];
    let presureArrDay4 = [];
    let windArrDay4 = [];

    let humidityArrDay5 = [];
    let tempArrDay5 = [];
    let presureArrDay5 = [];
    let windArrDay5 = [];





    function checkIcon(data,i) {

    let weatherDescription = (data.list[i].weather[0].description);

    if (weatherDescription === 'clear sky') {
        wearherIcon = './images/symbol-defs.svg#icon-clear_sky'
    } else if(weatherDescription === 'scattered clouds') {
        wearherIcon = './images/symbol-defs.svg#icon-scattered_clouds'
    } else if (weatherDescription === 'broken clouds') {
        wearherIcon = './images/symbol-defs.svg#icon-broken_clouds'
    } else if (weatherDescription === 'shower rain') {
        wearherIcon = './images/symbol-defs.svg#icon-shower_rain'
    } else if (weatherDescription === 'rain') {
        wearherIcon = './images/symbol-defs.svg#icon-rain'
    } else if (weatherDescription === 'thunderstorm') {
        wearherIcon = './images/symbol-defs.svg#icon-thunderstorm'
    } else if (weatherDescription === 'snow') {
        wearherIcon = './images/symbol-defs.svg#icon-snow'
    } else if (weatherDescription === 'mist') {
        wearherIcon = './images/symbol-defs.svg#icon-mist'
    } else {
        wearherIcon = './images/symbol-defs.svg#icon-clear_sky'
        }
        return wearherIcon
    }

    let number = 0;
    number += 1;
    for (let i = 0; i < first; i += 1) {
        checkIcon(data, i)
        // console.log(wearherIcon);

        firstDayArr.push({
            time: data.list[i].dt_txt.substr(11, 5),
            icon: wearherIcon,
            temp: Math.round((data.list[i].main.temp_min+data.list[i].main.temp_min)/2),
            presure: data.list[i].main.pressure,
            humidity: data.list[i].main.humidity,
            wind: (data.list[i].wind.speed).toFixed(1),
            number: `day${number}`

        });
        console.log(firstDayArr[0].number);
        humidityArrDay1.push(data.list[i].main.humidity,);
        tempArrDay1.push(Math.round(data.list[i].main.feels_like));
        presureArrDay1.push(data.list[i].main.pressure);
        windArrDay1.push(+(data.list[i].wind.speed).toFixed(1));

    }


    let second = first + 8;
    number += 1;
    let secondDayArr = [];
    for (let i = first; i < second; i += 1) {
        checkIcon(data,i)
        secondDayArr.push({
            time: data.list[i].dt_txt.substr(11, 5),
            icon: wearherIcon,
            temp: Math.round((data.list[i].main.temp_min+data.list[i].main.temp_min)/2),
            presure: data.list[i].main.pressure,
            humidity: data.list[i].main.humidity,
            wind: (+(data.list[i].wind.speed).toFixed(1)),
            number: `day${number}`

        });
        humidityArrDay2.push(data.list[i].main.humidity,);
        tempArrDay2.push(Math.round(data.list[i].main.feels_like));
        presureArrDay2.push(data.list[i].main.pressure);
        windArrDay2.push(+(data.list[i].wind.speed).toFixed(1));;
    }
    first = second + 8;
    number += 1;
    let thirdDayArr = [];
    for (let i = second; i < first; i += 1) {
        checkIcon(data,i)
        thirdDayArr.push({
            time: data.list[i].dt_txt.substr(11, 5),
            icon: wearherIcon,
            temp: Math.round((data.list[i].main.temp_min+data.list[i].main.temp_min)/2),
            presure: data.list[i].main.pressure,
            humidity: data.list[i].main.humidity,
            wind: (data.list[i].wind.speed).toFixed(1),
            number: `day${number}`
        });
        humidityArrDay3.push(data.list[i].main.humidity,);
        tempArrDay3.push(Math.round(data.list[i].main.feels_like));
        presureArrDay3.push(data.list[i].main.pressure);
        windArrDay3.push(+(data.list[i].wind.speed).toFixed(1));;

    }
    second = first + 8;
    number += 1;
    let fourthDayArr = [];
    for (let i = first; i < second; i += 1) {
        checkIcon(data,i)
        fourthDayArr.push({
            time: data.list[i].dt_txt.substr(11, 5),
            icon: wearherIcon,
            temp: Math.round((data.list[i].main.temp_min+data.list[i].main.temp_min)/2),
            presure: data.list[i].main.pressure,
            humidity: data.list[i].main.humidity,
            wind: (+(data.list[i].wind.speed).toFixed(1)),
            number: `day${number}`

        });
        humidityArrDay4.push(data.list[i].main.humidity,);
        tempArrDay4.push(Math.round(data.list[i].main.feels_like));
        presureArrDay4.push(data.list[i].main.pressure);
        windArrDay4.push(+(data.list[i].wind.speed).toFixed(1));;
    }
    first = second + 8;
    number += 1;
    let fifthDayArr = [];
    for (let i = second; i < first; i += 1) {
        checkIcon(data,i)
        fifthDayArr.push({
            time: data.list[i].dt_txt.substr(11, 5),
            icon: wearherIcon,
            temp: Math.round((data.list[i].main.temp_min+data.list[i].main.temp_min)/2),
            presure: data.list[i].main.pressure,
            humidity: data.list[i].main.humidity,
            wind: (+(data.list[i].wind.speed).toFixed(1)),
            number: `day${number}`

        });
        humidityArrDay5.push(data.list[i].main.humidity,);
        tempArrDay5.push(Math.round(data.list[i].main.feels_like));
        presureArrDay5.push(data.list[i].main.pressure);
        windArrDay5.push(+(data.list[i].wind.speed).toFixed(1));
    }


// ---------------------------Массивы для чарта----------------------------------------------
    console.log(humidityArrDay1, tempArrDay1, presureArrDay1, windArrDay1);
    console.log(humidityArrDay2,tempArrDay2,presureArrDay2,windArrDay2);
    console.log(humidityArrDay3,tempArrDay3,presureArrDay3,windArrDay3);
    console.log(humidityArrDay4,tempArrDay4,presureArrDay4,windArrDay4);
    console.log(humidityArrDay5,tempArrDay5,presureArrDay5,windArrDay5);

    renderMoreInfo(firstDayArr, secondDayArr, thirdDayArr, fourthDayArr, fifthDayArr);

}





function renderMoreInfo(firstDayArr, secondDayArr, thirdDayArr, fourthDayArr, fifthDayArr) {
    ref.moreInfoBlock.innerHTML = '';

    ref.moreInfoBlock.insertAdjacentHTML('beforeend', moreInfoTemplateOne(firstDayArr))
    ref.moreInfoBlock.insertAdjacentHTML('beforeend',moreInfoTemplateThree(thirdDayArr));
    ref.moreInfoBlock.insertAdjacentHTML('beforeend',moreInfoTemplateFour(fourthDayArr));
    ref.moreInfoBlock.insertAdjacentHTML('beforeend',moreInfoTemplateTwo(secondDayArr));
    ref.moreInfoBlock.insertAdjacentHTML('beforeend', moreInfoTemplateFive(fifthDayArr));
    console.log(firstDayArr, secondDayArr, thirdDayArr, fourthDayArr, fifthDayArr);



  }






function onClick(e) {
    e.preventDefault()
    let moreInfo1 = document.querySelectorAll('#day1');
    let moreInfo2 = document.querySelectorAll('#day2');
    let moreInfo3 = document.querySelectorAll('#day3');
    let moreInfo4 = document.querySelectorAll('#day4');
    let moreInfo5 = document.querySelectorAll('#day5');

    let btn1Ref = document.querySelector('[data-action=day1]');
    let btn2Ref = document.querySelector('[data-action=day2]');
    let btn3Ref = document.querySelector('[data-action=day3]');
    let btn4Ref = document.querySelector('[data-action=day4]');
    let btn5Ref = document.querySelector('[data-action=day5]');


    // console.log(moreInfo1);
    // console.log(moreInfo2);
    // console.log(moreInfo3);
    // console.log(moreInfo4);
    // console.log(moreInfo5);






    if (e.target === btn1Ref) {
        moreInfo1.forEach(e => e.classList.toggle("is_hidden"))
        moreInfo2.forEach(e => e.classList.toggle("is_hidden",true))
        moreInfo3.forEach(e => e.classList.toggle("is_hidden",true))
        moreInfo4.forEach(e => e.classList.toggle("is_hidden",true))
        moreInfo5.forEach(e => e.classList.toggle("is_hidden",true))


        // console.log(e.target);
        // console.log(btn1Ref);
        // console.log(moreInfo1);


    } else if (e.target === btn2Ref) {
        moreInfo2.forEach(e => e.classList.toggle("is_hidden"))
        moreInfo1.forEach(e => e.classList.toggle("is_hidden",true))
        moreInfo3.forEach(e => e.classList.toggle("is_hidden",true))
        moreInfo4.forEach(e => e.classList.toggle("is_hidden",true))
        moreInfo5.forEach(e => e.classList.toggle("is_hidden",true))
        // console.log(e.target);
        // console.log(btn2Ref);
        // console.log(moreInfo2);

    } else if (e.target === btn3Ref) {
        moreInfo3.forEach(e => e.classList.toggle("is_hidden"))
        moreInfo2.forEach(e => e.classList.toggle("is_hidden",true))
        moreInfo1.forEach(e => e.classList.toggle("is_hidden",true))
        moreInfo4.forEach(e => e.classList.toggle("is_hidden",true))
        moreInfo5.forEach(e => e.classList.toggle("is_hidden",true))
        // console.log(e.target);
        // console.log(btn3Ref);
        // console.log(moreInfo3);


    } else if (e.target === btn4Ref) {
        moreInfo4.forEach(e => e.classList.toggle("is_hidden"))
        moreInfo2.forEach(e => e.classList.toggle("is_hidden",true))
        moreInfo3.forEach(e => e.classList.toggle("is_hidden",true))
        moreInfo1.forEach(e => e.classList.toggle("is_hidden",true))
        moreInfo5.forEach(e => e.classList.toggle("is_hidden",true))
        // console.log(e.target);
        // console.log(btn4Ref);
        // console.log(moreInfo4);

    } else if (e.target === btn5Ref) {
        moreInfo5.forEach(e => e.classList.toggle("is_hidden"))
        moreInfo2.forEach(e => e.classList.toggle("is_hidden",true))
        moreInfo3.forEach(e => e.classList.toggle("is_hidden",true))
        moreInfo4.forEach(e => e.classList.toggle("is_hidden",true))
        moreInfo1.forEach(e => e.classList.toggle("is_hidden",true))
        // console.log(e.target);
        // console.log(btn5Ref);
        // console.log(moreInfo5);
    }
    else {
        return
    }
}
