
// craet object with properties and functions
//user is an object

let x = 17;

let user = {
    //property_________________
    firstName:"Mohammed",
    lastName:"Ali",
    age:x,
    skills:["html", "css", "js", "python", "C#"],
    active:false,
    phoneNumber:{
        first:"01234",
        second:"56789"
    },
    address:{
        USA:"New york",
        Japan:"Tokyo",
    },
    //method__________________
    isActive:function(){
        if(user.active === true){
            return "hello user";
        }else{
            return "sorry you are not active";
        }      
    },
    getAge:function(){
        if(user.age >= 18){
            return "availabel";
        }else{
            return "unavailable";
        }
    },
};

console.log(user.address.USA);
console.log(user["address"]["USA"]);
console.log(user.isActive());
console.log(user.getAge());


