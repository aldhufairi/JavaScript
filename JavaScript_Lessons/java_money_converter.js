//DOM money converter

let dollar = document.getElementById("dollar");
let riyal = document.getElementById("riyal");

//from dollar to saudi riyal
dollar.onkeyup=function(){
    riyal.value=dollar.value * 3.75;
}

//from saudi riyal to dollar
riyal.onkeyup=function(){
    dollar.value=riyal.value / 3.75;
}

