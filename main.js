
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPosition, showError);
} else {
  console.log("Geolocation is not supported by this browser.");
}

function showPosition(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  Weather(`${lat},${lon}`);
}

function showError(error) {
  console.error("Geolocation error: " + error.message);  
  Weather();
}


 var searchBox = document.querySelector(".search")
 var searchBtn = document.querySelector(".button")   



async function Weather(city ="london") {
  var res = await fetch(`http://api.weatherapi.com/v1/current.json?key=7c126e819c154b3894315016241812&q=${city}`) 
  res = await res.json()


  localStorage.setItem("WAPIkey", JSON.stringify(res))

  
  document.querySelector(".location").innerHTML = res.location.name;
  document.querySelector(".degree").innerHTML = res.current.temp_c + "°C";
  document.querySelector(".degreetomorrow").innerHTML =res.current.temp_f + "°C";
  document.querySelector(".degree3").innerHTML =res.current.feelslike_c + "°C";
  document.querySelector(".data").innerHTML = res.location.localtime;

  searchBtn.addEventListener("click" , function(){
    Weather(searchBox.value)
    clear()
  })   
  window.addEventListener("keydown" , function(e){   
    if(e.code == "Enter"){
      Weather(searchBox.value)         
      clear()
    }     if(e.code == "Space"){
      Weather(searchBox.value)         
      clear()
    }    
  })  
}
function clear(){
  searchBox.value = ""
}
Weather()