function displayTemperature(response){
  let getCityName                  = response.data.name;
  let getWeatherDescription        = response.data.weather[0].description;
  let getHumidity                  = response.data.main.humidity;
  let getWind                      = Math.round(response.data.wind.speed);
  let cityName                     = document.querySelector("#city");
      cityName.innerHTML           = getCityName;
  let temperature                  = document.querySelector("#temperature");
  let holdTempValue                = Math.round(response.data.main.temp);
      temperature.innerHTML        = holdTempValue;
  let weatherDescription           = document.querySelector("#weather-description");
      weatherDescription.innerHTML = getWeatherDescription;
  let humidity                     = document.querySelector("#humidity");
      humidity.innerHTML           = getHumidity;
  let wind                         = document.querySelector("#wind");
      wind.innerHTML               = getWind;

}
let apiKey = "76408f461806bdd0e29fa34c52cb5991";
let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=Winnipeg&appid=${apiKey}&units=metric`;

axios.get(apiURL).then(displayTemperature);