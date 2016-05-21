/*jshint esnext: true */
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
const promise = require('bluebird');

const parseInput = require('./modules/parse-input');


// const parseSms = require('./modules/parseSms'); TODO: Skype

// Process application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}));

// Process application/json
app.use(bodyParser.json());

app.get('/webhook', function(req, res) {
	console.log('webhook GET');
    if (req.query['hub.verify_token'] === 'EAAaimdlUKGgBAG67Q0iC69tsP9hmtI6t3CvL0WPyezwHoAmnlyJqiOHIeH4dtdWgFcAuZAL8tsReWMfpEZBfyZCutdg2FGvnWZBhETTPZAilMQQqCgUWDmuqOu4xqmCw2IbjZBotgiLVdFESlhSbtc3DJz07hYOgbZAJmKlpEisXQZDZD') {
        res.send(req.query['hub.challenge']);
    } else {
    	res.send('Error, wrong validation token');
	}
});

// app.post('/webhook', parseInput);

app.post('/webhook', function (req, res){
	console.log("Hit webhook..");
	res.sendStatus(200);
});
// app.post('/sms', parseSms);

app.listen(process.env.PORT, function (){
	console.log("listening on port " + process.env.PORT);
});
