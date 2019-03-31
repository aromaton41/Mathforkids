var question1 = ["(96 + 24) - 105", "26 + (10 x 6)", "(105 / 5) + 59", "154 / (21 - 20)", "(6 x 8) / 4",
    "(37 - 30) x 2", "12 x (40 / 8)", "(27 + 43) x (4 - 3)", "(15 + 65) / (43 - 39)", "(6 x 3) - (10 / 5)"]
var question2 = ["(68 + 82) - 10", "56 + (6 x 4)", "(15 / 5) + 123", "63 / (72 - 65)", "(48 x 3) / 4",
    "(65 - 25) x 2", "9 x (48 / 8)", "(63 + 11) x (42 - 41)", "(241 + 29) / (101 - 98)", "(5 x 3) - (40 / 8)"]
var question3 = ["(12 + 64) - 28", "35 + (8 x 3)", "(108 / 9) + 480", "260 + (98 - 88)", "(6 x 6) / 2",
    "(75 - 57) x 4", "8 x (21 / 7)", "(35 + 45) x (9 - 8)", "(24 + 36) / (32 - 26)", "(16 x 2) - (49 / 7)"]
var question4 = ["(86 + 14) - 62", "80 + (6 x 3)", "(45 / 9) + 32", "32 / (75 - 67)", "(6 x 3) / 2",
    "8 x (63 / 7)", "(56 + 14) x (77 - 66)", "(47 + 23) / (250 - 243)", "(45 x 2) - (77 / 7)", "(120 x 2) - (36 / 3)"]
var question5 = ["(24 + 36) - 37", "54 + (6 x 6)", "(55 / 5) + 198", "14 + (166 - 159)", "(28 x 10) / 4",
    "(268 - 228) x 2", "8 x (48 / 8)", "(26 + 54) x (138 - 130)", "(64 + 31) / (80 - 75)", "(7 x 3) - (160 / 8)"]

var numquestion1 = [(96 + 24) - 105, 26 + (10 * 6), (105 / 5) + 59, 154 / (21 - 20), (6 * 8) / 4,
(37 - 30) * 2, 12 * (40 / 8), (27 + 43) * (4 - 3), (15 + 65) / (43 - 39), (6 * 3) - (10 / 5)]
var numquestion2 = [(68 + 82) - 10, 56 + (6 * 4), (15 / 5) + 123, 63 / (72 - 65), (48 * 3) / 4,
(65 - 25) * 2, 9 * (48 / 8), (63 + 11) * (42 - 41), (241 + 29) / (101 - 98), (5 * 3) - (40 / 8)]
var numquestion3 = [(12 + 64) - 28, 35 + (8 * 3), (108 / 9) + 480, 260 + (98 - 88), (6 * 6) / 2,
(75 - 57) * 4, 8 * (21 / 7), (35 + 45) * (9 - 8), (24 + 36) / (32 - 26), (16 * 2) - (49 / 7)]
var numquestion4 = [(86 + 14) - 62, 80 + (6 * 3), (45 / 9) + 32, 32 / (75 - 67), (6 * 3) / 2,
8 * (63 / 7), (56 + 14) * (77 - 66), (47 + 23) / (250 - 243), (45 * 2) - (77 / 7), (120 * 2) - (36 / 3)]
var numquestion5 = [(24 + 36) - 37, 54 + (6 * 6), (55 / 5) + 198, 14 + (166 - 159), (28 * 10) / 4,
(268 - 228) * 2, 8 * (48 / 8), (26 + 54) * (138 - 130), (64 + 31) / (80 - 75), (7 * 3) - (160 / 8)]
var question = [question1, question2, question3, question4, question5];
var numquestion = [numquestion1, numquestion2, numquestion3, numquestion4, numquestion5];
var score = 0;
var heart = 0;

var n = Math.floor(Math.random() * (question.length))
// console.log(n + 1)
var arrnumquestion = numquestion[n]
// console.log(arrnumquestion)
var arrquestion = question[n]
// console.log(arrquestion)
var nq = Math.floor(Math.random() * (arrquestion.length))
var answer = [arrnumquestion[nq]]

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}
function allowDrop(ev) {
    ev.preventDefault();
}
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev, id) {
    // document.getElementById("bubble2.2").style.marginLeft = "33.3%";
    // document.getElementById("bubble2.2").style.marginRight = "40%";
    ev.preventDefault();
    var data = ev.dataTransfer.getData("url");
    console.log(data)
    // ev.target.appendChild(document.getElementById(data));
    var value = document.getElementById(id).textContent;
    document.getElementById(id).src = data;
    if (value == arrnumquestion[nq]) {
        score+=100;
        document.getElementById('Score').innerHTML = "Score :" + score
        game();
    }else{
        heart+=1
        console.log(heart)
        if(heart==5){
            sessionStorage.setItem("gameover", score);
            sessionStorage.setItem("url", "./Grade3.html");
            window.location = "GameOver.html"
        }else{
            document.getElementById("heart"+heart).src = "./image/heart1.png";
        game();
        }
    }
    console.log(value)
}
function game() {
    n = Math.floor(Math.random() * (question.length))
    // console.log(n + 1)
    arrnumquestion = numquestion[n]
    // console.log(arrnumquestion)
    arrquestion = question[n]
    // console.log(arrquestion)
    nq = Math.floor(Math.random() * (arrquestion.length))
    answer = [arrnumquestion[nq]]
    for (var i = 0; i < arrnumquestion.length; i++) {
        var nn = Math.floor(Math.random() * (arrquestion.length))
        if (answer.length != 3) {
            if (nn != nq) {
                answer.push(arrnumquestion[nn])
            }
        }
    }
    shuffle(answer);
    // console.log(answer)
    document.getElementById('wood').textContent = arrquestion[nq]
    // console.log(arrquestion[nq])
    // console.log(arrnumquestion[nq])
    document.getElementById('bubble1').textContent = answer[0]
    document.getElementById('bubble2').textContent = answer[1]
    document.getElementById('bubble3').textContent = answer[2]
}
function gameover(){
    var game = sessionStorage.getItem("gameover");
    var url = sessionStorage.getItem("url")
    document.getElementById("playagain").href= url
    document.getElementById("over").innerHTML = "You Score:" + game
    
}
