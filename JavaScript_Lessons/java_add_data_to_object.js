// add data to an object

let user = {
    age:18,
};

//add proprty______
user.name = "Abdul";
console.log(user.name);

//add method_______
user.hello = function(){
    return " hello";
}
console.log(user.hello());


//change the data ____________________

//call it before change
console.log(user.age);

//change data inside the object
user.age = 33;

//call it after change
console.log(user.age);


console.log(user);

