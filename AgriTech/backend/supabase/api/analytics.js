const { supabase } = require('../config');

// Fetch analytics
exports.getStats = async (req, res) => {
    const { data, error } = await supabase.rpc('analytics_function'); // Assuming a custom Postgres function
    if (error) return res.status(400).send(error);
    res.send(data);
};
