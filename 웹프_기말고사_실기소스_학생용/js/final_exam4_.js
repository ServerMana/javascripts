
// setTimeout 함수를 사용하여 1초 후에 실행되는 프로미스를 생성
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve 함수를 호출하여 프로미스를 성공 상태로 변경
    resolve();
  }, 1000);
});

// 프로미스가 성공 상태가 되면 실행되는 then 메소드를 사용하여 출력을 처리
promise.then(() => {
  // HTML 요소를 선택하여 내용을 변경합니다.
  //exam2와 같이 쿼리 셀렉터로도 가능
  document.getElementById("result").innerText = "즐거운 방학이다!";
});
