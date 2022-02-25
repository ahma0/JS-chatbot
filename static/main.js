var flag = false;
var key = 0;
var cnt = 0;
var app = document.getElementById("cat");

var question = "";
var answer = "";

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

    if(key == 1) {
        if(chat == "네") {
            typewriter
            .deleteAll()
            .typeString("대답을 입력해주세요!")
            .pauseFor(1300)
            .start();

            key = 2;
        }
        else {
            typewriter
            .deleteAll()
            .typeString("냐옹~")
            .pauseFor(1300)
            .start();
            key = 0;
        }
        return;
    }

    if(key == 2) {
        answer = chat;
        push_json();
        return;
    }

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
            return;
        }
        else if(chat == "불꺼줘") {
            if(cnt == 0) {
                typewriter
                .deleteAll()
                .typeString("애오오옹")
                .pauseFor(1300)
                .start();

                cnt++;
                return;
            }
            else if(cnt == 1) {
                typewriter
                .deleteAll()
                .typeString("냐아아아옹")
                .pauseFor(1300)
                .start();

                cnt++;
                return;
            }
            else {
                document.body.style.backgroundColor = "#5D5D5D";

                typewriter
                .deleteAll()
                .typeString("얏홍")
                .pauseFor(1300)
                .start();
                return;
            }
        }
        else if(chat == "불켜줘") {
            document.body.style.backgroundColor = "#ffffff";
            
            typewriter
            .deleteAll()
            .typeString("애옹")
            .pauseFor(1300)
            .start();
            return;
        } 
        else {
            for(let i = 0; i < json.length; i++) {
                if(chat == json[i].question) {
                    typewriter
                    .deleteAll()
                    .typeString(json[i].answer)
                    .pauseFor(1300)
                    .start();
                    return;
                }
            }
            typewriter
            .deleteAll()
            .typeString("말을 가르쳐주시겠어요?")
            .pauseFor(1300)
            .start();

            question = chat;
            key = 1;
        }
    }

    console.log(chat);
}

function push_json() {
    json.push({question: `${question}`, answer: `${answer}`});

    typewriter
    .deleteAll()
    .typeString("말 배웟어묘~")
    .pauseFor(1300)
    .start();

    key = 0;
}

document.getElementById("btn").addEventListener('click', checkChat);
