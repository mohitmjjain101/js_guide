function map(f,a){

    let result = [];
    a.forEach(function(element){
        result.push(f(element))
    })
    return result;
}

const f = function(x){
    return x*x*x;

}

let numbers = [0,1,2,3,4,5]
let cube = map(f,numbers);
console.log(cube)