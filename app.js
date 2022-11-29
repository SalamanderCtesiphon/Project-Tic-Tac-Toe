const personFactory = (name, age) => {
    const sayHello = () => console.log(`Hello, my name is ${name}`);
    return { name, age, sayHello };
    }

const john = personFactory('John', 30);

john.sayHello(); // Hello, my name is John

console.log(john.name); // John


// Path: app.js

const personFactory = (name, age) => {
    const sayHello = () => console.log(`Hello, my name is ${name}`);
    return { name, age, sayHello };
    }

const john = personFactory('John', 30);

john.sayHello(); // Hello, my name is John

console.log(john.name); // John

// Path: app.js

