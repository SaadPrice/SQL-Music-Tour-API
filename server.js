// DEPENDENCIES
const express = require('express');
const app = express();
const { Sequelize } = require('sequelize');
const { sequelize } = require('./models'); // Import Sequelize instance from models

// CONFIGURATION / MIDDLEWARE
require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Import Event and Stage controllers
const eventController = require('./controllers/eventController');
const stageController = require('./controllers/stageController');

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Tour API'
    });
});

// Use Event and Stage controllers
app.use('/events', eventController);
app.use('/stages', stageController);

// LISTEN
app.listen(process.env.PORT, async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
    console.log(`🎸 Rockin' on port: ${process.env.PORT}`);
});
