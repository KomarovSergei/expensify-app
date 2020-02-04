// object destruction

// const person = {
//   name: "Sergei",
//   age: 27,
//   location: {
//     city: "Vladimir",
//     temp: 1,
//   },
// };

// const { name: firstName = "Anonymous", age } = person;
// console.log(`${firstName} is ${age}`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//   title: "title",
//   author: "auther name",
//   publisher: {
//     // name: "Penguin",
//   },
// };

// const { name: publisherName = "Self-Published" } = book.publisher;

// console.log(publisherName);

// array destruction

// const address = [];

// const [street, city = "123", state = "vladimir", zip] = address;

// console.log(`You are in ${city} ${state}`);

const item = ["A Coffe (hot)", "$2.00", "$2.59", "$2.75"];

const [coffe, , price] = item;

console.log(`A medium ${coffe} costs ${price}`);
