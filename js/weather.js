const API_KEY = "62b3e567d906a1b5db72f422643c9ff5";

const onGeoOk = (position) => {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector('#weather span:first-child');
      const city = document.querySelector('#weather span:last-child');
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

const onGeoError = () => {
  alert("Can't find you. no weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);