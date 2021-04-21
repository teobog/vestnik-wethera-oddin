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
if (e.target.nodeName === 'svg') {
e.target.parentElement.classList.add('is_close');
sun.favIcon.classList.remove("is_active")

}

}

function onClickCity(e) {
if (e.target.nodeName === 'A') {
sun.inputSearch.value = e.target.textContent;
sun.favIcon.classList.add("is_active")

console.log(e.target.textContent);
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




