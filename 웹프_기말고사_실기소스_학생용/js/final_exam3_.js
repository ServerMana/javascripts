
// 프로미스 함수 생성
function checkNumber(num) {
  return new Promise((resolve, reject) => {
    // 숫자가 양수인 경우
    if (num > 0) {
      resolve(num);
    }
    // 숫자가 음수인 경우
    else {
      reject(num);
    }
  });
}

// 프롬포트로 숫자 입력

let number = prompt("숫자를 입력하세요 : ");

// 프로미스 함수 호출
checkNumber(number)
  .then((num) => {
    // 양수인 경우
    document.getElementById("result").innerText = `${num}은(는) 양수입니다`;
  })
  .catch((num) => {
    // 음수인 경우
    document.getElementById("result").innerText = `${num}은(는) 음수입니다`;
  });
