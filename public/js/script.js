const search = document.getElementById('search');
const weatherform = document.querySelector('form');
const btn = document.getElementById('searchBtn');
const place= document.querySelector('.place');
const summary = document.querySelector('.summary');
const temprature = document.querySelector('.temprature');
const icon = document.querySelector('.icon');



weatherform.addEventListener('submit', () => {
    event.preventDefault();
    fetch('/weather?address=' + search.value + '').then((resp) => {
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
        temprature.innerHTML = data.temprature+'°C';
        icon.innerHTML = data.icon;
        summary.innerHTML = data.summary;
        summary.innerHTML += 'Chances of rain '+data.probabilityForRain+'%';
        console.log(data);
    })

})