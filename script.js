let apiKey = '2010b8ae4ce65d9eb3560a2ab9904413'
// let cityName = 
let searchInput = document.querySelector("#searchInput")
let searchForm = document.querySelector("#searchForm")
let button = document.querySelector("#button")

function callOne(userInput){
let url = `http://api.openweathermap.org/geo/1.0/direct?q=${userInput}&appid=${apiKey}`
fetch(url)

    .then(function (response) {

        return response.json()

    })
    .then(function (cityData) {


        console.log(cityData[0].lat);
        console.log(cityData[0].lon);
        return { lat: cityData[0].lat, lon: cityData[0].lon };
    })
    .then(function (latLonData) {
        return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latLonData.lat}&lon=${latLonData.lon}&units=imperial&appid=${apiKey}`)
            .then(function (response) {
                return response.json()

            })
            .then(function (weatherData) {
                console.log(weatherData);

            })
    })
}

function handleFormSubmit(event) {
    event.preventDefault()
    let userInput = searchInput.value.trim()
    console.log(userInput)
    callOne(userInput);
}

searchForm.addEventListener( "submit" ,handleFormSubmit)

    // function currentWeather(weatherData)