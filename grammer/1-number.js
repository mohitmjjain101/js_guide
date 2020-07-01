// Number context

var a;
console.log(a)  // undefined

var v = a+2;    // in number contex
console.log(v); // Nan Error

var b = null;
var z = b + 2;  // in number contex
console.log(z)      // gives output 2   // b converts to zero

console.log(b ==2)  // in boolean context undefined gives false values.

// String context

var s;
var s1 = s + 'hello';
console.log(s)