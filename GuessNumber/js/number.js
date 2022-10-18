let textInput
let textMessage = document.getElementById("pText");
let clickButton = document.getElementById("myButton");

function reactOnInput(){
    textInput = parseInt(document.getElementById("someNumber").value);

    if(textInput < 100){
        textMessage.innerHTML = "Du gissa for lågt";    
    }else if(textInput >100){
        textMessage.innerHTML = "Du gisaa för högt";
    }else{
        textMessage.innerHTML ="du har rätt";
    }
}

clickButton.addEventListener("click",  reactOnInput);
