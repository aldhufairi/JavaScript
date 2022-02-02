//bom setTimeOut setInterval

// setTimeOut: run the code just one time after time u set it in 
// setInterval: tun the code every time depend on the time that u set in

//------------------------------------------------------------------------

//setTimeout(function(){},1000) // will run after 1s  //1000=1s //

let hello = setTimeout(function(){
    console.log("hello")
},1000);

//clearTimeout(hello); // stop setTimeOut

//------------------------------------------------------------------------
//setInterval(function(){},3000) //that code will run every 3000s = 3s

//clearInterval(test); // stop setInterval

let i = 0;
let test = setInterval(function(){
    console.log(i++)
    if(i == 4){
        clearInterval(test);
    }
},1000);

