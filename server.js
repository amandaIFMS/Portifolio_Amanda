var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

// faz o express procurar os assets (css/js/img) na pasta 'public'
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	res.sendfile('./index.html');
});

app.listen(port, function() {
	console.log('Our app is running on http://localhost:' + port);
});