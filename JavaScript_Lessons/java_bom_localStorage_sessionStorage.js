//bom locaStorage sessionStorage

// local Storage: storage that saved in ur domain, saved data will be there foreve unliss u remove it
// session Storage: storage that saved in ur domain, saved data will be there while u open the tap when u close the page the saved data will be removed

//-------------------------------------------------------------------------------------------------------
//local Storage
//set data in local storage
//localStorage.setItem("key","value");
 // value always string u have to convert it to string by JSON.stringify()
 // convert the data to its original type by this code 
 // JSON.parse(localStorage.getItem("data"))

//localStorage.setItem("name","Abdul"); // set value string
//
//localStorage.setItem("age",JSON.stringify(25)); //set value num //JSON.stringify() convert it to string by //json
//
//localStorage.setItem("skill",JSON.stringify([1,2,3])); //set value array
//
////set value as object:
//
//localStorage.user = JSON.stringify({
//    name: "fareed",
//    age: 31,
//});

//console.log(typeof localStorage.getItem("skill")); //here string
//console.log(typeof JSON.parse(localStorage.getItem("skill")));// here object coz array is object in consol

//console.log(localStorage.key(0));//coz the data is saved same as array in the local storage so that mean key(0) is first saved data

//remove local storage:

//localStorage.removeItem("user");//just remove user data

//localStorage.clear(); // remove all the data in local storage

//---------------------------------------------------------------------------------------------------------
// session Storage

//let txt = document.getElementById("txt");
//
//if(sessionStorage.length > 0){
//    txt.value = sessionStorage.getItem("txt")
//}
//
//txt.onkeyup = function(){
//    sessionStorage.setItem("txt", txt.value)
//}
 //----------------------------------------------------------------------------------------------------

 //small project foe local storage and session storage

 if(localStorage.length > 0){
    document.body.style.background = localStorage.color;
 }

 function setColor(color){
     localStorage.setItem("color", color);
     document.body.style.background = color;

 }