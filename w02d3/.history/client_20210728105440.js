const net = require('net');
const port = 8018;

const connectionInfo = {
  host: 'localhost',
  port: port
};

const client = net.createConnection(connectionInfo);

client.on('connect',()=>{
  console.log(`Client is connected to the server.`);
});

client.on('data',(message)=>{
  console.log(`server sent: ${message}`);
});
