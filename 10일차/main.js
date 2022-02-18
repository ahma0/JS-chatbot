var h1 = document.getElementsByTagName('h1');

function onClick() {
    setTimeout(function(){
        h1[0].innerText = "010-xxxx-xxxx";
    }, 2000);
}

document.getElementById('btn').addEventListener('click',onClick);