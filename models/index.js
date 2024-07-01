// DEPENDENCIES
const express = require('express');
const app = express();
const { sequelize } = require('./models'); // Import Sequelize instance from models

// CONFIGURATION / MIDDLEWARE
require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Import Event, Stage, and Band controllers
const eventController = require('./controllers/eventController');
const stageController = require('./controllers/stageController');
const bandController = require('./controllers/bandController'); // Assuming bandController.js is created and structured similarly

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Tour API'
    });
});

// Use Event, Stage, and Band controllers
app.use('/events', eventController);
app.use('/stages', stageController);
app.use('/bands', bandController);

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
