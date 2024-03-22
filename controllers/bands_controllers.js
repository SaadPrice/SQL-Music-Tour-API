const bands = require('express').Router();
const { Band } = require('../models');

bands.get('/', async (req, res) => {
    const bandName = req.query.name; // Assuming the band name is provided as a query parameter
    const band = await Band.findOne({ where: { name: bandName } });

    if (band) {
        res.send(band);
    } else {
        res.status(404).send('Band not found');
    }
});

module.exports = bands;
