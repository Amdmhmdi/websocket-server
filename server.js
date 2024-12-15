const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });


wss.on('connection', (ws) => {
    console.log('A new client has connected!');
    ws.on('message', (message) => {
        console.log('Received message: %s', message);
    });

    ws.send('Hello from the WebSocket server!');
});

console.log('WebSocket server is running on ws://localhost:8080');
