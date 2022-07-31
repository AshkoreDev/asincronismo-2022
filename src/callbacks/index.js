// CALLBACKS, función que recibe otra función para ser ejecutada según sea el caso.

function sum(num1, num2) {
	
	return num1 + num2;
}


// Función que recibe el callback(sum), para ser ejecutada.
function calc(num1, num2, callback) {

	return callback(num1, num2);
}

console.log(calc(2, 2, sum));



// setTimeout por sí misma es un Callback.
setTimeout(() => {

	console.log('Hola JS.');
}, 2000);


function grettin(name) {
	
	console.log(`Hola ${name}...`);
}

setTimeout(grettin, 2000, 'Alex');