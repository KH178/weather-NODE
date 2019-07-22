const search = document.getElementById('search');
const weatherform = document.querySelector('form');
const btn = document.getElementById('searchBtn');


const place = document.querySelector('.place');
const summary = document.querySelector('.summary');
const temprature = document.querySelector('.temprature');
const icon = document.querySelector('.icon');
const rainProb = document.querySelector('.rainProb');



weatherform.addEventListener('submit', () => {
    event.preventDefault();
    fetch('/weather?address=' + search.value + '').then((resp) => {
        return resp.json();
    }).then((data) => {
        if (data.err) {
            removeContent(data.err)
            return console.log(data.err);
        }
        if (!search.value) {
            removeContent('')
            return summary.innerHTML = 'Please enter your Location';
        }
        addContent(data.place, data.temprature, data.icon, data.summary, data.probabilityForRain);

    })

})

function addContent(pl = '', tem = '', ic = '', su = '', prob = '') {
    place.innerHTML = pl;
    temprature.innerHTML = tem + '°c';
    icon.innerHTML = ic;
    summary.innerHTML = su;
    rainProb.innerHTML = 'Chances of rain ' + prob + '%';
}

function removeContent(p) {
    place.innerHTML = p;
    temprature.innerHTML = '';
    icon.innerHTML = '';
    summary.innerHTML = '';
    rainProb.innerHTML = '';
}