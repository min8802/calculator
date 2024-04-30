let result = 0;
let operator = "";

const resultEl = document.querySelector(".result");


resultEl.innerHTML = result;

//0이면 number 값으로 교체, 그것이 아니면 원래 숫자에 더하기
//23 글자가 넘어가지면 입력이 안되게 -> 23글자 넘어가면 함수를 끝내버리자 이런패턴이 많이쓰임
//return은 값을 반환하고 '함수를 끝낸다는 의미'가 있다 -> return만 하면 함수끝난다!!
//값을 반환안하고 return만 하면 함수만 끝난다는 의미임
// return 밖에 없을 때는 코드 블록을 없애도 똑같이 동작한다 ! 오 ~~
//어떤 조건이 충족되지 않으면 함수를 끝낸다는 개념 많이 사용

function onClickNumber(number) {
    if (resultEl.innerHTML.length >= 22) return;
    

    if (resultEl.innerHTML === "0") {
      resultEl.innerHTML = number;
    } else {
      resultEl.innerHTML += number;
    }

    console.log(resultEl.innerHTML.length);
  }

// + 눌렀을 때 현재 입력한 숫자를 저장하는데 
// 문자를 숫자로 바꿔서 저장 그리고 0으로 교체


function onClickOperator (inputOperator) {
    result = +resultEl.innerHTML;
    resultEl.innerHTML = 0;
    operator = inputOperator;
    console.log(operator)
}

// 함수안에서 변수에 값 할당해줘도 위에있는 전역변수 값이 바뀌네? operator

// 문자를 숫자로 바꾸는 방법
// Number(), parseInt(), 문자앞에 +
// 연산자 '+', '-', '*' 를 저장

function onClickEnter() {
  switch (operator) {
    case "+":
      result += +resultEl.innerHTML;
      resultEl.innerHTML = result;
      break;
    case "-":
      result -= +resultEl.innerHTML;
      resultEl.innerHTML = result;
      break;
    case "*":
      result *= +resultEl.innerHTML;
      resultEl.innerHTML = result;
      break;
    case "/":
      result = parseInt(result / +resultEl.innerHTML, 10) ;
      resultEl.innerHTML = result;
      break;
    default:
      console.log("잘못된 연산자입니다.");
  }
}