var express = require('express')
var	account = require('./server/account')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Hello World!')
})

app.get('/Test', function(req, res) {
	var head = req.headers['authorization'];
	console.log(req.headers);	
    res.json({ header: head, message: 'hooray! welcome to our api!' });   
});

app.get('/userinfo', account.getInfo);
//app.get('/userinfo/:id', account.UserInfobyId);
//app.get('/userinfobymobileid/:mobileid', account.UserInfobyMobileId);

app.get('/logout', account.logout);
app.get('/checkin', account.checkin);
app.get('/checkout', account.checkout);


app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
