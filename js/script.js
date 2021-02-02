"use strict"

const add = {
    d: 17,
    e: 20
};

const numbers = {
    a: 2,
    b: 10,
    c: {
        x: 7,
        y: 4
    }
};

const newObj = Object.assign({}, add);

newObj.d = 10;

// console.log(add);
// console.log(newObj);

const oldArray = ['a', 'b', 'c'];
const array = [...oldArray];
console.log(array);
const newArray = oldArray.slice();

// console.log(newArray);

const video = ['yt', 'vm', 'rt'],
      blogs = ['wp', 'lj', 'bg'],
      internet = [...video, ...blogs, 'vk'];

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}


const obj = {
    one: 1,
    two: 2
};

const newObjs = {...obj};

console.log(newObjs);


