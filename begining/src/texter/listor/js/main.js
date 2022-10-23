let firstName="Yuxuan";

function myFirstName(){

    for (let i = 0; i < firstName.length; i++){
        console.log(firstName[i]);
        if (i < firstName.length){
            console.log(" ");
        }
    }  
}
myFirstName();

let numbers=[2,4,6,8,10,12,14,16,18,20];
let average = 0;
let sum = 0;

for(let i = 0; i < numbers.length; i ++){
    console.log(numbers[i]);
    sum += numbers[i];
    average = sum / numbers.length;
}
console.log(sum, average); 

let animals = ["katt", "hund", "fisk", "zebra"];
let list = document.getElementById("myList");

for (i =0; i < animals.length; i ++){
    let li= document.createElement("li");
    li.innerText = animals[i];
    list.appendChild(li);
}





