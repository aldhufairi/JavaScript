//repeat
//length
//access
//search
//slice
//split



let name = "Abdul";

let x = "i love java script";

console.log(name.repeat(3)); // repeat the name 3 times 
console.log(name.length); // count how many data in the string variable
console.log(name[0]); // access to the first litter of the string value
console.log(name.charAt[0]); //access to the first litter of the string value

//=------------------------

console.log(x.indexOf("v")); // search of the "v" letter array place in x variable search from left to right
console.log(x.indexOf("v", 5)); //start search from the left in [4] to the right

console.log(x.lastIndexOf("c")); // search of the "c" letter array place in x variable search from right to left
console.log(x.lastIndexOf("i", 3));//start search about "i" from the right in [3] to the left

 //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

 console.log(x.slice(0)); // cut the string value from [0] to the end
 console.log(x.slice(0, 6)); // cut the string value from [0] to [6], the [6] value will not include

 //^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 console.log(x.split(" ")); // cut the x valuse from " " <space and put every value in one array

 console.log(x.split(" ", 2)); // cut it two times 

 console.log(x.split("")); // here will cut it every letter in x variable



