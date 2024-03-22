// stageController.js

const express = require('express');
const router = express.Router();
const { Stage } = require('../models'); // Assuming your Stage model is defined in the ../models directory

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
router.get('/:id', async (req, res) => {
  try {
    const stage = await Stage.findByPk(req.params.id);
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
    const stage = await Stage.create({ name, capacity }); // Assuming your Stage model has 'name' and 'capacity' attributes
    res.status(201).json(stage);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Update route
router.put('/:id', async (req, res) => {
  try {
    const { name, capacity } = req.body;
    const stage = await Stage.findByPk(req.params.id);
    if (!stage) {
      return res.status(404).json({ message: 'Stage not found' });
    }
    await stage.update({ name, capacity });
    res.json(stage);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Delete route
router.delete('/:id', async (req, res) => {
  try {
    const stage = await Stage.findByPk(req.params.id);
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
