var input, texts = "", color = "", loop;
var r = 0, g = 0, b = 0, cnt = 0;
var h1 = document.getElementsByTagName('h1');

function display_start() {
    input = document.getElementById('inputs').value;
    loop = setInterval(display, 500);
}

function display() {
    if(cnt == input.length) {
        cnt = 0;
        texts = "";
        colors();
        h1[0].innerHTML = texts;
    }
    else {
        texts += input[cnt];
        colors();
        h1[0].innerHTML = texts;
        cnt++;
    }
}

function colors() {
    color = "#";
    r = Math.floor(Math.random() * 200) + 50;
    g = Math.floor(Math.random() * 200) + 50;
    b = Math.floor(Math.random() * 200) + 50;
    color += (r + "" + g + "" + b);
    h1[0].style.color = color;
}