import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;

console.log('Starting server...');
console.log('__dirname:', __dirname);
console.log('dist path:', path.join(__dirname, 'dist'));

app.use(express.static('dist'));

app.get('*', (req, res) => {
  console.log('Request:', req.path);
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
