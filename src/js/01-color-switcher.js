const refs = {
    btnStart: document.querySelector("button[data-start]"),
    btnStop: document.querySelector("button[data-stop]"),
    body: document.querySelector('body')
};

let timeChangeBgColor = null;

function onClickBtnStart() {
    refs.btnStart.setAttribute("disabled", "disabled");
    refs.btnStop.removeAttribute("disabled");
        timeChangeBgColor = setInterval(() => {
            refs.body.style.backgroundColor = getRandomHexColor();
        }, 1000);
}

function onClickBtnStop() {
    refs.btnStart.removeAttribute("disabled");
    refs.btnStop.setAttribute("disabled", "disabled");
    clearInterval(timeChangeBgColor);
}
        
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
    
refs.btnStart.addEventListener('click', onClickBtnStart);

refs.btnStop.addEventListener('click', onClickBtnStop);