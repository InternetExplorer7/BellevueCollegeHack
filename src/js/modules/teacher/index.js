/*

Input: Teacher message. '/t Where can I find assignment 9? : You can find assignment 9 inside of this module' OR 'Where can I find assignment 9, where can I find assignment 8, where can I find assignment x... : You can find those all in the module folder'

Output: Sends to classifier to save.

*/

const Promise = require('bluebird');
const classifier = require('../classifier');
const FB = require('../facebook');
module.exports = function (sender, message){
	Promise.try(function (){
		return message.substring(2).trim().split(":");
	}).map(function (cleanedMessageWithSpaces){
		return cleanedMessageWithSpaces.trim();
	}).then(function (cleanedMessageWithoutSpaces){
		classifier.train(cleanedMessageWithoutSpaces[0], cleanedMessageWithoutSpaces[1]); // input / output
	}).catch(function (err){
		console.log(err);
	});
}