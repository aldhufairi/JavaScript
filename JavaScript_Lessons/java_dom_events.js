//DOM events (onclick)

let btn = document.getElementById("btn");
//___________________________________________________________
//first way:

//function hello()
//{
//    console.log("hello world");
//}

//onclick will make just the last code u werote it in 
//btn.onclick = hello;

//___________________________________________________________
//second way:
//so its better to always use addEventListener("click", function(){})

btn.addEventListener("click", function(){
    document.body.style.background="red";
})

btn.addEventListener("click", function(){
    btn.style.background="blue";
})

btn.addEventListener("click", function(){
    btn.style.color="white";
})