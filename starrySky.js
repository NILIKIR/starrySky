/*
 * Javascript animace oblohy
 * Projekt: Vzpovídky
 * Vytvořil: Janek
 */
var pocetHvezd = 1000; /*Výkon je přímo závislý na počtu hvězd*/
var hvezdy = [];
var width;
var height;
var alpha = Math.PI/4; /*Velikost poloviny zorného pole do*/
var z_step=1;

window.onresize = resize;

function resize(){
  width = window.innerWidth;
  myCanvas.setAttribute('width', width);
  height = window.innerHeight;
  myCanvas.setAttribute('height', height);
  wave();
}

function starsSpeedUp(currentStep) {
  hvezdy.forEach((hvezda, i) => {
    hvezda.zShift(z_step*currentStep*9000);
  });
}

function wave(){
  ctx.beginPath();
    /*čištění plátna*/
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, width, height);
    /*vykreslování hvězd*/

  for (let i = 0; i < pocetHvezd ; i++){
    if (hvezdy[i].outOfVision()){
       hvezdy[i] = new star()
    }else{
      ctx.beginPath();
      ctx.fillStyle = hvezdy[i].col(currentStep);
      ctx.moveTo(hvezdy[i].xPom, hvezdy[i].yPom);
      ctx.arc(hvezdy[i].xPom,hvezdy[i].yPom,hvezdy[i].dPom(),0,Math.PI * 2);
      ctx.fill();
    }
    hvezdy[i].zShift(z_step);
  }
}
