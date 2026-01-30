// let user={
//     fullName: "Palak Kadyan",
//     address:"gurugram",
//     mobileno:1236547892
//     favcolor:["black","white","blue"]
// }
// console.log(user.fullName,user.mobileno,user.favcolor[1]);

// console.log("")


// console.log(user.fullname,user.address.city,user.mobileno,user.favcolor[1],user.demo);
// console.log("My name is "+user.fullname+".My fav color is "+user.favcolor[0]);

//string literal
// console.log(`My name is ${user.fullname}.My fav color is ${user.favcolor[0]} `);


// const car = {
//     make:"mahindra",
//     model:"thar"
// };
//
//object.freeze(car);
// car.model="xuv700";
// car.color="zblack";
// console.log(car.model);







// [
//     ["x", "o", "x"],
//     ["x", "o", "x"],
//     ["x", "o", "x"]
// ]

// let user={
//     name:"Piyush",
    // age:18,
    // addres:{
    //     city:"Gurugram",
    //     state:"Haryana",
    //     country:"India"
    // },
    // mobileno:1234567890,
    // favcolor:["red","blue","green"],
    // demo:function(){
    //     return "Hello World";
    // }
// }

// console.log(user.demo());
// console.log("My Name Is "+user.name+". I am "+user.age+" years old.");

// string literals
// console.log(`My Name Is ${user.name}. I am ${user.age} years old.`);

// //Object methods
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// const car={
//     make:"Mahindra",
//     model:"Thar",
// };
// Object.freeze(car);


// Object.seal(car);

// car.color="ZBlack";
// console.log(car);


/**
 * Demonstrates the difference between Object.freeze() and Object.seal()
 * 
 * Object.freeze(obj):
 * - Prevents adding new properties
 * - Prevents deleting existing properties
 * - Prevents modifying existing properties
 * - Object becomes completely immutable
 * 
 * Object.seal(obj):
 * - Prevents adding new properties
 * - Prevents deleting existing properties
 * - ALLOWS modifying existing properties
 * - Object structure is locked, but values can change
 * 
 * In this example:
 * - car is frozen with Object.freeze()
 * - Attempting to add a new "color" property will fail silently (or throw error in strict mode)
 * - If Object.seal() were used instead, the color property could be added

 */
