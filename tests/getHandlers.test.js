// eslint-disable-next-line no-undef
// const config = require('../config');

// test('', async () => {
// 	try {
// 		const response = await fetch(`${config.API_URL}/your/endpoint`);
// 	} catch (error) {
// 		console.error(error);
// 	}
// });
const config = require('../config');

test('status should be 200', async () => {
    let actualStatus;
    try {
        // Make request
        const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
        // Extract response code status
        actualStatus = response.status;
    } catch (error) {
        console.error(error);
    }
    // Check code status
    expect(actualStatus).toBe(200);
});

test('Body should contain the name "For movies and series" in GET', async () => {
    let actualResponseBody;
    let actualStatus;
    
    try {
        const response = await fetch(`${config.API_URL}/api/v1/kits/2`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        actualStatus = response.status;
        actualResponseBody = await response.json();
    } catch (error) {
        console.error(error);
    }

    expect(actualStatus).toBe(200);

    expect(actualResponseBody.name).toBe("For movies and series");
});