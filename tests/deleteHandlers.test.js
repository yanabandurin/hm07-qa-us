// eslint-disable-next-line no-undef
const config = require('../config');

test('Delete kits', async () => {
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
			method: 'DELETE',
		});
	} catch (error) {
		console.error(error);
	}
});


test('response status should be 200', async () => {
	let actualStatus;
	try {
        // Make DELETE request
        const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        // Save the response status
        actualStatus = response.status;

    } catch (error) {
        console.error(error);
    }

    // Check the response status code
    expect(actualStatus).toBe(200);
});