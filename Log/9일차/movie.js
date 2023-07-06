var h1 = document.getElementsByTagName('h1');
var li = document.getElementsByTagName('li');

var spiderman = {
    name: "스파이더맨 노웨이홈",
    janre: "액션",
    year: "2021"
}
var catchme = {
    name: "Catch me If you can",
    janre: "범죄",
    year: "2003"
}

var harry = {
    name: "해리포터",
    janre: "판타지",
    year: "2001"
}

var callme = {
    name: "call me by your name",
    janre: "드라마",
    year: "2018"
}

function showCallme() {
    h1[0].innerText = callme.name;
    li[0].innerText = callme.janre;
    li[1].innerText = callme.year;
}

function showCatchme() {
    h1[0].innerText = catchme.name;
    li[0].innerText = catchme.janre;
    li[1].innerText = catchme.year;
}

function showH() {
    h1[0].innerText = harry.name;
    li[0].innerText = harry.janre;
    li[1].innerText = harry.year;
}

function showS() {
    h1[0].innerText = spiderman.name;
    li[0].innerText = spiderman.janre;
    li[1].innerText = spiderman.year;
}