const check = document.getElementById('prime');

check.addEventListener('submit', (event) => {
  event.preventDefault();
  primeNumber();
});

const checkPrime = (element,num) => {
    const inputControl = element.parentElement;
    const output = inputControl.querySelector('.output')
    if(num === '1') {
      output.textContent = `${num} is prime`
    }
    if(num == 2){
      output.textContent = `${num} is not prime`
    }
    for (var i = 2; i < num ; i++) {
      if (num % i == 0) {
        output.textContent = `${num} Not prime`;
        break;
      }
      output.textContent = `${num} is prime`;
    }
};

const primeNumber = () => {
  const number1val = document.getElementById('number1');
  const number2val = document.getElementById('number2');
  const number3val = document.getElementById('number3');

  if (number1val.value == '') {
    number1val.style.border = '1px solid red'
  } else {
    checkPrime(number1, number1val.value);
    number1val.style.border = '1px solid black'
  }
  if (number2val.value == '') {
    number2val.style.border = '1px solid red'
  } else {
    checkPrime(number2, number2val.value);
    number2val.style.border = '1px solid black'

  }
  if (number3val.value == '') {
    number3val.style.border = '1px solid red'
  } else {
    checkPrime(number3, number3val.value);
    number3val.style.border = '1px solid black'

  }
};
