//assign object

let a1 ={
    num1:1,
    hello:function(){
        return "hello";
    }
}

let a2 = {
    num2:2
}

let a3 = {
    num3:3
}

//num4 new propert
let a4 = Object.assign(a1,a2,a3,{
    num4:4
})

//change property
a4.num1 = 10;
//add new property
a4.r = 100;

console.log(a4);