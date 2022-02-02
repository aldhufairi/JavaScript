//DataType : [ARRAY]

//splice(start, count, add, add)
//slice (start, end)


let names = ["Abdul", "Fareed", "Ahmed", "Mazen"];

//names.splice(0,1); //0 is start place of array to remove or add, 1 is just one element will remove from start place .

//names.splice(0,1,"khalid","zaki"); //this code will remoce fist one and add two elements more

//names.splice(0,0,"khalid","zaki"); // this code will just add two elements from the first

//names.splice(0,3); // start from 0 until[2], place number 3 will not include

console.log(names.splice(0,2)); //will not effect on the orginal array so its kinda make new array 

console.log(names);







