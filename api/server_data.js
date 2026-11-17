// Vercel Serverless Function - ArchGTPS server_data Endpoint

export default function handler(req, res) {
  // Pengaturan Target Server GTPS
  const SERVER_IP = process.env.SERVER_IP || '134.209.100.230';
  const SERVER_PORT = process.env.SERVER_PORT || '55000';
  const LOGIN_URL = process.env.LOGIN_URL || 'nuvurl.vercel.app';
  const TYPE = '1';
  const TYPE2 = '1';

  const responseText = [
    `server|${SERVER_IP}`,
    `port|${SERVER_PORT}`,
    `type|${TYPE}`,
    `type2|${TYPE2}`,
    `loginurl|${LOGIN_URL}`,
    `#maint|Server is currently at maintenance.`,
    `meta|nusaps`,
    `RTENDMARKERBS1001\n`
  ].join('\n');

  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.status(200).send(responseText);
}
