const { supabase } = require('../supabase/config');

async function testDatabaseConnection() {
    const { data, error } = await supabase.from('buyers').select('*');
    if (error) {
        console.error('Database Test Error:', error.message);
    } else {
        console.log('Database Connection Test Passed:', data);
    }
}

testDatabaseConnection();
