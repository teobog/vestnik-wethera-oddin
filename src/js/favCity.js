

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


