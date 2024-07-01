const express = require('express');
const router = express.Router();
const { Stage, SetTime } = require('../models');

// Index route
router.get('/', async (req, res) => {
    try {
        const stages = await Stage.findAll();
        res.json(stages);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});

// Show route
router.get('/:name', async (req, res) => {
    try {
        const stage = await Stage.findOne({ where: { name: req.params.name } });
        if (!stage) {
            return res.status(404).json({ message: 'Stage not found' });
        }
        res.json(stage);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});

// Create route
router.post('/', async (req, res) => {
    try {
        const { name, capacity } = req.body;
        if (!name || !capacity) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        const stage = await Stage.create({ name, capacity });
        res.status(201).json(stage);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});

// Update route
router.put('/:name', async (req, res) => {
    try {
        const { name, capacity } = req.body;
        const stage = await Stage.findOne({ where: { name: req.params.name } });
        if (!stage) {
            return res.status(404).json({ message: 'Stage not found' });
        }
        if (!name || !capacity) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        await stage.update({ name, capacity });
        res.json(stage);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});

// Delete route
router.delete('/:name', async (req, res) => {
    try {
        const stage = await Stage.findOne({ where: { name: req.params.name } });
        if (!stage) {
            return res.status(404).json({ message: 'Stage not found' });
        }
        await stage.destroy();
        res.status(204).end();
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;
