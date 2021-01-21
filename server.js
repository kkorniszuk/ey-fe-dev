const express = require('express');

const app = express();

app.use(express.static('./dist/ey-fe'));

app.get('/*', (req, res) =>
  res.sendFile('index.html', {root: 'dist/ey-fe/'}),
);

app.listen(process.env.PORT || 8080);
