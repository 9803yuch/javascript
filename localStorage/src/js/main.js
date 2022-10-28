let me ={
    firstname:"Yuxuan",
    age:24
}

let meText= JSON.stringify(me);
localStorage.setItem("me", meText);
let meFromLS =localStorage.getItem("me");
let meFromLSObj =JSON.parse(meFromLS);
localStorage.setItem("me",meFromLSObj);

let container = document.createElement("div");
let name = document.createElement("h3");
let age = document.createElement("span");
container.className="Person";
name.className="Person__name";
name.innerHTML=meFromLSObj.firstname;
age.className="Person__age";
age.innerHTML=me.age;

container.appendChild(name);
container.appendChild(age);
document.body.appendChild(container);

let meFromLSObjback = JSON.stringify(meFromLS);

localStorage.setItem("me", meFromLSObjback);
let getmeFromLSL = localStorage.getItem("me");