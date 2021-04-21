

const sun={
    formSearch:document.querySelector('.input_form_city'),
    inputSearch: document.querySelector('.input_nav'),
    inputFavBtn : document.querySelector('.input_btn'),
    inputGeoBtn: document.querySelector('.input-location'),
    favIcon : document.querySelector('.favourites_icon')

}

sun.formSearch.addEventListener("submit", function(event){
    event.preventDefault()
  });

//   sun.inputFavBtn.addEventListener('click', onFav)

//   sun.inputSearch.addEventListener('change', onChange)

//   function onChange(e){

// const cityName = '';
// cityName = e.target.value;
// console.log(cityName);
//   }
let cityName = '';
sun.inputSearch.addEventListener('change', (e)=>{
    cityName = e.target.value;
})

let favorite = [];
  sun.inputFavBtn.addEventListener('click', saveFavCity)

  function saveFavCity(){
    sun.favIcon.classList.add("is_active")
      if(localStorage.getItem('city')){
favorite = localStorage.getItem('city');
let favoriteUpdate = favorite.split(',')
if(favoriteUpdate.includes(cityName)){
    sun.favIcon.classList.add("is_active")
    console.log('uzhe est v massive');
      }else{
          favoriteUpdate.push(cityName)
          localStorage.setItem('city', favoriteUpdate)
          console.log(favoriteUpdate);
      }
    }else if(cityName!==''){
        
        favorite.push(cityName)
        localStorage.setItem('city',favorite)
        console.log(favorite);
    }else{
        console.log('Enter the text');
    }
  }

  













//___________________________________variant kotoryj rabotaet ploho__________________
// sun.inputSearch.addEventListener('change', onChange)

// let cityName = '';

//    function onChange(e){
//     cityName = e.target.value;
//     if(cityArray.includes(cityName)){
//         sun.favIcon.classList.add("is_active")
//     }
// }
// sun.inputFavBtn.addEventListener('click', onClickFav)


// function onClickFav(){
    
//     cityArray.push(cityName)
//     localStorage.setItem('city', JSON.stringify(cityArray));
//     sun.favIcon.classList.add("is_active")
    
    
// }

// let cityArray =[];
// let favorites = localStorage.getItem('city')
// if (localStorage.getItem('city') === null) {
//     console.log('net nichego');
// //    cityArray = [];
// }else{
//     cityArray.push(JSON.parse(localStorage.getItem('city')))
//     console.log(cityArray);
    
// }

//_______________________________________________________________

// const arr = localStorage.getItem('city')
// console.log(arr);


// const load = key => {
//     try {
//       const serializedState = localStorage.getItem(key);
  
//       return serializedState === null ? undefined : JSON.parse(serializedState);
//     } catch (err) {
//       console.error('Get state error: ', err);
//     }
//   };
  
//   // Принимает ключ key и значение value.
//   const save = (key, value) => {
//     try {
//       const serializedState = JSON.stringify(value);
//       localStorage.setItem(key, serializedState);
//     } catch (err) {
//       console.error('Set state error: ', err);
//     }
//   };
  
//   export default { load, save };
