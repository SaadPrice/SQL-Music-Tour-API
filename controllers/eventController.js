const express = require('express');
const router = express.Router();
const { Event, MeetGreet, SetTime } = require('../models');

// Index route
router.get('/', async (req, res) => {
    try {
        const events = await Event.findAll({
            order: [['date', 'ASC']], // Assuming your Event model has a 'date' attribute
        });
        res.json(events);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});

// Show route
router.get('/:name', async (req, res) => {
    try {
        const event = await Event.findOne({ where: { name: req.params.name } });
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }
        res.json(event);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});

// Create route
router.post('/', async (req, res) => {
    try {
        const { name, date, location } = req.body;
        if (!name || !date || !location) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        const event = await Event.create({ name, date, location });
        res.status(201).json(event);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});

// Update route
router.put('/:name', async (req, res) => {
    try {
        const { name, date, location } = req.body;
        const event = await Event.findOne({ where: { name: req.params.name } });
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }
        if (!name || !date || !location) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        await event.update({ name, date, location });
        res.json(event);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});

// Delete route
router.delete('/:name', async (req, res) => {
    try {
        const event = await Event.findOne({ where: { name: req.params.name } });
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }
        await event.destroy();
        res.status(204).end();
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;
