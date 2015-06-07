// Main file
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// setup
app.engine('html', require('ejs').renderFile)
app.use(bodyParser.json());  
app.use(bodyParser.urlencoded({ extended: true }));

// Main page
app.get('/', function (req, res) {
    var i = Math.floor((Math.random() * 3) + 1);
    if (i == 1) {
        res.status(200).send('In the midnight times of my life\nWhen everything seems so wrong\nJust help me to remember\nThat Your name will bring a song.!');
    } else if (i == 2) {
        setTimeout(function() {
            res.status(200).send('I`m a slow and stupid server!');
        }, 5500);
    }
    else {
        res.sendStatus(500);
    }
});

// Web Server listener
var server = app.listen(80, function() {
    console.log('Express server listening on port ' + server.address().port);
});