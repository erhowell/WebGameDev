color = null;
timerStart = null;
var score =0;
var sec = 60;
var highScore =0;
var rgb = {
  red: 0,
  green: 0,
  blue: 0,
  newColor : function(){
    this.red = Math.floor(Math.random() * Math.floor(255));
    this.green = Math.floor(Math.random() * Math.floor(255));
    this.blue = Math.floor(Math.random() * Math.floor(255));
  },
  setRgb : function(){
    this.newColor();
    return "rgb("+this.red +", "+this.blue+", "+ this.green +")"
  }
};

function startGame(){
  var timerStart = setInterval(myTimer, 1000);
  document.getElementById("score").innerText = "Score: " + String(score);
  color = setColors();
}
function setColors(){
  var options = document.getElementsByClassName("colorButtons");
  var pick = Math.floor(Math.random() * Math.floor(4));
  for(var i= 0; i < options.length; i++){
    var c = rgb.setRgb();
    options[i].style.backgroundColor = c;
    options[i].value = c.trim();
  }
  color = options[pick].style.backgroundColor;
  document.getElementById("color").innerText= "Which button is the color " + color;
  return color;
}

function checkAnswer(objButton){
  var message = document.getElementById("message");
  var pickedColor = document.getElementById("pText");
  var correctColor = document.getElementById("aText");
  if(objButton.value == color){
    message.innerText ="Congrats, your are correct";
    score++;
    document.getElementById("score").innerText = "Score: " + String(score);
  }
  else{
    message.innerText = "Sorry, you are incorrect";
  }
  document.getElementById("colorAns").style.backgroundColor = color;
  document.getElementById("colorPick").style.backgroundColor = objButton.value;
  pickedColor.innerHTML = "The color you picked is " + objButton.value;
  setColors();
}

function myTimer() {
    sec -= 1;
    if(sec < 0){
      window.clearInterval(timerStart);
      stopGame();
    }
    else{
    document.getElementById("time").innerHTML = "Seconds Left: " + String(sec);
    }
}
function stopGame(){
  document.getElementById("gameOver").style.display = "inline-block";
  document.getElementById("game").style.display ="none";
  document.getElementById("aText").style.display ="none";
  document.getElementById("pText").style.display ="none";
}
function reset(){
  document.getElementById("gameOver").style.display = "none";
  document.getElementById("game").style.display = "inline-block";
  document.getElementById("aText").style.display ="inline-block";
  document.getElementById("pText").style.display ="inline-block";
  sec = 60;
  if(highScore < score){
    highScore = score;
    document.getElementById("hScore").innerText = "High Score: " + String(score);
  }
  score = 0;
  startGame();
}