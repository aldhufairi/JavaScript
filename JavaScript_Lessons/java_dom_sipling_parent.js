//DOM sipling and parent

let element = document.getElementById("second");

//sibling
// can remove, edit ,change , add  to the previous or next element that we call it by id
element.previousElementSibling.remove();
console.log(element.previousElementSibling);
console.log(element.nextElementSibling);

//parent
// can remove, edit ,change , add  to the parent of the element that we call it by id
element.parentElement.remove();