var http = require('http'),
  static = require('node-static'),
  createChat = require('./chat_server').createChat;

var file = new static.Server('./public');

var server = http.createServer(function(req, res){
  req.addListener('end', function() {
    file.serve(req, res);
  }).resume();
});

server.listen(8000);

createChat(server);
