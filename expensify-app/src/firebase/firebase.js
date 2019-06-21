import * as firebase from 'firebase';
// import moment from 'moment';

var firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const database = firebase.database();

export {firebase, database as default};

// database.ref().remove();


// const onValueChange = database.ref().on('value', (snapshot)=>{

// });

// const expenses = [{
//     description: "gum",
//     note: '',
//     amount: 195,
//     createdAt: moment(0).add(7, 'days').valueOf()
// }, {
//     description: "rent",
//     note: '',
//     amount: 109500,
//     createdAt: moment(0).add(1, 'days').valueOf()
// }, {
//     description: "Credit card bill",
//     note: '',
//     amount: 10000,
//     createdAt: moment(0).add(4, 'days').valueOf()
// }];

// console.log(expenses, 'real aray');

// database.ref('expenses').push(expenses[0]);
// database.ref('expenses').push(expenses[1]);
// database.ref('expenses').push(expenses[2]);

// //child_removed
// database.ref('expenses').on('child_removed', (snapshot)=>{
//     console.log(snapshot.key, snapshot.val());
// });

// //child_changed
// database.ref('expenses').on('child_changed', (snapshot)=>{
//     console.log(snapshot.key, snapshot.val());
// });

// //child_added
// database.ref('expenses').on('child_added', (snapshot)=>{
//     console.log(snapshot.key, snapshot.val());
// });

// // database.ref('expenses').on('value', (snapshot)=>{
// //     const arrayExpenses = [];
// //     snapshot.forEach((child)=>{
// //         arrayExpenses.push({
// //             id: child.key,
// //             ...child.val()
// //         })
// //     });
// //     console.log(arrayExpenses);
// // });
