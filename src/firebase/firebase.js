import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: "1:516714549385:web:90192e3d02e23c25c33658",
    measurementId: "G-GN3VFBEK72"
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {firebase, googleAuthProvider, database as default};

// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // database.ref('expenses')
// //     .on('value',(snapshot) => {
// //         const expenses = [];

// //         snapshot.forEach((expense) => {
// //             expenses.push({
// //                 id: expense.key,
// //                 ...expense.val()
// //             })
// //         })

// //         console.log(expenses);
// //     });

// // database.ref('expenses').push({
// //     description: 'Opis prve',
// //     note: '',
// //     amount: 20.11,
// //     createdAt: 102010
// // });

// // database.ref().on('value', (snapshot) => {
// //     const val = snapshot.val();
// //     console.log(val.name, 'is a', val.job.title, 'at', val.job.company);
// // }, (err) => {
// //     console.log('Error', err)
// // });

// // database.ref().set({
// //     name: 'Petar Pejovic',
// //     age: 24,
// //     stressLevel: 6,
// //     job: {
// //         title: 'Software developer',
// //         company: 'Google'
// //     },
// //     location: {
// //         city: 'Cacak',
// //         country: 'Serbia'
// //     }
// // }).then(() => {
// //     console.log('Data is saved!');
// // }).catch((err) => {
// //     console.log('Failed', err);
// // });

// // database.ref().update({
// //     stressLevel: 9,
// //     'job/company': 'Amazon',
// //     'location/city': 'Seattle'
// // });

// // database.ref('isSingle')
// //     .remove()
// //     .then(() => {
// //         console.log('isSingle is removed!');
// //     }).catch((err) => {
// //         console.log('Failed /remove isSingle/', err);
// //     });