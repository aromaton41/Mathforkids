var hearts = 0;
var score = 0;
var shark = 50;
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}
function answer(a, id) {
   var x = document.getElementById(id).textContent
    if (x == correct) {
        score += 100;
        game();
    }else{
        hearts +=1;
        if(hearts == 5){
            sessionStorage.setItem("gameover", score);
            sessionStorage.setItem("url", "./MenuGrade1.html");
            window.location = "GameOver.html"
            
        }else{
            shark = shark - 10;
             document.getElementById("heart"+hearts).src = "./image/heart1.png";
             document.getElementById("shark").style.paddingLeft = shark + "%";
             game();
        }
       
    }
}
function start() {
    document.getElementById("Math").innerHTML = num1 + " + " + num2
    document.getElementById("Score").innerHTML = "Score:" + score
    document.getElementById("choice1").innerHTML = choice[0]
    document.getElementById("choice2").innerHTML = choice[1]
    document.getElementById("choice3").innerHTML = choice[2]
}
function game(){
    num1 = Math.floor((Math.random() * 100) + 1);
    num2 = Math.floor((Math.random() * 100) + 1);
    correct = num1 + num2
    choice = [Math.floor((Math.random() * 200) + 1), Math.floor((Math.random() * 200) + 1), correct]
    shuffle(choice)
    start()
}
function gameover(){
    var game = sessionStorage.getItem("gameover");
    var url = sessionStorage.getItem("url")
    document.getElementById("playagain").href= url
    document.getElementById("over").innerHTML = "You Score:" + game
}