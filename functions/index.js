var functions = require('firebase-functions');

// // Start writing Firebase Functions
// // https://firebase.google.com/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// })

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

// exports.fetchSensorData = functions.database.ref('/sensors/{pushId}/update')
//     .onWrite(event => {
//       const update = event.data.val();
//       console.log('updating', event.params.pushId);
//       const temp = 21;
//       return event.data.ref.parent.child('temperature').set(temp);
//     });