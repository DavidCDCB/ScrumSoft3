// https://desarrolloweb.com/manuales/manual-de-ecmascript-6.html

'use strict';

var num1 = Infinity;
var num2 = Infinity;
var operator = null;

((doc, win) => {
	doc.addEventListener('DOMContentLoaded', event => {
		obtenerValores();

	});
})(document, window);

function obtenerValores() {
	const btnNumber = document.getElementsByName('numero');

	const btnOperacion = document.getElementsByName('operacion');
	const btnIgual = document.getElementsByName('igual')[0];
	const btnBorrar = document.getElementsByName('borrar')[0];

	var result = document.getElementById('resultado');
	btnNumber.forEach(function (boton) {
		boton.addEventListener('click', function () {
			assignNumber(parseInt(boton.innerText));
			console.log(num1, operator, num2);
		})
	});
	btnOperacion.forEach(function (boton) {
		boton.addEventListener('click', function () {
			assignOperator(boton.innerText);
			console.log(operator);
		})
	});
	btnIgual.addEventListener('click', function () {
		alert(operationResult());
	});
	btnBorrar.addEventListener('click', function () {
		//borrar();
		//ActualizarDsiplay();
	});

}
const assignNumber = number => {
	if (operator == null) {
		if (num1 === Infinity) {
			num1 = number;
		}
		else {
			num1 = (num1 * 10) + number;
		}
	}
	else {
		if (num2 === Infinity) {
			num2 = number;
		}
		else {
			num2 = (num2 * 10) + number;
		}
	}
};

const assignOperator = inOperator => {
	if (operator == null) {
		operator = inOperator;
	}
	else {
		operationResult();
		operator = inOperator;
	}
};

const operationResult = () => {
	if (operator == "+") {
		num1 = num1 + num2;
	}
	else if (operator == "-") {
		num1 = num1 - num2;
	}
	else if (operator == "*") {
		num1 = num1 * num2;
	}
	else if (operator == "÷") {
		if (num2 != 0) {
			num1 = num1 / num2;
		}
		else {
			num1 = Infinity
			num2 = Infinity
			operator = null;
			return "Math Error"
		}
	}
	num2 = Infinity
	operator = null;
	return num1;
}
