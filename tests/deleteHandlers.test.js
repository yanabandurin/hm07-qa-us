const config = require('../config');

test('Should delete kits', async () => {
	const requestBody = {
		"products": [
			{
				"id": 5,
				"quantity": 1
			},
			{
				"id": 4,
				"quantity": 5
			}
		]
	};
	let actualStatus;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
        actualStatus = await response.status;
	} catch (error) {
		console.error('Error:', error);
	}
	
	expect(actualStatus).toBe(200);
});


test('response status should be 200', async () => {
	let actualStatus;
	try {
        const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
 actualStatus = response.status;

    } catch (error) {
        console.error(error);
    }
    expect(actualStatus).toBe(200);
});