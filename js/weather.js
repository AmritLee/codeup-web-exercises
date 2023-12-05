mapboxgl.accessToken = MB_key;

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [-121.3027, 38.5891],
    zoom: 12,
});

const lat = 38.5891;
const lon = -121.3027;

document.addEventListener('DOMContentLoaded', function () {
    const currentDateTimeElement = document.getElementById('current-time');
    function setCurrentDateTime() {
        const now = new Date();
        const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
        const formattedDateTime = now.toLocaleDateString('en-US', options) + ' ' + now.toLocaleTimeString();
        currentDateTimeElement.textContent = `${formattedDateTime}`;
    }
    setCurrentDateTime();
    setInterval(setCurrentDateTime, 60000);
});

// Function to get the current weather
function getCurrentWeather() {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WM_key}&units=imperial`)
        .then(response => response.json())
        .then(currentWeather => {
            const temperature = currentWeather.main.temp;
            const description = currentWeather.weather[0].description;
            const iconCode = currentWeather.weather[0].icon;
            const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;
            document.getElementById('weather-info').innerHTML = `
                <p>Temperature: ${temperature} °F</p>
                <p>Description: ${description}</p>
                <img src="${iconUrl}" alt="Weather Icon">
            `;
        })
        .catch(error => console.error('Error fetching current weather:', error));
}

// Function to get the weather for a specific location
function getWeather(latitude, longitude) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${WM_key}&units=imperial`)
        .then(response => response.json())
        .then(currentWeather => {
            const temperature = currentWeather.main.temp;
            const description = currentWeather.weather[0].description;
            const iconCode = currentWeather.weather[0].icon;
            const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;
            document.getElementById('weather-info').innerHTML = `
                <p>Temperature: ${temperature} °F</p>
                <p>Description: ${description}</p>
                <img src="${iconUrl}" alt="Weather Icon">
            `;
        })
        .catch(error => console.error('Error fetching current weather:', error));
    // Update the 5-day forecast for the new location
    getFiveDayForecast(latitude, longitude);
}

// Function to get the 5-day forecast
function getFiveDayForecast(latitude, longitude) {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${WM_key}&units=imperial`)
        .then(response => response.json())
        .then(fiveDayForecast => {
            const forecastContainer = document.getElementById('forecast-container');
            forecastContainer.innerHTML = ''; // Clear previous content
            const forecastData = {};
            // Highest and lowest temperatures for each day
            fiveDayForecast.list.forEach(forecast => {
                const forecastDate = new Date(forecast.dt * 1000);
                const dayKey = forecastDate.toLocaleDateString('en-US');
                if (!forecastData[dayKey]) {
                    forecastData[dayKey] = {
                        date: dayKey,
                        highTemp: -Infinity,
                        lowTemp: Infinity,
                    };
                }
                const temperature = forecast.main.temp;
                if (temperature > forecastData[dayKey].highTemp) {
                    forecastData[dayKey].highTemp = temperature;
                }
                if (temperature < forecastData[dayKey].lowTemp) {
                    forecastData[dayKey].lowTemp = temperature;
                }
            });
            // Display the highest and lowest temperatures
            Object.values(forecastData).forEach(data => {
                const day = new Date(data.date).toLocaleDateString('en-US', {weekday: 'short'});
                const forecastDayElement = document.createElement('div');
                forecastDayElement.classList.add('forecast-day');
                forecastDayElement.innerHTML = `
                    <p>${day}</p>
                    <p>Highest: ${data.highTemp} °F</p>
                    <p>Lowest: ${data.lowTemp} °F</p>
                `;
                forecastContainer.appendChild(forecastDayElement);
            });
        })
        .catch(error => console.error('Error fetching 5-day forecast:', error));
}

// Function to search for a location and update the forecast
function searchLocation() {
    const locationInput = document.getElementById('location-input').value;
    if (locationInput.trim() !== '') {
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(locationInput)}.json?access_token=${MB_key}`)
            .then(response => response.json())
            .then(data => {
                if (data.features && data.features.length > 0) {
                    const coordinates = data.features[0].geometry.coordinates;
                    const locationName = data.features[0].place_name;
                    updateWeatherAndMap(coordinates[1], coordinates[0], locationName);
                } else {
                    console.error('Location not found');
                }
            })
            .catch(error => console.error('Error fetching location:', error));
    } else {
        // Keep "Rancho Cordova" as the default city
        updateWeatherAndMap(38.5891, -121.3027, 'Rancho Cordova');
    }
}

// Function to update the 5-day forecast based on coordinates
function updateForecast(latitude, longitude) {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${WM_key}&units=imperial`)
        .then(response => response.json())
        .then(fiveDayForecast => {
            const forecastContainer = document.getElementById('forecast-container');
            forecastContainer.innerHTML = ''; // Clear previous content
            const forecastData = {};
            // Extract highest and lowest temperatures for each day
            fiveDayForecast.list.forEach(forecast => {
                const forecastDate = new Date(forecast.dt * 1000);
                const dayKey = forecastDate.toLocaleDateString('en-US');
                if (!forecastData[dayKey]) {
                    forecastData[dayKey] = {
                        date: dayKey,
                        highTemp: -Infinity,
                        lowTemp: Infinity,
                    };
                }
                const temperature = forecast.main.temp;
                if (temperature > forecastData[dayKey].highTemp) {
                    forecastData[dayKey].highTemp = temperature;
                }
                if (temperature < forecastData[dayKey].lowTemp) {
                    forecastData[dayKey].lowTemp = temperature;
                }
            });
            // Display the highest and lowest temperatures for each day
            Object.values(forecastData).forEach(data => {
                const day = new Date(data.date).toLocaleDateString('en-US', {weekday: 'short'});
                const forecastDayElement = document.createElement('div');
                forecastDayElement.classList.add('forecast-day');
                forecastDayElement.innerHTML = `
                    <p>${day}</p>
                    <p>Highest: ${data.highTemp} °F</p>
                    <p>Lowest: ${data.lowTemp} °F</p>
                `;
                forecastContainer.appendChild(forecastDayElement);
            });
        })
        .catch(error => console.error('Error fetching 5-day forecast:', error));
}


let marker; // Variable to hold the map marker

// Function to update the map marker
function updateMapMarker(lng, lat) {
    if (marker) {
        marker.remove();
    }
    marker = new mapboxgl.Marker()
        .setLngLat([lng, lat])
        .addTo(map);
}

// Function to handle map click event
function handleMapClick(event) {
    const {lng, lat} = event.lngLat;
    updateMapMarker(lng, lat);
    getWeather(lat, lng);
    updateForecast(lat, lng);
}

map.on('click', handleMapClick);

// Function to handle marker drag end event
function handleMarkerDragEnd() {
    const lngLat = marker.getLngLat();
    getWeather(lngLat.lat, lngLat.lng);
    updateForecast(lngLat.lat, lngLat.lng);
}

// Function to enable marker dragging
function enableMarkerDragging() {
    marker.setDraggable(true);
    marker.on('dragend', handleMarkerDragEnd);
}

// Function to disable marker dragging
function disableMarkerDragging() {
    if (marker) {
        marker.setDraggable(false);
        marker.off('dragend', handleMarkerDragEnd);
    }
}

// Function to initialize map marker
function initializeMapMarker() {
    const defaultLngLat = [-121.3027, 38.5891];
    marker = new mapboxgl.Marker()
        .setLngLat(defaultLngLat)
        .addTo(map);
    getWeather(defaultLngLat[1], defaultLngLat[0]);
    updateForecast(defaultLngLat[1], defaultLngLat[0]);
}
initializeMapMarker();

// Function to update weather and map based on coordinates
function updateWeatherAndMap(latitude, longitude, locationName) {
    document.getElementById('currentCity').textContent = locationName;
    map.flyTo({
        center: [longitude, latitude],
        zoom: 12,
    });
    getWeather(latitude, longitude);
    updateForecast(latitude, longitude);
    updateMapMarker(longitude, latitude);
}

// Enable marker dragging when the map is clicked
map.on('click', () => {
    enableMarkerDragging();
});

// Disable marker dragging when the search is performed
document.getElementById('location-input').addEventListener('input', () => {
    disableMarkerDragging();
});

// Disable marker dragging when the search button is clicked
document.getElementById('search-container').querySelector('button').addEventListener('click', () => {
    disableMarkerDragging();
});

// Disable marker dragging when Enter key is pressed in the search input
document.getElementById('location-input').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        disableMarkerDragging();
    }
});

updateWeatherAndMap(38.5891, -121.3027, 'Rancho Cordova');
getCurrentWeather();
getFiveDayForecast();
