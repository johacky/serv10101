var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, res) {
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

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
