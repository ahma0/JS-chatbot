var flag = false;
var cnt = 0;
var app = document.getElementById("cat");

var typewriter = new Typewriter(app, {
    loop:false,
});

typewriter
    .deleteAll()
    .typeString("이 몸과 대화할 준비가 됐나?")
    .pauseFor(1300)
    .start();

function checkChat() {
    var chat = document.getElementById("chat").value;

    if(chat == "") alert("입력해주세요");

    if(flag){
        if(chat == "그만해! 냥!"){
            typewriter
            .deleteAll()
            .typeString("먀옹~~")
            .pauseFor(1300)
            .start();

            flag = false;
        }
        else typewriter.deleteAll().typeString(chat + " 냥~").pauseFor(1300).start();
    } 
    else {
        if(chat == "나 따라해봐") { 
            flag = true;

            typewriter
            .deleteAll()
            .typeString("먀옹~~")
            .pauseFor(1300)
            .start();
        }
        else if(chat == "뭐해?") typewriter.deleteAll().typeString("meow~").pauseFor(1300).start();
        else if(chat == "사랑해") typewriter.deleteAll().typeString("냐아아아아옹~~~").pauseFor(1300).start();
        else if(chat == "바보" || chat == "멍청이") alert("욕설은 안돼요!");
        else if(chat == "불꺼줘") {
            if(cnt == 0) {
                typewriter
                .deleteAll()
                .typeString("애오오옹")
                .pauseFor(1300)
                .start();

                cnt++
            }
            else if(cnt == 1) {
                typewriter
                .deleteAll()
                .typeString("냐아아아옹")
                .pauseFor(1300)
                .start();

                cnt++;
            }
            else {
                document.body.style.backgroundColor = "#5D5D5D";

                typewriter
                .deleteAll()
                .typeString("얏홍")
                .pauseFor(1300)
                .start();
            }
        }
        else if(chat == "불켜줘") {
            document.body.style.backgroundColor = "#ffffff";
            
            typewriter
            .deleteAll()
            .typeString("애옹")
            .pauseFor(1300)
            .start();
        } 
        else if(chat == "안녕") typewriter.deleteAll().typeString("앩옹").pauseFor(1300).start();
    
        else {
            typewriter
            .deleteAll()
            .typeString("뭐라는거야ㅡㅡ")
            .pauseFor(1300)
            .start();
        }
    }

    console.log(chat);
}

document.getElementById("btn").addEventListener('click', checkChat);
