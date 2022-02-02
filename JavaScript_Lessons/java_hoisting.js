//hoisting

hello();

function hello()
{
    console.log("hello");
}

//____________________

let hello1 = function()
{
    console.log("hello1");
}

hello1();