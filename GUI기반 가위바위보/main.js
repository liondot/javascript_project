"use-strict"

// let value = average(6 , 4)

// function average(num1, num2) {
//   let sum = num1 + num2;
//   let avg = sum / 2;

//   return avg
// }

// console.log(value)
let SCISSORS = "가위";
let ROCK = "바위";
let PAPER = "보";



function onButtonClick(userInput) {

  let comInput; 
  let rnd = Math.random();
  
  if(rnd < 0.33) {
    comInput = SCISSORS;
  } else if (rnd < 0.66) {
    comInput = ROCK;
  } else {
    comInput = PAPER;
  }

  let result = '컴퓨터: ' + comInput;

  if(userInput === SCISSORS){
    if(comInput === SCISSORS) {
       result += '- 컴퓨터와 비겼습니다.';
    }else if (comInput === ROCK) {
      result += '- 컴퓨터에게 졌습니다.';
    } else {
      result += '- 컴퓨터에게 이겼습니다.';
    }
  }  else if (userInput === ROCK) {
    if(comInput === SCISSORS) {
      result += '- 컴퓨터에게 이겼습니다.';
    }else if (comInput === ROCK) {  
      result += '- 컴퓨터와 비겼습니다.';
    } else {
      result += '- 컴퓨터에게 졌습니다.';
    }
  } else {
    if(comInput === SCISSORS) {
     result += '- 컴퓨터에게 졌습니다.';
    }else if (comInput === ROCK) {
      result += '- 컴퓨터에게 이겼습니다.';
    } else {
     result += '- 컴퓨터와 비겼습니다.';
    }
  }
  
alert(result)

}
