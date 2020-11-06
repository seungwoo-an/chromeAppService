const weather = document.querySelector(".js-weather");
const API_KEY = "607943c493b8187f5f66406cd8952277";
const COORDS='coords';

function getWeather(lat,lon){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    ).then(function(response){
        return response.json();
    }).then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText=`${Math.floor(temperature)}˚C @${place}`
    });

}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}
function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {latitude,longitude}
    saveCoords(coordsObj);
    getWeather(latitude,longitude);
}
function handleGeoError() {
    console.log("cant handle location");
}
function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoError);
}
function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords===null){
        askForCoords();
    }else{
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude,parsedCoords.longitude);
    }
}

function init(){
    loadCoords();
}
init();