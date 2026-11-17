// Standalone Node.js HTTP Server - ArchGTPS
// Jalankan: node server.js
import http from 'http';

const PORT = process.env.PORT || 80;
const SERVER_IP = process.env.SERVER_IP || '134.209.100.230';
const SERVER_PORT = process.env.SERVER_PORT || '55000';
const LOGIN_URL = process.env.LOGIN_URL || 'felix-gtlogin.vercel.app';

const serverData = [
  `server|${SERVER_IP}`,
  `port|${SERVER_PORT}`,
  `type|1`,
  `type2|1`,
  `loginurl|${LOGIN_URL}`,
  `#maint|Server is currently at maintenance.`,
  `meta|nusaps`,
  `RTENDMARKERBS1001\n`
].join('\n');

const server = http.createServer((req, res) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url} from ${req.socket.remoteAddress}`);
  res.writeHead(200, {
    'Content-Type': 'text/plain; charset=utf-8',
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    'Connection': 'close'
  });
  res.end(serverData);
});

server.listen(PORT, () => {
  console.log('====================================================');
  console.log(` ArchGTPS server_data Host listening on port ${PORT}`);
  console.log(` IP Target    : ${SERVER_IP}:${SERVER_PORT}`);
  console.log(` Login URL    : ${LOGIN_URL}`);
  console.log('====================================================');
});
