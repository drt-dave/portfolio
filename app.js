const section = document.getElementById("welcome-section")
const text = document.querySelector(".drt");

const strText = text.textContent.split(" ").join("");
const splitText = strText.split("");

const originalText = text.textContent; // Store the original text of the element

const myname = "David Duarte";
const splitName = myname.split("");

let char = 0;
let timer = null;
let firstClick = true;



text.addEventListener("click", () => {
    if (firstClick) {
        firstClick = false;
        text.textContent = "";
        for (let i = 0; i < splitName.length; i++) {
            text.innerHTML += "<span>" + splitName[i] + "</span>";
        }
        timer = setInterval(onTick, 50);
    } else if (text.textContent === originalText) {
        //resetText();
        //timer = setInterval(onTick, 50);
        timer = null;
    }
});


function onTick() {
    const spans = text.querySelectorAll('span');
    if (char < spans.length) {
        const span = spans[char];
        span.classList.add('drt');
        char++;
    }
    if (char === splitName.length) {
        complete();
        return;
    }
}

function resetText() {
    char = 0;
    setTimeout(() => {
        text.textContent = originalText;
    }, 2000);
}

function complete() {
    clearInterval(timer);
    timer = null;
    firstClick = true;
    setTimeout(() => {
        resetText();
    });
}