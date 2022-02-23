var flag = false;
var cnt = 0;

function checkChat() {
    var chat = document.getElementById("chat").value;
    var cat = document.getElementById("cat");

    if(chat == "") alert("입력해주세요");

    if(flag){
        if(chat == "그만해! 냥!"){
            cat.innerText = "먀옹~~";
            flag = false;
        }
        else cat.innerText = chat + " 냥~";
    } 
    else {
        if(chat == "나 따라해봐") { 
            flag = true;
            cat.innerText = "먀옹~~";
        }
        else if(chat == "그만해! 냥!"){
            cat.innerText = "먀옹~~";
            flag = false;
        }
        else if(chat == "뭐해?") cat.innerText = "meow~";
        else if(chat == "사랑해") cat.innerText = "냐아아아아옹~~~";
        else if(chat == "바보" || chat == "멍청이") alert("욕설은 안돼요!");
        else if(chat == "불꺼줘") {
            if(cnt == 0) {
                cat.innerText = "애오오옹";
                cnt++
            }
            else if(cnt == 1) {
                cat.innerText = "냐아아아옹";
                cnt++;
            }
            else {
                document.body.style.backgroundColor = "#5D5D5D";
                cat.innerText = "얏홍"
            }
        }
        else if(chat == "불켜줘") {
            document.body.style.backgroundColor = "#ffffff";
            cat.innerText = "애옹"
        } 
        else if(chat == "안녕") cat.innerText = "앩옹";
    
        else {
            cat.innerText = "뭐라는거야ㅡㅡ";
        }
    }

    
    console.log(chat);
}

function fallow() {
    cat.innerText = chat + " 냥~";
}

document.getElementById("btn").addEventListener('click', checkChat);
