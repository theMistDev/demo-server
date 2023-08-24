import express from 'express';
import * as http from 'http';

const app = express();
const server = http.createServer(app);

app.get('/', (req, res) => {
  const ip = req.ip;
  const now = new Date();
  const location = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const responseData = {
    ip,
    location,
    time: now.toISOString(),
  };
  res.json(responseData);
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
