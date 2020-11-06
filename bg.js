const body = document.querySelector("body");
const IMG_NUMBER=6;
function paintIamge(imgNumber){
    const image = new Image();
    image.src=`./images/${imgNumber+1}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);
}
function generateRandomNumber(){
    const number = Math.floor(Math.random()*IMG_NUMBER);
    paintIamge(number);
}
function init(){
    generateRandomNumber();
    setInterval(generateRandomNumber,4000);
}
init();