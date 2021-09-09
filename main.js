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
		
		operationResult();
	});
	btnBorrar.addEventListener('click', function () {
		Borrar();
		ActualizarDisplay();
	});

}
function Borrar(){
	num1= Infinity;
	num2 =Infinity
	operator = null;
	document.getElementById("imprimir").value ="";
}

function ActualizarDisplay(){
	let numero1, numero2, operador;
	if (num1 == Infinity){
		numero1 = "";
	}else{
		numero1 = num1.toString();
	}
	if (num2 == Infinity){
		numero2 = "";
	}else{
		numero2 = num2.toString();
	}
	if (operator == null){
		operador = "";
	}else{
		operador = operator;
	}
	document.getElementById("imprimir").value = numero1 +operador+ numero2;

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
	ActualizarDisplay();
};

const assignOperator = inOperator => {
	if (operator == null) {
		operator = inOperator;
	}
	else {
		operationResult();
		operator = inOperator;
	}
	ActualizarDisplay();
};

const operationResult = () => {
	if (operator == "+") {
		num1 = num1 + num2;

	}
	else if (operator == "-") {
		num1 = num1 - num2;
	}
	else if (operator == "x") {
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
			num1 = "Math Error"
			ActualizarDisplay();
		}
	}
	num2 = Infinity
	operator = null;
	ActualizarDisplay();
}
