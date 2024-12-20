const { supabase } = require('../supabase/config');

test('Database connection', async () => {
    const { data, error } = await supabase.from('buyers').select('*');
    expect(error).toBeNull();
    expect(data).not.toBeNull();
});
