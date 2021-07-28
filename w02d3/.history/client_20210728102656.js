const net = require('net');
const port = 8018;

const connectionInfo = {
  host: 'localhost',
  port: port
};

const client = net.createConnection(connectionInfo);