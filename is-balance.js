

let text = 'String Methods and Properties Primitive values, like "John Doe", cannot have properties or methods (because they are not objects). But with JavaScript, methods and properties are also available to primitive values, because JavaScript treats primitive values as objects when executing methods and properties.';


let len = text.length < 100 ? 'The String is Short' : 'The String is Long';

console.log(len);

/* 

There are 3 methods for extracting a part of a string:

slice(start, end)

substring(start, end)

substr(start, length)

*/

let parts = text.slice(-20 , -1);

let parts1 = text.slice(1 , 20);

let parts2 = text.slice(8);

let include = parts.includes('and') ? '0' : '1';

console.log(include);

console.log(parts2);

console.log(text.substring(13));


