const natural = require('natural');
const classifier = new natural.BayesClassifier();

exports.train = function (key, value){
	classifier.addDocument(key, value);
	classifier.train();
}

exports.classify = function (key){
	return classifier.classify(key);
}