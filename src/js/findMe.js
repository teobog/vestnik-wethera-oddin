
import fiveDays from './fiveDays'
import fetchCity from './currentCity'

const locate={
    inputLocation: document.querySelector('.input-location'),
    locationIcon: document.querySelector('.location_icon'),
    inputSearch: document.querySelector('.input_nav'),

}


locate.inputSearch.addEventListener("submit", function(event){
    event.preventDefault()
  });

locate.inputLocation.addEventListener("click", function(event){
    event.preventDefault();

    
    navigator.geolocation.getCurrentPosition(pos => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&appid=9f82154cc61ca06904eb64ae2c103336`)
       .then(response=>response.json()


       .then(data=>{
        locate.inputSearch.value = data.name

        
       
            let serchQuery = (locate.inputSearch.value );
            if (serchQuery != '') {
                fetchCity.fetchCityWeather(serchQuery)
                fiveDays.fetchfiveDays(serchQuery)
            }
            
            
         }
    ))
        

    }, error => console.log("Пожалуйста, разрешите доступ к использованию Вашей геопозиции!"));


    locate.inputLocation.addEventListener('click', (event)=>{
        event.preventDefault()
    
        locate.locationIcon.classList.add("active_geo")
    })


    
  });
//   locate.inputSearch.value= '123456';
console.log(locate.inputSearch.value);



