// Fetch por sí solo es una promesa.
import fetch from 'node-fetch';

const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi) {
	
	return fetch(urlApi);
}

fetchData(`${API}/products`)
	.then((response) => response.json())
	.then((products) => console.log(products))
	.catch((error) => console.log(error))


fetchData(`${API}/products`)
	// Mostrar los productos
	.then((response) => response.json())
	.then((products) => {
		console.log(products);
		return fetchData(`${API}/products/${products[0].id}`)
	})
	// Mostrar el titulo del producto
	.then((response) => response.json())
	.then((product) => {
		console.log(products.title);
		return fetchData(`${API}/categories/${product.category.id}`)
	})
	// Mostrar el nombre de la categoria
	.then((response) => response.json())
	.then((category) => console.log(category.name))
	.catch((error) => console.log(error))
	.finally(() => console.log('Finally.'));