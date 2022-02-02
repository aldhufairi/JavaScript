//functions

function hello(name)
{
    console.log("Hello " + name);
}
hello("Ali");
hello("Ahmed");
hello("Fareed");

//__________________________________

function calcAge(age)
{
    let result1 = age * 356;
    console.log("Your Age in days is: " + result1 + "Days");
}

calcAge(32);
calcAge(18);

//__________________________________

function pro(price, taxes, ads)
{
    let product = price + taxes;
    let result = product + ads;
    console.log(result);
}

pro(200, 2.5, 10);
pro(133, 2.5, 21);
pro(422, 2.5, 24);