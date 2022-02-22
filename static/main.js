function checkChat() {
    var chat = document.getElementById("chat").value;
    var cat = document.getElementById("cat");

    if(chat == "") alert("입력해주세요");

    if(chat == "안녕") cat.innerText = "앩옹";
    else if(chat == "뭐해?") cat.innerText = "meow~";
    else if(chat == "사랑해") cat.innerText = "냐아아아아옹~~~";
    else if(chat == "바보" || chat == "멍청이") alert("욕설은 안돼요!");
    else if(chat == "불꺼줘") {
        document.body.style.backgroundColor = "#5D5D5D";
        cat.innerText = "얏홍"
    }
    else if(chat == "불켜줘") {
        document.body.style.backgroundColor = "#ffffff";
        cat.innerText = "애옹"
    } 
    console.log(chat);
}

document.getElementById("btn").addEventListener('click', checkChat);
