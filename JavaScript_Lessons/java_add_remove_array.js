//DataType : [ARRAY]

let names = ["Abdul", "Fareed", "Ahmed", "Mazen"];

names.push("khalid", "abdullah"); //push is added element to array in the end

names.unshift("Salim", "Ali"); //unshift add element array in start

names.shift(); // remove one element from the start but still save it // u cant remove many elements just by write again and again 
names.shift();
names.shift();

names.pop(); // remove one element from the end of the array but still save it// u cant remove many elements just by write again and again 
names.pop();
names.pop();

console.log(names);







