//DOM Cards

//cards array___________________________________
let names=["Ahmed", "Ali", "Abdul", "Fareed"];
let ages=["27 years old", "32 years old", "29 years old", "33 years old"];

// creat <div>>____________________________________
let container = document.createElement("div");
document.body.appendChild(container);
container.style.textAlign="center";


//function________________________________________
function element(name,ages)
{
    //elemets
    let card = document.createElement("div");
    let title = document.createElement("h2");
    let age = document.createElement("p");
    let img = document.createElement("img");

    //content
    let head = document.createTextNode(name);
    let agecontent = document.createTextNode(ages);
    img.src = "img/madrid.png";
    title.appendChild(head);
    age.appendChild(agecontent);

    //style
    card.style.width ="200px";
    card.style.background ="#444";
    card.style.color ="#fff";
    card.style.padding ="10px";//the border space
    card.style.margin ="2px";//space between cards
    card.style.display ="inline-block";



    img.style.width="100%";//100%of card width

    //place
    card.appendChild(title);
    card.appendChild(age);
    card.appendChild(img);
    container.appendChild(card);
}

//for loop______________________________
for(let i =0; i < 4; i++)
{
    element(names[i], ages[i]);
}