/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 **/

import * as path from 'path';
import * as express from 'express';
import {Message } from '@lol/api-interface';
import * as mongoose from 'mongoose';
require('dotenv').config();

const app = express();

const message: Message = {
  message: 'welcome!'
}

// app.use('/images', express.static(path.join(__dirname, `assets/ddragon/${version}/img`)))

app.get('/api/hello', (req, res) => {
  res.send(message);
});

async function connect() {
  const port = process.env.PORT || 3333;
  console.log(process.env.PORT);
  try {
    mongoose.Promise = global.Promise;
    await mongoose.connect(process.env.MLAB_URL);
  } catch (err) {
    console.log('Mongoose error', err);
  }
  const server = app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/api`);
  });
  server.on('error', console.error);

  // console.log('API listening on localhost:3000');
}
connect();

