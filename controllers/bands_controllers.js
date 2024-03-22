const bands = require('express').Router();
const { Band, MeetGreet, SetTime, Event, Sequelize } = require('../models');

bands.get('/', async (req, res) => {
    const bandName = req.query.name; // Assuming the band name is provided as a query parameter
    const eventName = req.query.event; // Assuming the event name is provided as a query parameter

    try {
        let includeModels = [
            { model: MeetGreet, as: 'meet_greets', include: { model: Event, as: 'event' } },
            { model: SetTime, as: 'set_times', include: { model: Event, as: 'event' } },
        ];

        if (eventName) {
            includeModels = [
                {
                    model: MeetGreet,
                    as: 'meet_greets',
                    include: { model: Event, as: 'event', where: { name: { [Sequelize.Op.like]: `%${eventName}%` } } },
                },
                {
                    model: SetTime,
                    as: 'set_times',
                    include: { model: Event, as: 'event', where: { name: { [Sequelize.Op.like]: `%${eventName}%` } } },
                },
            ];
        }

        const band = await Band.findOne({
            where: { name: bandName },
            include: includeModels,
        });

        if (band) {
            res.send(band);
        } else {
            res.status(404).send('Band not found');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

module.exports = bands;

