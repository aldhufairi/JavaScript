//Loop 02
// for loop and arrays

let names = ["Ahmed", "Abdul", "Mazen", "Mona", "Fareed"]

let x = "Gamal";

console.log(x.length); // = 5

//start, condition, steps
for(let i = 0 ; i < names.length ; i +=1 )
{
    console.log(names[i]);
}

for(let i = x.length-1 ; i >= 0 ;  --i )
{
    console.log(x[i]);
}