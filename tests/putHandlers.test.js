// eslint-disable-next-line no-undef
const config = require('../config');
test('PUT request should return status 200', async () => {
	const requestBody = {
		price: 200
	};
	try {
		const response = await fetch(`${config.API_URL}/api/v1/products/7`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});

		const data = await response.json();
		console.log(data);

	

	} catch (error) {
		console.error('Fetch Error:', error);
	}

});


test('PUT request should return status 200', async () => {
	let actualStatus;
	try{
		const response = await fetch(`${config.API_URL}/api/v1/products/7`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			
		});
		actualStatus = await response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatus).toBe(200);
	
});

