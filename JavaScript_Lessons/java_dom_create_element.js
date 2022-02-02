//DOM create elements

//1. creat elements____________________________________
let container = document.createElement("div");
let head = document.createElement("h1");
let img = document.createElement("img");

//2. add content________________________________________
let content = document.createTextNode("hello world");
    // make the contenet child of head variable
head.appendChild(content);
img.src = "img/madrid.png";
img.style.width ="100px";

//3.add the to the place u want____________________________
container.appendChild(head);//the order is importatnt //here first
container.appendChild(img);//here second 
    //add the container in the body in HTML page
document.body.appendChild(container);
container.style.background="#666";
container.style.color="#fff";//txt color is white
container.style.padding="10px";
container.style.textAlign="center";

console.log(img);