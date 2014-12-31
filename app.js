var express = require('express');
var app = express();
var http = require('http').Server(app);
var path = require('path');

app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile)

// 静态文件目录
var staticDir = path.join(__dirname, '/');

app.use('/', express.static(staticDir));

app.get('/', function(req, res){
	res.render('hello2015.html')
});


http.listen(2500, function(){
    console.log('listening on *:2500');
});