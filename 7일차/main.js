var h = 0;
var m = 0;
var s = 0;
var set = 0;
var time;
var h1 = document.getElementsByTagName('h1');
var flag = false;
var button = document.getElementsByTagName('button');
var buttonClicked;

function timer() {
    time = "";
    s++;
    
    const max = 59

    if(s > max) {
        s = 0;
        m++;
    }

    if(m > max) {
        m = 0;
        h++;
    }

    if(h < 10) time += '0'
    time += (h + ":");
    if(m < 10) time += '0'
    time += (m + ":");
    if(s < 10) time += '0'
    time += s;

    h1[0].innerText = time;

}

function start() {
    buttonClicked = true;
    timer();
    set = setTimeout(start, 999.5);
    enableit();
}

function stop() {
    clearTimeout(set);
    buttonClicked = false;
    enableit();
}

function reset() {
    clearTimeout(set);
    time="00:00:00";
    h = 0;
    m = 0;
    s = 0;
    h1[0].innerText = time;
    buttonClicked = false;
    enableit();
}

function enableit() {
    if(buttonClicked){
        button[0].disabled = true
    }
    else button[0].disabled = false
}