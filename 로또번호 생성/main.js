"use-strict"

// 의사코드 
// 1. 숫자 6개를 하나씩 넣을 6개의 변수 (변수 1~6)를 준비 
// 2. 1부터 45까지의 랜덤값 생성 
// 3. 기존에 선택한 숫자와 같다면 다시 2로 이동 
// 4. 다르다면 변수 1에 값을 넣음 
// 5. 2~4번 과정을 반복하여 변수 2, 3, 4, 5, 6에 할당 

let num1, num2, num3, num4, num5, num6

num1 = Math.floor(Math.random() * 45 + 1);

let list = [];

for (let i = 1; i <= 45; i++) {
  list.push(i);
}

let result = [];

for (let i = 0; i < 6; i++) {
  let index = Math.floor(Math.random() * list.length);

  // 랜덤으로 선택한 인덱스의 값 

  let num = list[index];

  // 배열에서 인덱스의 값 제거 
  list.splice(index, 1);

  result.push(num);
  console.log(` num값 : ${num}, list값 : ${list}`);

}

// console.log(`결과값, ${result}`);

for (let i = 0; i < 6; i++) {
  document.write(`<span class = "ball">` + result[i] + `</span>`);
}