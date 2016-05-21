/*jshint esnext: true */

const rp = require('request-promise');
const request = require('request');
const promise = require('bluebird');

exports.sendTextMessage = function(sender, message) {
    request({
        url: 'https://graph.facebook.com/v2.6/me/messages',
        qs: {access_token: token},
        method: 'POST',
        json: {
            recipient: {id: sender},
            message: {text: message}
        }
    });
};

exports.sendTemplateMessage = function (sender, title, subtitle, buttons){
    const msg = [{
           title: title,
           subtitle: subtitle,
           buttons: buttons
       }];
     const options = {
        url: "https://graph.facebook.com/v2.6/me/messages",
        qs: {access_token: token},
        method: "POST",
        json: true,
        body: {
            recipient: {id: sender},
                "message": {
                    "attachment": {
                        "type": "template",
                        "payload": {
                            "template_type": "generic",
                            "elements": msg
                        }
                    }
                }
        }
     };
     rp(options);
};

exports.sendTemplateMessageWithImage = function (sender, image_url, title, subtitle, buttons){
    const msg = [{
           title: title,
           subtitle: subtitle,
           image_url: image_url,
           buttons: buttons
       }];
     const options = {
        url: "https://graph.facebook.com/v2.6/me/messages",
        qs: {access_token: token},
        method: "POST",
        json: true,
        body: {
            recipient: {id: sender},
                "message": {
                    "attachment": {
                        "type": "template",
                        "payload": {
                            "template_type": "generic",
                            "elements": msg
                        }
                    }
                }
        }
     };
     rp(options);
};
