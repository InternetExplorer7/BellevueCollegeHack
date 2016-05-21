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
    if (req.query['hub.verify_token'] === 'EAAWgy3f5qTwBALa7tmqFTbFGhjbEmBewAJ45ZCeVDkXUf7JdpX0rP2PHJdZBSS3VpTamZBqQ8mNaDdi5hwT8KeI4hUfczFwDyNRX5GdLJXvJVmWjAxReIdLZByKQkcdvUAwVyF16QL4eXkALA6URzQZB8VLY0JmrHNjEFkNNYsgZDZD') {
        res.send(req.query['hub.challenge']);
    } else {
    	res.send('Error, wrong validation token');
	}
});

app.post('/webhook', parseInput);
// app.post('/sms', parseSms);

app.listen(process.env.PORT, function (){
	console.log("listening on port " + process.env.PORT);
});
