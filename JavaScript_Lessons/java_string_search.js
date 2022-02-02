//search

let name = "i love java script";

console.log(name.indexOf("q",9)); // start from [9] in the left to right  then find "a" array place // second [jav"a"] from the left // if not find it will write[-1]

console.log(name.lastIndexOf("a",9)); // start from [9] in the right to right then find "a" array place //first [j"a"va] from the left // if not find it will write[-1]

//------------------

console.log(name.includes("a")); // search about "a" if find it will write [true] if doesnt find wiil erite [false]

console.log(name.includes("l", 2)); // search about "l" if find it will write [true] if doesnt find wiil erite [false]

//-------------------

console.log(name.startsWith("i")); //if the name variable start with "i" will wrrit [true] if not will write [false]

//^^^^^^^^^^^^^^^^^^^^

console.log(name.endsWith("t"));  //if the name variable end with "t" will wrrit [true] if not will write [false]

console.log(name.endsWith("j", 8));  //if the name variable end in length 8 >>>["i love "j"ava script] with "t" will wrrit [true] if not will write [false]







