var express = require('express');
var app = express();
var Twitter = require('twitter');
var bodyParser = require('body-parser');

var client = new Twitter({
  consumer_key: 'clUnyz92Ip4Xizc39f98wB73V',
  consumer_secret: 'VECvHwmkOWQysfEUpNPDi7yf4KSbYJKWDsmNGut313vutenNpq',
  access_token_key: '201676144-pjwU3VemOXtFPRIjy5lI7BP6udAHNrBKbqMZJUFU',
  access_token_secret: 'XloqvfbfqaN8a34PFFJ5yYSxcOmE9pIWb7YBoMmj6WqyU'
});

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get('/weather', function(req, res){
	console.log("get requested");


	client.get('search/tweets', {q: 'bahubali'}, function(error, tweets, response) {

   res.json(tweets.statuses);


});
});

app.post('/weather', function(req, res){

  var name = req.body.name;

  client.get('search/tweets', {q: name}, function(error, tweets, response) {

   res.json(tweets.statuses);


});

})

app.listen(3000);
console.log('server running on port 3000');