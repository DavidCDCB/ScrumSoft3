// https://desarrolloweb.com/manuales/manual-de-ecmascript-6.html

'use strict';

var num1 = Infinity;
var num2 = Infinity;
var operator = null;

((doc, win) => {
	doc.addEventListener('DOMContentLoaded',event => {
		// ...
	});
})(document, window);

function assignNumber(number) {
	if (num1 === Infinity) {
		num1 = number;
	}
	else if (num2 === Infinity) {
		num2 = number;
	}
}

function assignOperator(inOperator) {
	if (operator == null) {
		operator = inOperator;
	}
	else {
		num1 = operate();
		operator = operator;
	}
}

function operate() {
	if (operator == "+") {
		return num1 + num2;
	}
	else if (operator == "-") {
		return num1 - num2;
	}
	else if (operator == "*") {
		return num1 * num2;
	}
	else if (operator == "/") {
		if (num2 != 0) {
			return num1 / num2;
		}
		return "Math Error"
	}
}
