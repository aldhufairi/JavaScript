//DOM sipling and parent

let container = document.getElementById("container");

//add txt to <div> ________________
container.innerHTML="hello world";

//element.style.ptoperty = value___________
//container.style.backgroundColor="#444";
//container.style.color="#fff";
//container.style.padding="10px";
//container.style.borderLeft="4px solid #fa0";

//setProperty____________

container.style.setProperty("color", "red", "important");

//remove property_________
//container.style.removeProperty("backgroundColor");

console.log(container);