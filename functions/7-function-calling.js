// function expression is not hoisted

f1();   //ReferenceError: f1 is not defined

const f1 = function(){
    console.log("yes")
}