const net = require('net');
const port = 8018;

const server = net.createServer();

const connectClients = [];

const broadcast = (message)=>{
  for (let connectedClient of connectClients){
    connectedClient.write(`someone said: ${message}`);
  }
};

server.listen(port, function(){
  console.log(`Server is listening on port ${port}`);
});

server.on('connection', (client)=>{
  const stringRepClient = client.toString();
  console.log(`Client is connected: ${{client}}`,client);

  // add the current client to the list of connected clients.
  connectClients.push(client);

  client.write(`Welcome to my awesome server!`);

  client.on('data', (message)=>{
    console.log(`Message Received From Client:${message}`);
    broadcast(message);
  });

});
