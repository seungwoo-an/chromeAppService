const clockContainer = document.querySelector(".js-clock");
let clockTitle=clockContainer.querySelector("h1");
function getTime(){
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    clockTitle.innerText=`${hours>=18 ? "🌛":"🌞"}${hours>=10?hours:`0${hours}`}:${minutes>=10?minutes:`0${minutes}`}:${seconds>=10 ? seconds:`0${seconds}`}`;
}
function init(){
    getTime();
    setInterval(getTime,1000);
}
init();