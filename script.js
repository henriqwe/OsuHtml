document.addEventListener("DOMContentLoaded", function(e) {
    timer()
    let interval = setInterval(() => {
        !endGame ? createDot() : clearInterval(interval)
    }, 400)
})

let scoreP = 0,
    time = new Date(),
    endGame = false;

function createDot() {

    let dot = document.createElement('div'),
        x = Math.floor(Math.random() * 550),
        y = Math.floor(Math.random() * 350);

    dot.setAttribute('class', 'dot');
    dot.setAttribute('style', 'left:' + x + 'px; top:' + y + 'px;')
    dot.setAttribute('onclick', 'deleteDot(this)')

    document.getElementById('container').appendChild(dot);

}

function deleteDot(elem) {

    document.getElementById('container').removeChild(elem);

    scoreP++

    let scorePoints = document.getElementById('scorePoints');
    scorePoints.innerText = scoreP;
}
let min = 0,
    sec = 30;

function timer() {

    if ((min > 0) || (sec > 0)) {
        if (sec == 0) {
            sec = 59;
            min -= 1
        } else {
            sec -= 1;
        }
        if (min.toString().length == 1) {
            min = "0" + min;
        }
        if (sec.toString().length == 1) {
            sec = "0" + sec;
        }
        document.getElementById('cronometer').innerHTML = min + ":" + sec;
        setTimeout('timer()', 1000);
    } else {
        endGame = true;
        document.getElementById('cronometer').innerHTML = "00:00";
        document.getElementById('container').innerHTML = '';
    }
}