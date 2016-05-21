const classifier = require('../classifier');

const FB = require('../facebook');

module.exports = function (sender, message){
	console.log('sender: ' + sender);
	console.log(classifier.classify(message));
	//FB.sendTextMessage(sender, classifier.classify(message));
}