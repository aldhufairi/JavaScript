
// self function invoked way
// any variables inside function will be local variable
// so the best way is adding the variables inside function to avoid over write mistake 

(function()
{
    var x = 10;
    let s= 20;
    console.log("hello");
})()