const net = require('net');
const port = 8018;

const server = net.createServer();

const connectClients = [];

server.listen(port, function(){
  console.log(`Server is listening on port ${port}`);
});

server.on('connection', (client)=>{
  console.log(`Client is connected.`);

  // add the current client to the list of connected clients.
  connectClients.push(client);

  client.write(`Welcome to my awesome server!`);

  client.on('data', (message)=>{
    console.log(`Message Received From Client:${message}`);
  });

});
