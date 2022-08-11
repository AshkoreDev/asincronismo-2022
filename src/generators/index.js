// Generadores, es una función generadora que muestra un objeto iterable Generador.
// Con él se puede pausar y reanudar la función, junto a la palabra Yield.

function* gen() {
	
	yield 1;
	yield 2;
	yield 3;
}

const g = gen();
// Para acceder a los valores de Yield en cada iteración.
// Next se usa para obtener la siguiente iteración.
console.log(g.next().value);



// Iterar con un array.
function* iterate(array) {

	for(let value of array) {

		yield value;
	}
}

const array = ['Julia', 'Luna', 'Marta', 'Grecia', 'Ana'];
const it = iterate(array);

console.log(it.next().value);