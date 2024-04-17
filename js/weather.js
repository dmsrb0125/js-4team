const API_KEY = "78e9ace00c38f0c21930e949408f036e";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      const temp = Math.ceil(data.main.temp - 273.15);
      city.innerText = ` (${data.name})`;
      weather.innerText = `${data.weather[0].main} / ${temp}°C`;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

document.addEventListener("DOMContentLoaded", () => {
  navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
});
