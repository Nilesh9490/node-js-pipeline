var express = require('express');
var app = express();
app.get('/', function(req, res){
   res.send("Changes Done by codepipeline");
});
app.listen(80, '172.31.40.116');
