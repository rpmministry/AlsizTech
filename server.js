const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const LEADS_FILE = path.join(__dirname, 'leads.json');
const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.js': 'application/javascript; charset=UTF-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.ico': 'image/x-icon',
  '.json': 'application/json'
};

const server = http.createServer((req, res) => {
  let reqUrl = req.url.split('?')[0];

  // API POST: /api/contact (Registro y persistencia de cotizaciones para contacto@alsiztech.com)
  if (req.method === 'POST' && reqUrl === '/api/contact') {
    let body = '';
    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end', () => {
      try {
        const lead = JSON.parse(body);
        lead.receivedAt = new Date().toISOString();
        lead.targetEmail = 'contacto@alsiztech.com';
        lead.targetPhone = '0979376810';

        let leads = [];
        if (fs.existsSync(LEADS_FILE)) {
          try {
            leads = JSON.parse(fs.readFileSync(LEADS_FILE, 'utf8'));
          } catch (e) {
            leads = [];
          }
        }
        leads.push(lead);
        fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2), 'utf8');

        console.log(`[LEAD RECIBIDO] ${lead.name} (${lead.organization}) - Email: ${lead.email} - Tel: ${lead.phone || 'N/A'} - Servicio: ${lead.service}`);

        res.writeHead(200, {
          'Content-Type': 'application/json; charset=UTF-8',
          'Access-Control-Allow-Origin': '*'
        });
        res.end(JSON.stringify({
          success: true,
          message: 'Cotización recibida exitosamente. Procesada hacia contacto@alsiztech.com',
          data: lead
        }));
      } catch (err) {
        res.writeHead(400, {
          'Content-Type': 'application/json; charset=UTF-8',
          'Access-Control-Allow-Origin': '*'
        });
        res.end(JSON.stringify({ success: false, error: err.message }));
      }
    });
    return;
  }

  // Soporte de CORS Preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    });
    res.end();
    return;
  }

  if (reqUrl === '/' || reqUrl === '') {
    reqUrl = '/index.html';
  }

  const safePath = path.normalize(reqUrl).replace(/^(\.\.[\/\\])+/, '');
  const filePath = path.join(__dirname, safePath);

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=UTF-8' });
      res.end('404 Not Found');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': 'no-cache',
      'Access-Control-Allow-Origin': '*'
    });

    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  });
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`AlsizTech Dev Server running at http://localhost:${PORT}/`);
  console.log(`Endpoint de cotizaciones activo en http://localhost:${PORT}/api/contact`);
});
