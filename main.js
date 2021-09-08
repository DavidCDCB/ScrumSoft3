// https://desarrolloweb.com/manuales/manual-de-ecmascript-6.html

'use strict';

((doc, win) => {
	doc.addEventListener('DOMContentLoaded',event => {
		obtenerValores();
		
	});
})(document, window);

function obtenerValores(){
	const btnNumber = document.getElementsByName('numero');
	
		const btnOperacion = document.getElementsByName('operacion');
		const btnIgual = document.getElementsByName('igual')[0];
		const btnBorrar = document.getElementsByName('borrar')[0];
		console.log(btnBorrar);
		var result = document.getElementById('resultado');
		btnNumber.forEach(function (boton) {
			boton.addEventListener('click',function(){
				//agregarNumero()
				alert(boton.innerText);
	})
		});
		btnOperacion.forEach(function (boton) {
			boton.addEventListener('click',function(){
				//SeleccionarOperacion()
				alert(boton.innerText);
	})
		});
		btnIgual.addEventListener('click',function(){
			//caclcular();
			//ActualizarDisplay();
		});
		btnBorrar.addEventListener('click',function(){
			//borrar();
			//ActualizarDsiplay();
		});
		
}



