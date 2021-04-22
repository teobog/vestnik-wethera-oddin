
import a from './currentCity.js'

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
  // console.log(localStorage.getItem('city').split(',').includes(cityName));

  let city = localStorage.getItem('city');
  if (city && city.split(',').includes(cityName)){
    sun.favIcon.classList.add("is_active")
  }else{
    sun.favIcon.classList.remove("is_active")
  }
});

// sun.inputSearch.addEventListener('change', ()=>{
//   cityName!=='' ? cityRequest() : '';
// })



sun.inputFavBtn.addEventListener('click', saveFavCity)

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
  
// if(!sun.favIcon.classList.contains('is-active') && sun.inputSearch.value === ''){
//   return
// }else if(sun.inputSearch.value !== '' && !sun.favIcon.classList.contains('is-active')){
//   favoriteArr.push(cityName);
//     localStorage.setItem('city', favoriteArr.join(','));
//     console.log(favorite);
//   sun.favIcon.classList.add('is-active')
// }else if(sun.inputSearch.value !== '' && sun.favIcon.classList.contains('is-active')){
//   console.log('uzhe est v massive')

//       let filteredFavorites = favoriteArr.filter((city) => city !== cityName);
//       sun.favIcon.classList.remove('is_active');
//       localStorage.setItem('city', filteredFavorites.join(','));
  
// }

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
  // const a = document.querySelector('.fav_country_item')
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
sun.favIcon.classList.add("is_active")

a.cityRequest(e)
}
}
const oldCity = localStorage.getItem('city')
console.log(oldCity);

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
sun.favList.addEventListener('click', closeIcon)
sun.favList.addEventListener('click', onClickCity)


// sun.favIcon.addEventListener('click', ()=>{
//   const inputValue = sun.inputSearch.value;
//   const localValue = localStorage.getItem('city')
//   let localArrFavorite = localValue.split(',')
//   console.log(localArrFavorite);
//   if(sun.favIcon.classList.contains('.is-active') && sun.inputSearch.value !== ''){
 
//   //       if(localArrFavorite.includes(inputValue)){
//   //     let test1 = document.querySelectorAll('.fav_country_item')
//   //     let arrF=[];
//   // test1.forEach(el=> {
  
//   //   arrF.push(el.textContent)
//   //   }
  
//   // }

//   }

// })





