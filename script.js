function add (a, b) {
    return Number(a)+Number(b);
}

function subtract(a,b) {
    return Number(a)-Number(b);
}

function multiply (a,b) {
    return Number(a)*Number(b);
}

function divide (a, b) {
    return Number(a)/Number(b);
}

function operate(operator, num1, num2) {
    if (operator == '+') return add(num1, num2);
    else if (operator == '-') return subtract(num1, num2);
    else if (operator == '*') return multiply(num1, num2);
    else if (operator == '/') return divide(num1, num2);
}

display1 = undefined;
display = document.querySelector('.display');

curroperator = undefined;

operator = document.querySelectorAll('.operator');
operator.forEach(op => op.addEventListener('click', function(event) {
    console.log('entered');
    display1 = display.textContent;
    display.textContent = undefined;
    curroperator = event.target.textContent;
    console.log(display1);
    console.log(curroperator);
}));

display2 = undefined;
equal = document.querySelector('.equals');
equal.addEventListener('click', function(event) {
    display2 = display.textContent;
    console.log(display2);
    answer = operate(curroperator, display1, display2);
    console.log(answer);
    display.textContent = answer;
});

clear = document.querySelector('.clear');
clear.addEventListener('click', function(event) {
    display.textContent = undefined;
    display1 = undefined;
    display2 = undefined;
    curroperator = undefined;
});

numbers = document.querySelectorAll('.number');
numbers.forEach(button => button.addEventListener('click', function(event) {
    display.textContent += event.target.textContent;
}));