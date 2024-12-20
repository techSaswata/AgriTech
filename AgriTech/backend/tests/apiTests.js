const axios = require('axios');

test('Get Orders API', async () => {
    const response = await axios.get('http://localhost:3000/api/orders');
    expect(response.status).toBe(200);
});
