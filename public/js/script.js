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
        search.value = '';

    })

})

function addContent(pl = '', tem = '', ic = '', su = '', prob = '') {
    place.innerHTML = pl;
    temprature.innerHTML = tem + '°c';
    // icon.innerHTML = ic;
    summary.innerHTML = su;
    rainProb.innerHTML = 'There is ' + prob + '% Chances of rain';
}

function removeContent(p) {
    place.innerHTML = p;
    temprature.innerHTML = '';
    icon.innerHTML = '';
    summary.innerHTML = '';
    rainProb.innerHTML = '';
}

function setIcon(icon) {

    switch (icon) {
        case 'clear-day':
            // code block
            break;
        case 'clear-night':
            // code block
            break;
        case 'rain':
            // code block
            break;
        case 'snow':
            // code block
            break;
        case 'sleet':
            // code block
            break;
        case 'wind':
            // code block
            break;
        case 'fog':
            // code block
            break;
        case 'cloudy':
            // code block
            break;
        case 'partly-cloudy-day':
            // code block
            break;
        case 'partly-cloudy-night':
            // code block
            break;
        default:
                // hail
            // code block
    }

}
