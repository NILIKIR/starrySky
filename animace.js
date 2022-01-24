/*
 * Centrální javascript
 * Projekt: Vzpovídky
 * Vytvořil: Janek
 */
var timer;
var clock = 0;
var clockStop = 100;
var currentStep = 0;
var myCanvas;
var ctx;
var speed = 0;
var maxSpeed = 0;
var accStep = 400/91/Math.pow(clockStop,2);


window.onload = function onload() {
    myCanvas = document.getElementById("my_canvas");
    ctx = myCanvas.getContext("2d");
    ctx.save();

    for (let i = 0; i < pocetHvezd; i++){
      hvezdy[i] = new star()
    }

    resize();
    setInterval(visualize,40);

    today = new Date();
}

function visualize(){/*rebuild obrazovky*/
  wave();
  changeTime();
}

function countUp(){/*zrychlení běhu na 4 vtěřiny*/
  stanovPocetDni();
  timer = setInterval(speedUp,40);
}

function speedUp() {
  /*Posun o jeden zrychlený krok v závislosti na vlastní množině pravděpodobnosti*/
  if (clock < clockStop/20*7){
    acceleration = accStep;
  }else if ((clock => clockStop/20*7) && (clock < clockStop/20*13)){
    acceleration = 0;
  }else if (clock => clockStop/20*13){
    acceleration = -accStep;
  }
  speed = speed + acceleration;
  var currentStep = speed;
  starsSpeedUp(currentStep);
  clockSpeedUp(currentStep);
}
