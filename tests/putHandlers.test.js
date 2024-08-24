const config = require('../config');
test('Should update the quantity', async () => {
	const requestBody = {
		"name": "For movies and series",
		"productsList": [
			{
				"id": 7,
				"quantity": 4
			},
			
		]
	}
	let actualStatus;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/2`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualStatus = await response.status;
		
	} catch (error) {
		console.error('Fetch Error:', error);
	}
	expect(actualStatus).toBe(200);
});


test('PUT request should return status 200', async () => {
	let actualStatus;
	try{
		const response = await fetch(`${config.API_URL}/api/v1/kits/2`, {
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

