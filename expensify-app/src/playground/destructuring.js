// console.log('destructuring');

// const person = {
//     name: "Partha",
//     age: 26,
//     location: {
//         city: 'Pune',
//         temp: 33
//     }
// };

// const {name: firstName = 'Anonymous', location, age} = person;

// console.log(`${firstName} is ${age}.`);

// const {city, temp: temperature} = person.location;

// if(city && temperature){
//     console.log(`Its ${temperature} in ${city}`);
// }


// const book = {
//     title: "Ego is the Enemy",
//     author: "Ryan Holiday",
//     publisher: {
//         name: "Penguin"
//     }
// };


// const { name: publisherName = "self published" } = book.publisher;

// console.log(publisherName);

// ============================================================================================================

const address = [
    "1288 S Juniper Street",
    "Philadelphia",
    "Pennsylvania",
    "19147"
];

const [, city, state = "New York", ] = address;

console.log(`you are in ${address[1]} ${address[2]}`);

console.log(`you are in ${city} ${state}`);

const item = ['Coffee [hot]', '$2.00', '$2.50', '$2.75'];

const [itemName, , mediumPrice,] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);