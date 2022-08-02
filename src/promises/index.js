// PROMISES, tiene 3 estados (pendiente, cumplido, rechazado).
const cows = 15;

const countsCows = new Promise((resolve, reject) => {

	if(cows > 10) {

		resolve(`We have ${cows} cows on the farm.`);

	} else {

		reject('There is no cows on the farm.');
	}
});

// Then para capturar el resolve.
countsCows.then((result) => {

	console.log(result);
	// Catch para capturar el reject.
}).catch((error) => {

	console.log(error);
	// Finally para cuando la promesa terminó,
	// sin importar si fue resolve o reject.
}).finally(() => console.log('Finally.'));
