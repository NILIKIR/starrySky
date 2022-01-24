/*
 * Javascript změny časovače
 * Projekt: Vzpovídky
 * Vytvořil: Janek
 */


var today;
var date;
var time;
var dateTime;
var year;
var yearIncrement=0;
var month;
var monthIncrement=0;
var day;
var dayIncrement=0;
var hour;
var hourIncrement=0;
var hourIncrementPom=0;
var minute;
var minuteIncrement=0;
var minuteIncrementPom=0;
var seconde;
var secondeIncrement=0;
var secondeIncrementPom=0;
var clock = 0;
var unor = 28;
var pocetVterin = 0;
var pocetDni = 0

function stanovPocetDni() {
  pocetDni = 0;
  var yearPom = today.getFullYear() + 30;
  var monthPomII = today.getMonth()+1;
  var monthPom = monthPomII;
  var monthStop = 12;
  var dayPom = today.getDate()+1;
  var dayStop = -5;


  for(var iy = yearPom-30; iy<=yearPom;iy++){
    for(var im = monthPom; im<=monthStop;im++){
      dayStop = switchMesice(im,iy);
      if(im === monthStop&&iy+1===yearPom){dayStop = dayPom-1;}
      for(var id = dayPom; id<=dayStop;id++){
        pocetDni++;
      }
      dayPom = 1;
    }
    monrhPom = 1;
    if (iy+1===yearPom){
      monthStop = monthPomII;
    }
  }
  pocetVterin = pocetDni*86400;
}

function clockSpeedUp(currentStep) {

  /*Navyšování hodin, minut a vteřin*/
  hourIncrementPom = hourIncrementPom + pocetVterin*currentStep/60/60;
  hourIncrement = Math.floor(hourIncrementPom);
  minuteIncrementPom = minuteIncrementPom + pocetVterin*currentStep/60;
  minuteIncrement = Math.floor(minuteIncrement);
  secondeIncrementPom = secondeIncrementPom + pocetVterin*currentStep;
  secondeIncrement = Math.floor(secondeIncrementPom);
  dayIncrement = dayIncrement + pocetDni*currentStep;

  clock = clock + 1;
  /*Zastavení timeru*/
  if(clock === clockStop){
    clock = 0;
    yearIncrement = 30;
    monthIncrement = 0;
    dayIncrement = 0;
    hourIncrement = 0;
    minuteIncrement = 0;
    secondeIncrement = 0;
    clearInterval(timer);
  }
}

function changeTime(){
  year = today.getFullYear()+yearIncrement;
  month = today.getMonth()+1+monthIncrement;
  day = today.getDate() + Math.round(dayIncrement);

  hour = today.getHours() + hourIncrement;
  minute = today.getMinutes() + minuteIncrement;
  seconde = today.getSeconds() + secondeIncrement;

  /*Opravy přetečení dní a měsíců*/
  increase(switchMesice(month,year));

  /* Opravy přetečených čísel */
  if (seconde>59){ seconde = seconde%60; }
  if (minute>59){ minute = minute%60; }
  if (hour>23){ hour = hour % 24; }
  if (month>12){ month = month - 12; }

  /* Opravy prázdných míst v datumech */
  if (hour < 10){ hour = "0"+hour.toString() }
  if (minute < 10){ minute = "0"+minute.toString() }
  if (seconde < 10){ seconde = "0"+seconde.toString() }
  if (day < 10){ day = "0"+day.toString() }
  if (month < 10){ month = "0"+month.toString() }


  date = year+'-'+month+'-'+day;
  time = hour + ":" + minute + ":" + seconde;
  dateTime = date+' '+time;
  document.getElementById('cas').innerHTML = dateTime;
  today = new Date();
  unor = 28;
}

/* navyšuje a převrací měsíce, dny a roky*/
function increase(pom){
  month = month + Math.floor((day-1)/pom);
  monthIncrement = monthIncrement + Math.floor((day-1)/pom);
  monthIncrement = monthIncrement - 12*Math.floor((month-1)/12);
  year = year + Math.floor((month-1)/12);
  yearIncrement = yearIncrement + Math.floor((month-1)/12);
  dayIncrement = dayIncrement - pom*Math.floor((day-1)/pom)
  day = day - (pom)*Math.floor((day-1)/pom);
}

function switchMesice(monthPom,yearPom) {
  switch(monthPom%12) {
  case 1:
    return(31);
    break;
  case 2:
    if ((yearPom%4===0&&yearPom%100!=0)||(yearPom%400===0)){ return 29; }else{return 28;}
    break;
  case 3:
    return(31);
    break;
  case 4:
    return(30);
    break;
  case 5:
    return(31);
    break;
  case 6:
    return(30);
    break;
  case 7:
    return(31);
    break;
  case 8:
    return(31);
    break;
  case 9:
    return(30);
    break;
  case 10:
    return 31;
    break;
  case 11:
    return 30;
    break;
  case 0:
    return 31;
    break;
  }
}
