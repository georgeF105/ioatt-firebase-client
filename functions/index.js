var functions = require('firebase-functions');
var express = require('express');
var path = require('path');
const gcs = require('@google-cloud/storage')();

const fs = require('fs');
const os = require('os');

const app = express();

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

bucket = functions.config().firebase.storageBucket;
const tempFilePath = path.join(os.tmpdir(), 'blink.bin');

app.get('/build', (request, response) => {
  // response.sendFile(path.join(__dirname,'builds/blink.bin'));
  console.log('starting response');
  gcs.bucket(bucket).file('blink.bin').download({
    destination: tempFilePath
  })
  .then(() => {
    console.log('sending response');
    console.log(tempFilePath);
    response.sendFile(tempFilePath);
  })
  .catch(err => {
    console.error(err);
    response.status(500).send(err);
  });
});

app.get('/build/debug', (request, response) => {
  response.json({
    message: 'debug',
    body: request.body
  });
});

app.get('/build/bucket', (request, response) => {
  response.send(bucket);
});

exports.app = functions.https.onRequest(app);


// exports.fetchSensorData = functions.database.ref('/sensors/{pushId}/update')
//     .onWrite(event => {
//       const update = event.data.val();
//       console.log('updating', event.params.pushId);
//       const temp = 21;
//       return event.data.ref.parent.child('temperature').set(temp);
//     });