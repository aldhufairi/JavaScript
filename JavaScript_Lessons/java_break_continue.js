//Loop 02
// for loop, arrays and nasted loop

let cars = ["BMW", "Mercedes", "Honda", 1,2,3,4, "Toyota", "Nissan"];
let names = ["Ahmed", "Ali", "Abdul", 1,2,3,4, "Fareed", "Mona"];

//________________________continue
//start, condition, steps
for(let i = 0 ; i < cars.length ; i++ )
{
    if(typeof cars[i] == "number") // remove just the numbers from the array u can remove any thing u want
    {
        continue;
    }
    console.log(cars[i]);

}

//___________________ break

for(let j = 0 ; j < names.length ; j++ )
{
    
    if(typeof names[j] == "number") // remove just the numbers from the array u can remove any thing u want
    {
        break;
    }
    console.log(names[j]);
}
