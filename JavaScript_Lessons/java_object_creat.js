//creat object

let user1 = {
    name:"Abdul",

    getName:function(){
        return `hello ${this.name}`;
    }
}

//copy objet user1 to object user2 by 
let user2 = Object.create(user1);
user2.name="Ali";

// u cane change and add new data inside user2 while  user1 data still same
//check
console.log(user2.name);
console.log(user1.name);

console.log(user2.getName());
console.log(user1.getName());