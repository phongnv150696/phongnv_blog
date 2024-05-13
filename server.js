const express = require('express')
const next = require('next')
const connectDatabase = require('./database')

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 80;

app.prepare().then(() => {
  const server = express();

  server.all('*', (req, res) => {
    return handle(req, res);
  });


  connectDatabase(() => {
    server.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  })
});