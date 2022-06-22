"use-strict"

// 값을 비교할 수 있는 '조건문'에 대해 알아보고 각자의 패를 비교하여 
// 가위바위보의 승자를 구하는 로직으로 구현해 보겠습니다. 

// 1. 사용자와 컴퓨터는 동시에 패를 낸다. (가위 바위 보 중 하나)
// 2. 컴퓨터는 매번 랜덤한 패를 낸다.
// 3. 서로의 패를 비교해서 승자를 정한다. 
// 4. 결과를 알려준다. 

let SCISSORS = "가위";
let ROCK = "바위";
let PAPER = "보";

let userInput = prompt('가위, 바위, 보!')

if(userInput !== SCISSORS && userInput !== ROCK && userInput !== PAPER) {
  alert('가위, 바위, 보 중 하나를 입력해야 합니다!' )
} else {
  let comInput; 

  let rnd = Math.random();
  
  
  if(rnd < 0.33) {
    comInput = SCISSORS;
  } else if (rnd < 0.66) {
    comInput = ROCK;
  } else {
    comInput = PAPER;
  }

  if(userInput === SCISSORS) {
    if(comInput === SCISSORS) {
      alert('컴퓨터: ' + comInput + '- 컴퓨터와 비겼습니다.');
    }else if (comInput === ROCK) {
      alert('컴퓨터: ' + comInput + '- 컴퓨터에게 이겼습니다.');
    } else {
      alert('컴퓨터: ' + comInput + '- 컴퓨터에게 졌습니다.');
    }
  } else if (userInput === ROCK) {
    if(comInput === SCISSORS) {
      alert('컴퓨터: ' + comInput + '- 컴퓨터에게 졌습니다.');
    }else if (comInput === ROCK) {
      alert('컴퓨터: ' + comInput + '- 컴퓨터와 비겼습니다.');
    } else {
      alert('컴퓨터: ' + comInput + '- 컴퓨터에게 이겼습니다.');
    }
  } else  {
    if(comInput === SCISSORS) {
      alert('컴퓨터: ' + comInput + '- 컴퓨터에게 이겼습니다.');
    }else if (comInput === ROCK) {
      alert('컴퓨터: ' + comInput + '- 컴퓨터에게 졌습니다.');
    } else {
      alert('컴퓨터: ' + comInput + '- 컴퓨터와 비겼습니다.');
    }
  }
}

// SWITCH 문으로 위의 IF문을 작성해보기 
let fruit = '오렌지'

switch (fruit) {
  case '오렌지':
  alert('오렌지입니다.!');
  break;
  case '배':
  alert('배 입니다.!');
  break;
  case '포도':
  alert('포도 입니다.!');
  break;
}



