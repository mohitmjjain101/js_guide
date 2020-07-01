function f(){

    try {
        console.log("1") //print 1`
        throw 'Error';  // will throw Error
    }catch(Error){
        console.log(Error)  // Error will get print
        console.log("2")       // 2
    }finally {
        console.log("3")        //3
        return false;           // return function from here
        console.log("4")        // not rechable code
    }
    console.log("5")     // not rechable code
}

f();