
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi, callback) {
	
	// Instancia a XMLHttpRequest.
	let xhttp = new XMLHttpRequest();

	// Abrir conexión. Los argumentos de la función (Tipo de petición, url, true para habilitarlo).
	xhttp.open('GET', urlApi, true);

	// Los estados de la solicitud. 
	// 0 no se ha inicializado.
	// 1 está cargando.
	// 2 ya se ejecutó el valor de send.
	// 3 está trabajando en la solicitud.
	// 4 ya se ha completado.
	xhttp.onreadystatechange = (e) => {

		if(xhttp.readyState === 4) {

			if (xhttp.status === 200) {
				// Se transforma la respuesta de la petición en un JSON.
				callback(null, JSON.parse(xhttp.responseText));

			} else {

				const error = new Error(`Error ${urlApi}`);

				return callback(error, null);
			}
		}
	}

	xhttp.send();
}

// Solicitar los productos de la API.
fetchData(`${API}/products`, (error1, data1) => {

	if (error1) {

		return console.log(error1);
	}

	// Solicitar un producto en específico.
	fetchData(`${API}/products/${data1[0].id}`, (error2, data2) => {

		if (error2) {

			return console.log(error2);
		}

		// Solicitar la categoria del producto.
		fetchData(`${API}/categories/${data2.category.id}`, (error3, data3) => {

			if (error3) {

				return console.log(error3);
			}

			console.log(data1[0]);
			console.log(data2.title);
			console.log(data3.name);

		});
	});
});
