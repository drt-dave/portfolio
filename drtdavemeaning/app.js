const text = document.querySelector(".drt");
console.log(`este es el texto del elemento: ${text.textContent}`);
const strTextDrt = text.textContent;
const splitTextDrt = strTextDrt.split("");
const strTextDavid = "David__Duarte"
const splitTextDavid = strTextDavid.split("");

console.log(`este es el splittext ${splitTextDrt}`);
text.textContent = "";
console.log(text.textContent);


for (let i = 0; i < splitTextDrt.length; i++) {
    text.innerHTML += "<span>" + splitTextDavid[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 200);

function onTick() {
    const span = text.querySelectorAll('span')[char];
    span.classList.add('drt');
    char++

    if (char === splitText.length) {
        complete();
        return;
    }
}

function complete() {
    clearInterval(timer);
    timer = null;
}