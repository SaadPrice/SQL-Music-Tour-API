// DEPENDENCIES
const express = require('express');
const app = express();
const { Sequelize } = require('sequelize');

// CONFIGURATION / MIDDLEWARE
require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Tour API'
    });
});

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize(process.env.DB_CONNECTION);


// LISTEN
app.listen(process.env.PORT, async  () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
    console.log(`🎸 Rockin' on port: ${process.env.PORT}`);
});
