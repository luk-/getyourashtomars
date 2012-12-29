var http_server = require('http-server')


var server = http_server.createServer({
  root: 'public'
})

server.listen(8080)
