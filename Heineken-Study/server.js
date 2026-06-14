import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;

console.log('Starting server...');
console.log('__dirname:', __dirname);
console.log('PORT:', PORT);

const distPath = path.join(__dirname, 'dist');
console.log('dist path:', distPath);
console.log('dist exists:', fs.existsSync(distPath));
console.log('index.html exists:', fs.existsSync(path.join(distPath, 'index.html')));

app.use(express.static(distPath));

app.get('*', (req, res) => {
  console.log('Request:', req.path);
  const indexPath = path.join(distPath, 'index.html');
  console.log('Serving:', indexPath);
  res.sendFile(indexPath, (err) => {
    if (err) {
      console.error('Error sending file:', err);
    }
  });
});

const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`✓ Server running on port ${PORT}`);
});

server.on('error', (err) => {
  console.error('Server error:', err);
});
