// 문자열의 요소 선언
const fruits = ["apple", "banana", "orange", "grape"];

// <h2 id="list"> </h2>과일리스트 출력
//list에 쿼리 셀렉터로 추가
const listHeading= document.querySelector("#list"); 
listHeading.innerText = fruits.join(", ");

// <h2 id="result"> </h2>글자길이 출력
//result에 getElementByID로 추가
const resultHeading = document.getElementById("result");
resultHeading.innerText = fruits.map((fruit) => fruit.length).join(", ");
