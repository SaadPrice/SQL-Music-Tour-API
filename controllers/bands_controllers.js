const express = require('express');
const bands = express.Router();
const { Band, MeetGreet, SetTime, Event, Sequelize } = require('../models');

bands.get('/', async (req, res) => {
    const bandName = req.query.name; // Assuming the band name is provided as a query parameter
    const eventName = req.query.event; // Assuming the event name is provided as a query parameter

    try {
        let includeModels = [
            { model: MeetGreet, as: 'meetGreets', include: { model: Event, as: 'event' } },
            { model: SetTime, as: 'setTimes', include: { model: Event, as: 'event' } },
        ];

        if (eventName) {
            includeModels = [
                {
                    model: MeetGreet,
                    as: 'meetGreets',
                    include: { model: Event, as: 'event', where: { name: { [Sequelize.Op.like]: `%${eventName}%` } } },
                },
                {
                    model: SetTime,
                    as: 'setTimes',
                    include: { model: Event, as: 'event', where: { name: { [Sequelize.Op.like]: `%${eventName}%` } } },
                },
            ];
        }

        const band = await Band.findOne({
            where: { name: bandName },
            include: includeModels,
        });

        if (band) {
            res.json(band);
        } else {
            res.status(404).send('Band not found');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

// Create route
bands.post('/', async (req, res) => {
    try {
        const { name, genre } = req.body;
        if (!name || !genre) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        const band = await Band.create({ name, genre });
        res.status(201).json(band);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});

// Update route
bands.put('/:name', async (req, res) => {
    try {
        const { name, genre } = req.body;
        const band = await Band.findOne({ where: { name: req.params.name } });
        if (!band) {
            return res.status(404).json({ message: 'Band not found' });
        }
        if (!name || !genre) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        await band.update({ name, genre });
        res.json(band);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});

// Delete route
bands.delete('/:name', async (req, res) => {
    try {
        const band = await Band.findOne({ where: { name: req.params.name } });
        if (!band) {
            return res.status(404).json({ message: 'Band not found' });
        }
        await band.destroy();
        res.status(204).end();
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = bands;

