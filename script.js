// const { default: axios } = require("axios");
const success = (pos) => {
  var crd = pos.coords;

  console.log('Your current position is:');
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
}


const getWeather = () => {
  const inputLatitude = document.querySelector('#latitude').value
  const inputLongitude = document.querySelector('#longitude').value
  
  axios
    .get(`https://api.open-meteo.com/v1/forecast?latitude=${inputLatitude}&longitude=${inputLongitude}&hourly=temperature_2m`)
    .then(res => {
    console.log(navigator.geolocation.getCurrentPosition(success));
    const newDiv = document.createElement('div')
    newDiv.innerText = `first temperature element in hourly 2minute readings: ${res.data.hourly.temperature_2m[0]}`;

    document.body.appendChild(newDiv)
    
    })
    .catch(error => {
    console.log(error);
    })
}

const newDiv = document.createElement('div');

const newBtn = document.createElement('button');
newBtn.innerText = 'Get weather';
newBtn.addEventListener('click',  getWeather )

const input1 = document.createElement('input')
input1.setAttribute('type', 'number');
input1.setAttribute('id', 'latitude')
const label1 = document.createElement('label');
label1.innerText = 'Latitude:'

const input2 = document.createElement('input')
input2.setAttribute('type', 'number');
input2.setAttribute('id', 'longitude')
const label2 = document.createElement('label');
label2.innerText = 'Longitude:'

newDiv.appendChild(label1);
newDiv.appendChild(input1);
newDiv.appendChild(label2);
newDiv.appendChild(input2);
newDiv.appendChild(newBtn);
document.body.appendChild(newDiv);


