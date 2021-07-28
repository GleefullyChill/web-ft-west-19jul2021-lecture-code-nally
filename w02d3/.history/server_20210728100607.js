const net = require('net');
const port = 8018;

const server = net.createServer();

server.listen(port, function(){
  console.log(`Server is listening on port ${port}`);
});