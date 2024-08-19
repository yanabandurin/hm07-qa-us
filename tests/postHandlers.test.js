// eslint-disable-next-line no-undef
const config = require('../config');

test('Adding products', async () => {
	const requestBody = {
		"products": [
			{
				"id": 10,
				"quantity": 1
			},
			{
				"id": 11,
				"quantity": 3
			}
		]
		
	}
	try {
		// Use the fetch method to send a POST request to the specified URL and wait for the response
		const response = await fetch(`${config.API_URL}/api/v1/warehouses/check`, {
			method: 'POST',
			// Set headers
			headers: {
			'Content-Type': 'application/json'
			},
			// Set request body and convert the data object into a JSON string
			body: JSON.stringify(requestBody)
		});
		const data = await response.json();
		console.log(data);
	} catch (error) {
		console.error(error);
	}
	
});







	
		test('response status should be 200', async () => {
			let actualStatus;
     try {
         const response = await fetch(`${config.API_URL}/api/v1/kits/6/products`, {
             method: 'POST',
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
