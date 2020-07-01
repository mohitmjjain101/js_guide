// https://developer.mozilla.org/en-US/docs/Glossary/IIFE

// immediate invoke function in js 

// It run as soon as it is defined

(function helloworld(){

    function greetMe(name){
        console.log("hello world " + name )
    }

    greetMe("Mohit");

})();