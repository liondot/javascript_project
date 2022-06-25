// 게임로직 
// 1. 컴퓨터부터 시작
// 2. 사용자가 컴퓨터의 슛 버튼을 클릭 
// 3. 컴퓨터는 2점슛을 쏠 지, 3점 슛을 쏠 지 랜덤으로 결정 
// 4. 슛이 성공하면 컴퓨터의 점수가 올라간다.
// 5. 사용자가 슛을 넣을 차례
// 6. 사용자가 2점 슛 또는 3점슛 버튼을 클릭 
// 6-1 2점슛의 성공률은 50%, 3점슛의 성공률은 33%
// 7. 슛이 성공하면 사용자의 점수를 올려준다.
// 8. 컴퓨터의 차례로 바뀌고 남은 슛 횟수를 1만큼 줄인다.
// 9. 남은 슛 횟수가 0이 될때 까지 1~8번 항목을 반복
// 10. 양쪽의 점수를 비교해 승자를 정한다

let comScore = 0;
let userScore = 0;
let isComputerTurn = true;
let shotsLeft = 5;

function onComputerShoot() {
  if (!isComputerTurn) {
    return;
  }


  let computerButtons = document.getElementsByClassName('btn-computer');

  for (let i = 0; i < computerButtons.length; i++) {
    computerButtons[i].disabled = true;
  }

  let userButton = document.getElementsByClassName('btn-user');

  for (let i = 0; i > userButton.length; i++) {
    userButton[i].disabled = false;
  }

  let shootType = Math.random() < 0.5 ? 2 : 3;
  let textElem = document.getElementById('text');


  if (shootType === 2) {
    if (Math.random() < 0.5) {
      textElem.innerHTML = '컴퓨터가 2점슛을 성공시켰습니다!'
      comScore += 2;
      let comScoreElem = document.getElementById('computer-score');
      comScoreElem.innerHTML = comScore;

    } else {
      textElem.innerHTML = '컴퓨터가 2점슛을 실패했습니다.'
    }
  } else {
    if (Math.random() < 0.33) {
      textElem.innerHTML = '컴퓨터가 3점슛을 성공시켰습니다!'
      comScore += 3;
      let comScoreElem = document.getElementById('computer-score');
      comScoreElem.innerHTML = comScore;
    } else {
      textElem.innerHTML = '컴퓨터가 3점슛을 실패했습니다!'
    }
  }

  isComputerTurn = false;

}

function onUserShoot(shootType) {

  if (isComputerTurn) {
    return;
  }

  



  let textElem = document.getElementById('text');
  let userScoreElem = document.getElementById('user-score');


  if (shootType === 2) {
    if (Math.random() < 0.5) {
      textElem.innerHTML = '사용자가 2점슛을 성공했습니다.'
      userScore += 2;
      userScoreElem.innerHTML = userScore;
    } else {
      textElem.innerHTML = '사용자가 2점슛을 실패했습니다.'
    }
  } else {
    if (Math.random() < 0.33) {
      textElem.innerHTML = '사용자가 3점슛을 성공했습니다.'
      userScore += 3
      userScoreElem.innerHTML = userScore;
    } else {
      textElem.innerHTML = '사용자가 3점슛을 실패했습니다.'
    }
  }

  isComputerTurn = true;

  shotsLeft--;
  let shotsLeftEle = document.getElementById('shots-left');
  shotsLeftEle.innerHTML = shotsLeft;

  if(shotsLeft === 0) {
    if(userScore > comScore) {
      textElem.innerHTML = "승리했습니다."
    } else if(userScore < comScore) {
      textElem.innerHTML = "아쉽게도 졌습니다"
    } else {
      textElem.innerHTML = "비겼습니다."
    }
    return;
  }

  let computerButtons = document.getElementsByClassName('btn-computer');

  for (let i = 0; i < computerButtons.length; i++) {
    computerButtons[i].disabled = false;
  }

  let userButton = document.getElementsByClassName('btn-user');

  for (let i = 0; i > userButton.length; i++) {
    userButton[i].disabled = true;
  }
}