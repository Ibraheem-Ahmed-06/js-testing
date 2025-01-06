

function updateWeatherData (event) {
    event.preventDefault();

    const cityName = document.getElementById("city").value;
    const apiKey = "61c55c17596a94c0ea937ecc12da310a";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weatherInfoEl = document.getElementById("weatherInfo");
            weatherInfoEl.innerHTML = `<h2>Weather in ${data.name}</h2>
            <p>Temperature: ${(data.main.temp - 273.15).toFixed(2)} &#8451;</p>
            <p>Weather: ${data.weather[0].description}</p>`;
        })
}

document.getElementById('weatherForm').addEventListener('submit', updateWeatherData);

