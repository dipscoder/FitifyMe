const text = document.querySelector(".fancy");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = " ";

for (let i = 0; i < splitText.length; i++) {
    text.innerHTML += "<span>" + splitText[i]; + "</span>";
    text.classList.add('animatedText')
}

let char = 0;
let timer = setInterval(onTick,50);

function onTick() {
    const span =  text.querySelectorAll('.animatedText')[char];
    span.classList.add('fadde');
    char++;
    if (char === splitText.length) {
        complete();
        return;
    }
}

function complete(){
    clearInterval(timer);
    timer = null;
}

