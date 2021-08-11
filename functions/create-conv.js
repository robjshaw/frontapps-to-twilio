exports.handler = function(context, event, callback) {

    var axios = require('axios');

    var ticketBody = event.TranscriptionText + ' - ' + event.RecordingUrl;

    var data = JSON.stringify({"sender":{"handle": event.From},"body": ticketBody});

    var config = {
        method: 'post',
        url: 'https://api2.frontapp.com/channels/' + process.env.CHANNEL + '/incoming_messages',
        headers: { 
            'Authorization': 'Bearer ' + process.env.FRONTAPP, 
            'Content-Type': 'application/json'
        },
            data : data
    };

    axios(config)
    .then(function (response) {
        callback(null, 'done');
    })
    .catch(function (error) {
        console.log(error);
    });
}