var b = new Boolean(false); // it is object not prmitive
console.log(b)
if(b){ // true
    console.log("in")
}

if(b == true){ // true  // object data type
    console.log("in true")  // this statement will get execute
}

var d = false;      
if(d == true){ // prmitive data type
    console.log("iiiiiii") // this statement will not get execute
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean