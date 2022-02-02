//Loop 02
// for loop, arrays and nasted loop

let cars = ["BMW", "Mercedes", "Honda", "Toyota", "Nissan"];
let models = [1989, 1995, 2000, 2010, 2015, 2020, 2021, 2022];
let colors =["Blake", "Red", "white"];

//start, condition, steps
for(let i = 0 ; i < cars.length ; i++ )
{
    console.log(`Car: ${cars[i]}`); // backtick ``` its [shift + @]
    for(let j =0; j < models.length; j++ )
    {
        console.log(`Model: ${models[j]}`);
    }
    for(let x =0; x < colors.length; x++ )
    {
        console.log(`Color: ${colors[x]}`);
    }
    console.log("__________________________"); 
}
