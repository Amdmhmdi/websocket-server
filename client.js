// اتصال به سرور WebSocket
const socket = new WebSocket('ws://localhost:8080');

// زمانی که اتصال برقرار می‌شود
socket.onopen = function() {
    console.log('Connected to the WebSocket server!');
    document.getElementById('messages').innerText = 'Connected to the server';
};

// زمانی که پیام از سرور دریافت می‌شود
socket.onmessage = function(event) {
    console.log('Received message from server:', event.data);
    document.getElementById('messages').innerText += '\n' + event.data;
};

// ارسال پیام به سرور زمانی که دکمه کلیک می‌شود
document.getElementById('sendMessageButton').addEventListener('click', function() {
    const message = 'Hello from the client!';
    socket.send(message);
    console.log('Sent message:', message);
});
