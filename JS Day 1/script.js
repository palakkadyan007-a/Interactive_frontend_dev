// Types of function in JS

// _normal function 

function greet(name) {
    console.log(name);
}

greet("Palak");

// _arrow function 

const farewell = (name) => { console.log(name); };

farewell("Palak");

// _callback function => a function passed as an argument to another function

const sample = (callback) => {
    console.log("Sample");
    callback();
};

const demo = () => {
    console.log("Demo");
};


sample(demo);
