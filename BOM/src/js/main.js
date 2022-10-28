document.getElementById("btn").addEventListener("click", btn);
document.getElementById("close").addEventListener("click", close);
document.getElementById("goB").addEventListener("click", goB);
document.getElementById("goForward").addEventListener("click", goForward);
document.getElementById("stopPing").addEventListener("click", stopPing);

// Länka till en ny sida 
    function myFunction(){
        window.open("https://www.w3schools.com");   
    }

// Stänga sidan
    function closeMyWindow(){
        window.close();
    }
// Gå bakåt
    function goB(){    
        history.back();
    }
// Gå framåt
    function goForward(){   
        history.forward;
    }
// Sätta tid 
    setTimeout(() => {
        console.log("Funktionen körd");
    }, 10000);

   let someRandomNumber = setInterval(() =>{
        console.log("ping");
    }, 2000);

    console.log(someRandomNumber);

    //avbryta interval

    function stopPing(){
        clearInterval(someRandomNumber);
    }

    let language = window.navigator.language;
    document.getElementById("demo").innerHTML="språket är " + language;

    //geolocation

let watch = 0;
if (navigator.geolocation) {
  watch = navigator.geolocation.watchPosition(success, error);
} else {
  alert("Din webbläsare är för gammal för denna moderna sida");
}

function success(position) {
  console.log("Lat:", position.coords.latitude);
  console.log("Lng:", position.coords.longitude);
}

function error(message) {
  console.log(message.message);
}

function stopGettingPositions() {
  navigator.geolocation.clearWatch(watch);
}

    
    
