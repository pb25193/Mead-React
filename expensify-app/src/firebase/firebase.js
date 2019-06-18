import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBzEki0U6Nc2D2yP5H2YTTcsFYlT0kyeec",
    authDomain: "expensify-71acc.firebaseapp.com",
    databaseURL: "https://expensify-71acc.firebaseio.com",
    projectId: "expensify-71acc",
    storageBucket: "expensify-71acc.appspot.com",
    messagingSenderId: "82246598723",
    appId: "1:82246598723:web:b6dc08dbd89453c7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const database = firebase.database();

database.ref().set({
    employees: [{
        name: "putti",
        dickSize: 1
    },{
        name: "bagul",
        dickSize: -11
    }],
    revenue: {
        nominal: 10000000,
        real: 809
    }
});

database.ref('revenue').set({
        nominal: 0,
        real: 809
});

database.ref('revenue/nominal').set(10000);


database.ref('projects').set({
    count: 2,
    about: "governance",
    budget: 1000000
}).then(()=>{
    console.log('fourth edit is done');
}).catch((e)=>{
    console.log('failed because', e);
});