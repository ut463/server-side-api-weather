const apiKey = '9c25fc7a3b07ba90454744630c53166e';



function getLocation(cityName) {
    const apiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${apiKey}`

    fetch(apiUrl).then(function(response){
        return response.json();
    
    }).then(function (data){
        console.log(data);
        const lat = data[0].lat;
        const lon = data[0].lon;
        getWeather(lat,lon);
    })
}

function getWeather(lat, lon, cityName) {
    const apiUrl =`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

    fetch(apiUrl).then(function(response) {
        return response.json();
    }).then(function (data){
        console.log(data)
    
    const temp = data.list[0].main.temp;
    const wind = data.list[0].main.wind;
    const humidity = data.list[0].main.humidity;
    const todaysForecast = `
    <div>
        <h2>${cityName}</h2>
        <p>${temp}</p>
        <p>${wind}</p>
        <p>${humidity}</p>
    </div>
    `
    $('#today').append(todaysForecast);
    })
}

function createCard(weather){
    const card= $('<div>')
}


$('#search-btn').on('click', function(event) {
    const city = $('#city-search').val().trim();
    getLocation(city);
})