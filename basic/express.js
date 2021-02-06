const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hi!')
});

const server = app.listen(3000, () => console.log('Server ready'));

process.on('SIGTERM', () => {
    server.close(() => console.log('process termimated'));
});

setTimeout(() => {
    process.kill(process.pid, 'SIGTERM')
}, 3000);
