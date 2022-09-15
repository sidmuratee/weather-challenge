let apiKey = '2010b8ae4ce65d9eb3560a2ab9904413'
// let cityName = 
let searchInput = document.querySelector("#searchInput")
let searchForm = document.querySelector("#searchForm")
let button = document.querySelector("#button")
let currentDiv = document.querySelector(".current")

function getCurrent(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`)
        .then(function (response) {
            return response.json()

        })
        .then(function (weatherData) {
            console.log(weatherData);
            let h2 = document.createElement('h2');
            h2.textContent = weatherData.name;

            let pTemp = document.createElement('p');
            pTemp.textContent = 'Temperature: ' + weatherData.main.temp;

            let pWind = document.createElement('p');
            pWind.textContent = `Wind: ${weatherData.wind.speed}`
            
            let pHumid = document.createElement('p');
            pHumid.textContent = `Humidity: ${weatherData.main.humidity}`

            currentDiv.appendChild(h2);
            currentDiv.appendChild(pTemp);
            currentDiv.appendChild(pHumid);
            currentDiv.appendChild(pWind);

            getForecast(lat, lon)
        })
}

function getForecast(lat, lon) {
    const card1Date = document.querySelector('.card1Date')
    const temp1 = document.querySelector('#temp1')
    const wind1 = document.querySelector('#wind1')
    const humid1 = document.querySelector('#humidity1')

    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`)
        .then(function (response) {
            return response.json()

        })
        .then(function (weatherData) {
            console.log(weatherData);
            for (var i = 0; i < weatherData.list.length; i++) {
                if (weatherData.list[i].dt_txt.includes('12:00:00')) {
                    console.log(weatherData.list[i])
                    let forecastData = weatherData.list[i];
                    card1Date.textContent = forecastData.dt_txt;
                    temp1.textContent = forecastData.main.temp
                    wind1.textContent = forecastData.wind.speed
                    humid1.textContent = forecastData.main.humidity
                }
            }
        })
}


// function getForecast(lat, lon) {
//     const card2Date = document.querySelector('.card2Date')
//     const temp2 = document.querySelector('#temp2')
//     const wind2 = document.querySelector('#wind2')
//     const humid2 = document.querySelector('#humidity2')

//     fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`)
//         .then(function (response) {
//             return response.json()

//         })
//         .then(function (weatherData) {
//             console.log(weatherData);
//             for (var i = 0; i < weatherData.list.length; i++) {
//                 if (weatherData.list[i].dt_txt.includes('12:00:00')) {
//                     console.log(weatherData.list[i])
//                     let forecastData = weatherData.list[i];
//                     card2Date.textContent = forecastData.dt_txt;
//                     temp2.textContent = forecastData.main.temp
//                     wind2.textContent = forecastData.wind.speed
//                     humid2.textContent = forecastData.main.humidity
//                 }
//             }
//         })
// }
// function getForecast(lat, lon) {
//     const card1Date = document.querySelector('.card1Date')
//     const temp1 = document.querySelector('#temp1')
//     const wind1 = document.querySelector('#wind1')
//     const humid1 = document.querySelector('#humidity1')

//     fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`)
//         .then(function (response) {
//             return response.json()

//         })
//         .then(function (weatherData) {
//             console.log(weatherData);
//             for (var i = 0; i < weatherData.list.length; i++) {
//                 if (weatherData.list[i].dt_txt.includes('12:00:00')) {
//                     console.log(weatherData.list[i])
//                     let forecastData = weatherData.list[i];
//                     card1Date.textContent = forecastData.dt_txt;
//                     temp1.textContent = forecastData.main.temp
//                     wind1.textContent = forecastData.wind.speed
//                     humid1.textContent = forecastData.main.humidity
//                 }
//             }
//         })
// }
// function getForecast(lat, lon) {
//     const card1Date = document.querySelector('.card1Date')
//     const temp1 = document.querySelector('#temp1')
//     const wind1 = document.querySelector('#wind1')
//     const humid1 = document.querySelector('#humidity1')

//     fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`)
//         .then(function (response) {
//             return response.json()

//         })
//         .then(function (weatherData) {
//             console.log(weatherData);
//             for (var i = 0; i < weatherData.list.length; i++) {
//                 if (weatherData.list[i].dt_txt.includes('12:00:00')) {
//                     console.log(weatherData.list[i])
//                     let forecastData = weatherData.list[i];
//                     card1Date.textContent = forecastData.dt_txt;
//                     temp1.textContent = forecastData.main.temp
//                     wind1.textContent = forecastData.wind.speed
//                     humid1.textContent = forecastData.main.humidity
//                 }
//             }
//         })
// }
// function getForecast(lat, lon) {
//     const card1Date = document.querySelector('.card1Date')
//     const temp1 = document.querySelector('#temp1')
//     const wind1 = document.querySelector('#wind1')
//     const humid1 = document.querySelector('#humidity1')

//     fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`)
//         .then(function (response) {
//             return response.json()

//         })
//         .then(function (weatherData) {
//             console.log(weatherData);
//             for (var i = 0; i < weatherData.list.length; i++) {
//                 if (weatherData.list[i].dt_txt.includes('12:00:00')) {
//                     console.log(weatherData.list[i])
//                     let forecastData = weatherData.list[i];
//                     card1Date.textContent = forecastData.dt_txt;
//                     temp1.textContent = forecastData.main.temp
//                     wind1.textContent = forecastData.wind.speed
//                     humid1.textContent = forecastData.main.humidity
//                 }
//             }
//         })
// }

function callOne(userInput) {
    let url = `http://api.openweathermap.org/geo/1.0/direct?q=${userInput}&appid=${apiKey}`
    fetch(url)

        .then(function (response) {
            return response.json()
        })
        .then(function (cityData) {
            console.log(cityData[0].lat);
            console.log(cityData[0].lon);
            let lat = cityData[0].lat;
            let lon = cityData[0].lon
            //return { lat: cityData[0].lat, lon: cityData[0].lon };
            getCurrent(lat, lon)
        })
}


function handleFormSubmit(event) {
    event.preventDefault()
    let userInput = searchInput.value.trim()
    console.log(userInput)
    callOne(userInput);
}

searchForm.addEventListener("submit", handleFormSubmit)


// render (handleFormSubmit(userInput)){}???/// to save prior searches?

    // function currentWeather(weatherData){

    // 