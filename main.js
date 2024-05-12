let result = "";
let result1 = "";
let operator = "";
let flag = false;
let flag1 = false;

const resultEl = document.querySelector(".result");
const resultEl1 = document.querySelector(".result1");
resultEl.innerHTML = 0;
resultEl1.innerHTML = 0;


function onClickNumber(number) {
  if(flag === false) {
    result += number;
    resultEl.innerHTML = result;
  } else {
    resultEl.innerHTML = number;
  }
};

function onClickOperator(inputOperator) {
  result1 = result + inputOperator;
  resultEl.innerHTML = result;
  operator = inputOperator;
  flag = true;
  resultEl1.innerHTML = result1;
  console.log(inputOperator);
};

function onClickEnter() {
  switch(operator) {
    case '+':
      result1 = +result + +resultEl.innerHTML;
      resultEl1.innerHTML = +result + operator + resultEl.innerHTML + "=" + result1;
      resultEl.innerHTML = result1;
      result = result1;
      flag = false;
      flag1 = true;
      break;
    case '-':
      result1 = +result - +resultEl.innerHTML;
      resultEl1.innerHTML = +result + operator + resultEl.innerHTML + "=" + result1;
      resultEl.innerHTML = result1;
      result = result1;
      flag = false;
      break;
    case '*':
      result1 = +result * +resultEl.innerHTML;
      resultEl1.innerHTML = +result + operator + resultEl.innerHTML + "=" + result1;
      resultEl.innerHTML = result1;
      result = result1;
      flag = false;
      break;
    case '/':
      result1 = +result / +resultEl.innerHTML;
      resultEl1.innerHTML = +result + operator + resultEl.innerHTML + "=" + result1;
      resultEl.innerHTML = result1;
      result = result1;
      flag = false;
      break;
  };
};

function onClickDel () {
  resultEl.innerHTML = resultEl.innerHTML.substring(0,resultEl.innerHTML.length-1);
  if(resultEl.innerHTML.length == 0) {
    resultEl.innerHTML = 0;
  };
}

