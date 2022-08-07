
import fetch from 'node-fetch';

const API = 'https://api.escuelajs.co/api/v1';

function postData(urlApi, data) {
	
	const response = fetch(urlApi, {

		method: 'POST',
		mode: 'cors',
		credentials: 'same-origin',
		header: {
			'Content-type': 'application/json'
		},
		body: JSON.stringify(data)
	});

	return response;
}

