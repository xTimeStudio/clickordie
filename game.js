var i = 0;
var buttonClick = document.getElementById('buttonToClick');
var counterClick = document.getElementById('counter');
var bonusText = document.getElementById('bonus');
var bonusTextNext = document.getElementById('nextBonus');
bonusText.hidden = false;


buttonClick.addEventListener('click', buttonF);
function buttonF() {
  i++;
  counterClick.innerHTML = '<b>Clicked:</b>'+i;
  if(i>0 & i<20){
    bonusTextNext.innerHTML = 'Next bonus: double';
  }
  if(i>19 & i< 49) {
    i++;
    bonusTextNext.innerHTML = 'Next bonus: none';
    bonusText.innerHTML = 'DOUBLE BONUS';
    bonusText.style.color = 'red';
  }
  if(i>49 & i<250) {
    bonusTextNext.innerHTML = 'Next bonus: x3 click'
    bonusText.innerHTML = 'None BONUS';
    bonusText.style.color = 'black';
  }
  if(i>249 & i<350) {
    i++;
    i++;
    bonusTextNext.innerHTML = 'Next bonus: none';
    bonusText.innerHTML = 'x3 click BONUS';
    bonusText.style.color = 'red';
  }
  if(i>350 & i<500) {
    bonusTextNext.innerHTML = 'Next bonus: x4 click'
    bonusText.innerHTML = 'None BONUS';
    bonusText.style.color = 'black';
  }
}
