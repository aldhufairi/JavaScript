
// arguments

function hello(name="")
{
    console.log(`hello ${name}`);
}

hello();

//______________________________

// ...numbers << its array parameter

//this function sum the array elements togather جمع عناصر مع بعض
function calc(...numbers)
{
    let result = 0;

    for(let i =0; i < numbers.length; i++)
    {
        result += numbers[i];
    }
    console.log(result);
}

calc(10, 30, 30);