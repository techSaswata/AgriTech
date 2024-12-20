const { supabase } = require('../config');

// Fetch buyer orders
exports.getOrders = async (req, res) => {
    const { data, error } = await supabase.from('orders').select('*').eq('buyer_id', req.params.id);
    if (error) return res.status(400).send(error);
    res.send(data);
};

// Create a new buyer
exports.createBuyer = async (req, res) => {
    const { name, email, region, delivery_location } = req.body;
    const { data, error } = await supabase.from('buyers').insert({ name, email, region, delivery_location });
    if (error) return res.status(400).send(error);
    res.send(data);
};
