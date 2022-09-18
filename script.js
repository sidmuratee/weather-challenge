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
            let cityName = document.getElementById('cityName');
            cityName.textContent = weatherData.name;
            let iconCurrent = document.querySelector("#iconCurrent")
            iconCurrent.src = "https://openweathermap.org/img/w/" + weatherData.weather[0].icon + ".png"

            let temp = document.getElementById('temp');
            temp.textContent = 'Temperature: ' + weatherData.main.temp;

            let wind = document.getElementById('wind');
            wind.textContent = `Wind: ${weatherData.wind.speed}`

            let humid = document.getElementById('humid');
            humid.textContent = `Humidity: ${weatherData.main.humidity}`

            currentDiv.appendChild(cityName);
            currentDiv.appendChild(temp);
            currentDiv.appendChild(humid);
            currentDiv.appendChild(wind);
            // let card1Date = document.querySelector('.card1Date')
            // let temp1 = document.querySelector('#temp1')
            // let wind1 = document.querySelector('#wind1')
            // let humid1 = document.querySelector('#humidity1')

            // let card5Date = document.querySelector('.card5Date')
            // let temp5 = document.querySelector('#temp5')
            // let wind5 = document.querySelector('#wind5')
            // let humid5 = document.querySelector('#humidity5')
            // card5Date.textContent = weatherData.dt_txt;
            // temp5.textContent = weatherData.main.temp
            // wind5.textContent = weatherData.wind.speed
            // humid5.textContent = weatherData.main.humidity
            getForecast(lat, lon)
        })
}

// function getForecast(lat, lon) {

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
//     let card2Date = document.querySelector('.card2Date')
//     let temp2 = document.querySelector('#temp2')
//     let wind2 = document.querySelector('#wind2')
//     let humid2 = document.querySelector('#humidity2')

//     fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`)
//         .then(function (response) {
//             return response.json()

//         })
//         .then(function (weatherData) {
//             console.log(weatherData);
//             for (var i = 0; i < weatherData.list.length; i++) {
//                 if (weatherData.list[i].dt_txt.includes('12:00:00')) {
//                     console.log(weatherData.list[2])
//                     let forecastData = weatherData.list[2];
//                     card2Date.textContent = forecastData.dt_txt;
//                     temp2.textContent = forecastData.main.temp
//                     wind2.textContent = forecastData.wind.speed
//                     humid2.textContent = forecastData.main.humidity
//                 }
//             }
//         })
// }
// function getForecast(lat, lon) {
//     let card3Date = document.querySelector('.card3Date')
//     let temp3 = document.querySelector('#temp3')
//     let wind3 = document.querySelector('#wind3')
//     let humid3 = document.querySelector('#humidity3')

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
//                     card3Date.textContent = forecastData.dt_txt;
//                     temp3.textContent = forecastData.main.temp
//                     wind3.textContent = forecastData.wind.speed
//                     humid3.textContent = forecastData.main.humidity
//                 }
//             }
//         })
// }
// function getForecast(lat, lon) {
//     const card4Date = document.querySelector('.card4Date')
//     const temp4 = document.querySelector('#temp4')
//     const wind4 = document.querySelector('#wind4')
//     const humid4 = document.querySelector('#humidity4')

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
//                     card4Date.textContent = forecastData.dt_txt;
//                     temp4.textContent = forecastData.main.temp
//                     wind4.textContent = forecastData.wind.speed
//                     humid4.textContent = forecastData.main.humidity
//                 }
//             }
//         })
// }
function getForecast(lat, lon) {
    // const card5Date = document.querySelector('.card5Date')
    // const temp5 = document.querySelector('#temp5')
    // const wind5 = document.querySelector('#wind5')
    // const humid5 = document.querySelector('#humidity5')

    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`)
        .then(function (response) {
            return response.json()

        })
        .then(function (weatherData) {
            console.log(weatherData);
            for (var i = 0; i < weatherData.list.length; i++) {
                if (weatherData.list[i].dt_txt.includes('12:00:00')) {
                    console.log(weatherData.list[i])

                    let forecastData1 = weatherData.list[7];
                    let card1Date = document.querySelector('.card1Date')
                    // let icon1 = document.querySelector("#icon1")
                    // icon1.src = "https://openweathermap.org/img/w/" + weatherData.weather[0].icon + ".png"
                    let temp1 = document.querySelector('#temp1')
                    let wind1 = document.querySelector('#wind1')
                    let humid1 = document.querySelector('#humidity1')
                    card1Date.textContent = forecastData1.dt_txt;
                    temp1.textContent = forecastData1.main.temp
                    wind1.textContent = forecastData1.wind.speed
                    humid1.textContent = forecastData1.main.humidity

                    let forecastData2 = weatherData.list[15];
                    let card2Date = document.querySelector('.card2Date')
                    let temp2 = document.querySelector('#temp2')
                    let wind2 = document.querySelector('#wind2')
                    let humid2 = document.querySelector('#humidity2')
                    card2Date.textContent = forecastData2.dt_txt;
                    temp2.textContent = forecastData2.main.temp
                    wind2.textContent = forecastData2.wind.speed
                    humid2.textContent = forecastData2.main.humidity

                    let forecastData3 = weatherData.list[23];
                    let card3Date = document.querySelector('.card3Date')
                    let temp3 = document.querySelector('#temp3')
                    let wind3 = document.querySelector('#wind3')
                    let humid3 = document.querySelector('#humidity3')
                    card3Date.textContent = forecastData3.dt_txt;
                    temp3.textContent = forecastData3.main.temp
                    wind3.textContent = forecastData3.wind.speed
                    humid3.textContent = forecastData3.main.humidity

                    let forecastData4 = weatherData.list[31];
                    let card4Date = document.querySelector('.card4Date')
                    let temp4 = document.querySelector('#temp4')
                    let wind4 = document.querySelector('#wind4')
                    let humid4 = document.querySelector('#humidity4')
                    card4Date.textContent = forecastData4.dt_txt;
                    temp4.textContent = forecastData4.main.temp
                    wind4.textContent = forecastData4.wind.speed
                    humid4.textContent = forecastData4.main.humidity

                    let forecastData5 = weatherData.list[39];
                    let card5Date = document.querySelector('.card5Date')
                    let temp5 = document.querySelector('#temp5')
                    let wind5 = document.querySelector('#wind5')
                    let humid5 = document.querySelector('#humidity5')
                    card5Date.textContent = forecastData5.dt_txt;
                    temp5.textContent = forecastData5.main.temp
                    wind5.textContent = forecastData5.wind.speed
                    humid5.textContent = forecastData5.main.humidity
                }
            }
        })
}

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