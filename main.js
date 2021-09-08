// https://desarrolloweb.com/manuales/manual-de-ecmascript-6.html

'use strict';

var num1 = Infinity;
var num2 = Infinity;
var operator = null;

((doc, win) => {
	doc.addEventListener('DOMContentLoaded',event => {

		doc.querySelectorAll('.number').forEach((x)=>{
			x.addEventListener('click',(cb)=>{
				assignNumber(parseInt(cb.target.textContent));
				console.log(num1);
			});
		});
	});
})(document, window);

const assignNumber = number => {
	if (operator == null) {
		if (num1 === Infinity) {
			num1 = number;
		}
		else {
			num1 = (num1*10) + number;
		}
	}
	else {
		if (num2 === Infinity) {
			num2 = number;
		}
		else {
			num2 = (num2*10) + number;
		}
	}
};

const assignOperator = inOperator => {
	if (operator == null) {
		operator = inOperator;
	}
	else {
		num1 = operate();
		operator = operator;
	}
};

const operationResult = () => {
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