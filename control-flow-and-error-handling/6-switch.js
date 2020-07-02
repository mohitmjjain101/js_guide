// when default conditon is given but in middle

var gender = "Transgender";
var category;

switch(gender){
    case "Male":
    category = "Male";
    break;
    default:
    category = "Transgender"
    break;
    case "Female":
    category = "Female";
    break;
    
}
console.log(category);