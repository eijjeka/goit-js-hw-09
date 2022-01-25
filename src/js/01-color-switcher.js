const refs = {
    btnStart: document.querySelector("button[data-start]"),
    btnStop: document.querySelector("button[data-stop]"),
    body: document.querySelector('body')
};

let timeChangeBgColor = null;
disableButtonEnd()

function onClickBtnStart() {
    disableButtonStart();
    refs.btnStop.removeAttribute("disabled");
        timeChangeBgColor = setInterval(() => {
            refs.body.style.backgroundColor = getRandomHexColor();
        }, 1000);
}

function onClickBtnStop() {
    disableButtonEnd();
    refs.btnStart.removeAttribute("disabled");
    clearInterval(timeChangeBgColor);
}
        
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function disableButtonStart() {
    refs.btnStart.setAttribute("disabled", "disabled");
}

function disableButtonEnd() {
    refs.btnStop.setAttribute("disabled", "disabled");
}

refs.btnStart.addEventListener('click', onClickBtnStart);

refs.btnStop.addEventListener('click', onClickBtnStop);