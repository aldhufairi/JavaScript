//DOM events (onclick)

let btn = document.getElementById("btn");
let inp = document.getElementById("inp");

let i = 1;

//when the page fully load do that function 
onload = function(){
    document.body.style.background="red";
}




//onclick 
//btn.onclick = function(){
//    console.log("click");
//}

//onmousedown
btn.onmousedown = function(){
    console.log("click");
}

//onkeyup keyboard keys there are many types pf events
inp.onkeyup = function(){
    console.log("click" + i++);
}

//onfocuse 
inp.onfocus = function(){
    inp.style.border="2px solid #f00"
}

//onblur when u remove the mouse from input space
inp.onblur = function(){
    inp.style.border="none"
}