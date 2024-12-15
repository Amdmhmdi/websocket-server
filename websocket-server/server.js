const WebSocket = require('ws');

// ایجاد سرور WebSocket در پورت 8080
const wss = new WebSocket.Server({ port: 8080 });

console.log('WebSocket server is running on ws://localhost:8080');

// مدیریت اتصال کلاینت‌ها
wss.on('connection', function connection(ws) {
    console.log('A client connected.');

    // دریافت پیام از کلاینت
    ws.on('message', function incoming(message) {
        console.log('Received:', message);
        
        // ارسال پاسخ به کلاینت
        ws.send(`Server: You sent -> ${message}`);
    });

    // مدیریت قطع اتصال کلاینت
    ws.on('close', () => {
        console.log('A client disconnected.');
    });
});
