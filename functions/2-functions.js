function test(object){

    object.name= "jeny" // it will change on real object
}

let object = {
    name : 'Mohit',
    lastName : 'Jain'
}

console.log(object)
test(object)
console.log(object)