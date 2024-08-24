const config = require('../config');

test('Should Add products', async () => {
	const requestBody = {
		"productsList": [
			{
				"id": 7,
				"quantity": 1
			},
			{
				"id": 8,
				"quantity": 1
			}
		]
	}
	let data;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/2/products`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		 data = await response.json();
	} catch (error) {
		console.error(error);
	}
	
	expect(data.name).toBe('For movies and series');
	});


test('response status should be 200', async () => {
			let actualStatus;
     try {
         const response = await fetch(`${config.API_URL}/api/v1/kits/2/products`, {
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
