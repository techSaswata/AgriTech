const { supabase } = require('../config');

// Submit a price quote
exports.submitBid = async (req, res) => {
    const { name, contact, location } = req.body;
    const { data, error } = await supabase.from('collection_centers').insert({ name, contact, location });
    if (error) return res.status(400).send(error);
    res.send(data);
};

// Manage bid details
exports.getBids = async (req, res) => {
    const { data, error } = await supabase.from('collection_centers').select('*');
    if (error) return res.status(400).send(error);
    res.send(data);
};
