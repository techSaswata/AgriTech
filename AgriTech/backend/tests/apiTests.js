const axios = require('axios');

async function testApiEndpoints() {
    try {
        const buyerResponse = await axios.post('/api/buyer', {
            name: 'Test Buyer',
            email: 'testbuyer@example.com',
        });
        console.log('Buyer API Test:', buyerResponse.data);

        const orderResponse = await axios.get('/api/orders');
        console.log('Order API Test:', orderResponse.data);
    } catch (error) {
        console.error('API Test Error:', error.message);
    }
}

testApiEndpoints();
