const express = require('express');
const path = require('path');
const cors = require('cors');
const compression = require('compression');
const { join } = require('path');
const { readFileSync } = require('fs');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(compression());// Activa la compresión Gzip
app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
    const indexHtml = readFileSync(join(__dirname, 'public', 'index.html'), 'utf8');
    res.send(indexHtml);
});

app.listen(port, () => console.log(`http://localhost:${port}`))
