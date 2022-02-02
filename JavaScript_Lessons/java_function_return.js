//function return

function pro(price, taxes, ads)
{
    let product = price + taxes;
    let result = product + ads;
    return result; // now u can save the function result in variable coz of return function
}

let x = pro(200, 2.5, 10);
console.log(x/2);

//______________________________
// return its like the function to value so u can save in variable 
// will not read the code after return 
function test1() 
{
    return 1;
}
console.log( test1() );

//___________________________________________________
function days(age)
{
    let result = age * 356;
    return result;
}
let day = days(32);


function calcAgeByHours(age)
{
    let result = age * 24;
    return result;
}
let hour = calcAgeByHours(day);


console.log("Your Age in Hours is: " + hour + " Hours");
