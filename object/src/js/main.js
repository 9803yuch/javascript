class Person{
    firstname;
    age;
    color;

    constructor(firstname, age, color){
        this.firstname = firstname;
        this.age = age;
        this.color = color;
    }
}

let thisPerson = new Person ("Dilzat", 20, "blue");
let me = new Person ("Yuxuan", 24, "purple");

/*console.log(thisPerson);
console.log(me);



let pTag = document.getElementById ("text");
pTag.innerHTML = family[0].firstname;

window.onload = function(){
    let secondPerson = new Person ("Emma", 18, "red");
    console.log(secondPerson);
}
*/
let family = [thisPerson, me];

for (let i = 0; i < family.length; i ++){
    let container = document.createElement("ul");
    let name = document.createElement("li");
    let age = document.createElement("li");
    let color = document.createElement("li");
    container.className ="Person";
    name.className ="Person__name";
    name.innerHTML = family[i].firstname;
    age.className = "Person__age";
    age.innerHTML = family[i].age;
    color.className= "Person__color";
    color.innerHTML = family[i].color;
    container.appendChild(name);
    container.appendChild(age);
    container.appendChild(color);
    document.body.appendChild (container);

}





