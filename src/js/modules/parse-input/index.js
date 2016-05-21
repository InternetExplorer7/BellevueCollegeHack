/*jshint esnext: true */
const FB = require('../facebook');
const Promise = require('bluebird');
const teacher = require('../teacher');
const student = require('../student');

module.exports = function(req, res) {
    messaging_events = req.body.entry[0].messaging;

    for (var i = 0; i < messaging_events.length; i++) {
        const event = req.body.entry[0].messaging[0];
        const sender = event.sender.id;

        if (event.message && !event.message.text.includes('/t')) { // retrieve
        	student(sender, event.message.text);
        } else if (event.message && event.message.text.includes('/t')) { // teach/train
        	teacher(sender, event.message.text);
        }
    }

    res.sendStatus(200);
};