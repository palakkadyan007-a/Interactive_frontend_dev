// let user={
//     fullName: "Palak Kadyan",
//     address:"gurugram",
//     mobileno:1236547892
//     favcolor:["black","white","blue"]
// }
// console.log(user.fullName,user.mobileno,user.favcolor[1]);

// console.log("")

// let user={
//     fullname:"Pragya Sinha",
//     address:"Delhi",
//     class: "1st year",
//     mobileno:1234567890,
//     favcolor:["black","white","pink"]
// }
// console.log(user.fullname,user.mobileno,user.favcolor[1]);
// console.log("My name is "+user.fullname+".My fav color is "+user.favcolor[0]);

// //string literal
// console.log(`My name is ${user.fullname}.My fav color is ${user.favcolor[0]} `);

let user={
    fullname:"Pragya Sinha",
    address:{
        station:"delhi",
        city:"west delhi",
        state:"Delhi",
        country:"india",
        continent:"Asia",},
    class: "1st year",
    mobileno:1234567890,
    favcolor:["black","white","pink"],
    demo:function(){
        return "hello world";
    }
}
console.log(user.fullname,user.address.city,user.mobileno,user.favcolor[1],user.demo);
console.log("My name is "+user.fullname+".My fav color is "+user.favcolor[0]);

//string literal
console.log(`My name is ${user.fullname}.My fav color is ${user.favcolor[0]} `);


const car = {
    make:"mahindra",
    model:"thar"
}:
//
//object.freeze(car);
car.model="xuv700";
car.color="zblack";
console.log(car.model);