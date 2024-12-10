"use strict";
//basic types
let id = 5;
let company = 'Traversy Media';
let isPublished = false;
let x = 'hello';
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'hello', false];
// Tuple
let person = [1, 'string', true];
//tuple array
let employee;
employee = [
    [1, 'Brad'],
    [2, 'john'],
    [3, 'jill'],
];
//Union 
let pid;
pid = '22';
//Enums
var Direction1;
(function (Direction1) {
    Direction1["Up"] = "Up";
    Direction1["Down"] = "Down";
    Direction1["Left"] = "Left";
    Direction1["Right"] = "Right";
})(Direction1 || (Direction1 = {}));
const user = {
    id: 1,
    name: 'john'
};
//Type Assertion
let cid = 1;
let customerId = cid;
//Functions
function addNum(x, y) {
    return x + y;
}
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'john',
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
//classes
class Person {
    constructor(id, name) {
        this.id = id,
            this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const brad = new Person(1, 'Brad Traversy');
const Mike = new Person(2, 'Mike Jordan');
// console.log(brad.register());
// console.log(Mike.register());
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, 'Shawn', 'Developper');
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4, 5]);
let strArray = getArray(['brad', 'john', 'joe']);
strArray.push(1);
