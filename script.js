let apiKey = '20e32e4eb83733727d2be1bce18fc81a'

let cityName = "Dallas";
fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${apiKey}`)
.then(function (response) {

    return response.json()

})
.then(function (cityData){


    console.log(cityData[0].lat);
    console.log(cityData[0].lon);

    return {lat:cityData[0].lat, lon: cityData[0].lon}

})
.then(function(latLonData){
    return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latLonData.lat}&lon=${latLonData.lon}&appid=${apiKey}`)
        .then(function (response) {
    
            return response.json()
    
        })
        .then(function (data) {
    
            console.log(data);
    
    
        })



})