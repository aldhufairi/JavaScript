//DOM toggle class

let hello = document.getElementById("hello");


//___________________________________
//left click:
//hello.onclick = function(){
//    hello.classList.add("name");

//}

//right click:
//hello.oncontextmenu = function(){
//    hello.classList.remove("name");
//}

//___________________________________

hello.onclick = function(){
    hello.classList.toggle("name");

}

