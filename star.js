/*
 * Objěkt hvězda
 * Projekt: Vzpovídky
 * Vytvořil: Janek
 */

function star(){
  this.x = (0.5-Math.random())*2;/*Souřadnice x, y, z*/
  this.y = (0.5-Math.random())*2;
  this.z = Math.random();
  this.xy = Math.sqrt(this.x*this.x+this.y*this.y);/*Vzdálenost hvězdy od středu systému*/
  this.c = Math.sqrt(this.xy*this.xy+this.z*this.z);/*Vzdálenost hvězdy od pozorovatele*/
  this.d = Math.floor(Math.random()*1000)/1000;/*Poloměr hvězdy*/
  this.xPom = height*(0.5-Math.atan(this.x/this.z)/alpha/2);
  this.yPom = width*(0.5-Math.atan(this.y/this.z)/alpha/2);

  this.outOfVision = function(){ /*navrací, jestli je hvězda mimo zorné pole*/
    if (this.xPom<0||this.xPom>width||this.yPom<0||this.yPom>height||this.z<0){return true}else {return false}
  }
  this.zShift = function(pom){/*Přepočítávání hodnot závislých na z-ové ose*/
    this.z = this.z-0.0005*pom;
    this.c = Math.sqrt(this.xy*this.xy+this.z*this.z);
    this.xPom = width*(0.5-Math.atan((this.x)*2/this.z)/alpha/2);
    this.yPom = height*(0.5-Math.atan((this.y)*2/this.z)/alpha/2);
  }
  this.dPom = function(){/*Dopočítávání absolutní velikosti oběktu*/
    return Math.atan(this.d/this.c)/alpha;
  }
  this.col = function(currentStep){/*bude upraveno ve vyšších verzích na realističtější výběr spolu s velikostmi hvězd*/
    return "white";
  }
}
