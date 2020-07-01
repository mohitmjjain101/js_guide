// Example 1
const PI =3.14;
console.log(PI) // 3.14

PI = 15;    //TypeError: Assignment to constant variable.

// Example 2
const f = 10;
function f(){}  // SyntaxError: Identifier 'f' has already been declared

// Example 3
const objects = {key : 'value'}
console.log(objects)    //{ key: 'valye' }
objects.key = 'new value'
console.log(objects)    // { key: 'new value' }

// Example 4
const MY_ARRAY = ['HTML','CSS'];
MY_ARRAY.push('JAVASCRIPT');
console.log(MY_ARRAY); //logs ['HTML','CSS','JAVASCRIPT'];