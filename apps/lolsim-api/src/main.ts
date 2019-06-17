/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 **/

import * as express from 'express';
import {Message } from '@lol/api-interface';

const app = express();

const message: Message = {
  message: 'welcome!'
}

app.get('/api/hello', (req, res) => {
  res.send(message);
});

const port = process.env.port || 3333;
app.listen(port, (err) => {
  if (err) {
    console.error(err);
  }
  console.log(`Listening at http://localhost:${port}`);
});
