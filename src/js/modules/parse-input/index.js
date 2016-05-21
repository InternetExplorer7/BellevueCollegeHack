/*jshint esnext: true */
const FB = require('../facebook');
const Promise = require('bluebird');
const teacher = require('../teacher');
const student = require('../student');

module.exports = function(req, res) {
	console.log("message recieved...");
    messaging_events = req.body.entry[0].messaging;

    for (var i = 0; i < messaging_events.length; i++) {
        const event = req.body.entry[0].messaging[0];
        const sender = event.sender.id;

        if (event.message && !event.message.text.includes('/t')) { // retrieve
        	console.log('student: ' + event.message.text);
        	// student(sender, event.message.text);
        } else if (event.message && event.message.text.includes('/t')) { // teach/train
        	console.log('teacher: ' + event.message.text);
        	// teacher(sender, event.message.text);
        } else {
        	console.log('got something else: ' + event.message.text);
        }
    }

    res.sendStatus(200);
};