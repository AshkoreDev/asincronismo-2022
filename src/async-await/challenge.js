import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

async function fetchData(urlApi) {

	const response = await fetch(urlApi);
	const data = await response.json();

	return data;
}


const anotherFn = async (urlApi) => {

	try {
		// Petición de los productos.
		const products = await fetchData(`${urlApi}/products`);
		// Petición del 1er elemento del array.
		const product = await fetchData(`${urlApi}/products/${products[0].id}`);
		// Petición de la categoria del producto.
		const category = await fetchData(`${urlApi}/categories/${product.category.id}`);

		console.log(products);
		console.log(product.title);
		console.log(category.name);

	} catch(error) {

		console.error(error);
	}
}

anotherFn(API);