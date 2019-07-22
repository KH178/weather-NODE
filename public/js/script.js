const search = document.getElementById('search');
const weatherform = document.querySelector('form');
const btn = document.getElementById('searchBtn');
const place= document.querySelector('.place');
const summary = document.querySelector('.summary');


search.addEventListener('focus',()=>{
    search.classList.add('.search-expand');
    search.classList.remove('#search');
})

weatherform.addEventListener('submit', () => {
    event.preventDefault();
    fetch('http://localhost:3000/weather?address=' + search.value + '').then((resp) => {
        return resp.json();
    }).then((data) => {
        if (data.err) {
         place.innerHTML = data.err;
            return console.log(data.err);
        }
        if(!search.value){
            return summary.innerHTML = 'Please enter your Location';
        }
      
        place.innerHTML = data.place;
        summary.innerHTML = data.summary;
        summary.innerHTML += data.probabilityForRain;
        console.log(data);
    })

})