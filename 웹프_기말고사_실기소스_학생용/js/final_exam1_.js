//객체 리터럴을 사용하여 객체 생성
//한글용
// const person = {
//   이름: "박근환", // 이름 속성
//   나이: 23, // 나이 속성
//   취미: "여행", // 취미 속성
// };

//result.innerText = `안녕하세요. ${person.취미}이 취미인 ${person.나이}세 ${person.이름}입니다.`; 
const person = {
    name: "박근환", // 이름 속성
    age: 23, // 나이 속성
    hobby: "여행", // 취미 속성
  };

  //테스트용 코드
//console.log(person.이름)

// <h2 id="result"> </h2> 안녕하세요 여행이 취미인 23세 박근환입니다를 출력하는 코드

//결과값 선언
const result = document.querySelector("#result"); 
//result에 innerText로 출력
result.innerText = `안녕하세요. ${person.hobby}이 취미인 ${person.age}세 ${person.name}입니다.`; 

