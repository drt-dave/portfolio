const section = document.getElementById("welcome-section")
const text = document.querySelector(".drt");

const strText = text.textContent.split(" ").join("");
const splitText = strText.split("");

const originalText = text.textContent; // Store the original text of the element

const myname= "DavidDuarte";
const splitName = myname.split("");

let char = 0;
let timer = null; 

text.addEventListener("click",()=> {
  if (text.textContent === originalText) {
    text.textContent = "";
    for (let i = 0; i < splitName.length; i++) {
      text.innerHTML += "<span>" + splitName[i] + "</span>";
    }
    timer = setInterval(onTick, 50);
  } else {
    resetText();
    timer = setInterval(onTick, 50);
  }
});

function onTick() {
  const span = text.querySelectorAll('span')[char];
  span.classList.add('drt');
  char++;

  if (char === splitName.length) {
    complete();
    return;
  }
}

function resetText() {
  const spans = text.querySelectorAll('span');
  spans.forEach(span => span.classList.remove('drt'));
  char = 0;
  setTimeout(() => {
    text.textContent = originalText;
  }, 200);
}
function complete() {
  clearInterval(timer);
  timer = null;
  setTimeout(() => {
    resetText();
    timer = setInterval(onTick, 50);
  }, 2000); // Wait 2 seconds before starting the animation again
}

