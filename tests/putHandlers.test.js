// eslint-disable-next-line no-undef
const config = require('../config');
test('PUT request should return status 200', async () => {
    let actual;
    
    async function putRequest() {
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

            // Записываем статус ответа
            actual = response.status;

        } catch (error) {
            console.error('Fetch Error:', error);
        }
    }
    await putRequest();

    expect(actual).toBe(200);
});