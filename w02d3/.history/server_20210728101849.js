const net = require('net');
const port = 8018;

const server = net.createServer();

server.on('connection', ()=>{
  console.log(`Client is connected.`);
});

server.listen(port, function(){
  console.log(`Server is listening on port ${port}`);
});

