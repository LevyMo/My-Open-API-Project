// fetch weather conditions data for the day
fetch('https://api.open-meteo.com/v1/forecast?latitude=25.7743&longitude=-80.1937&hourly=weather_code&temperature_unit=fahrenheit&forecast_days=1')
  .then(response => {
    if (!response.ok) {
      throw new Error('Request failed');
    }
    return response.json();
  })
  .then(data => {
    let hourlyCode = data.hourly.weather_code;
    console.log(hourlyCode);
    displayCondition(hourlyCode);
    let hours = data.hourly;
    console.log(hours);
  })
  .catch(error => {
    console.error('An error has occurred:', error);
  });
function displayCondition(data){
  let codeSection = document.getElementById('code-info');
  let codeList = codeSection.querySelector('ul');
  data.forEach(data =>{
    let conditionText = getWeatherCondition(data);
    let code = document.createElement('li');
    code.innerHTML = `${conditionText}`
    codeList.appendChild(code);
  })
};
function getWeatherCondition(weatherCode) {
  let conditionText = '';
  if (weatherCode === 0) {
    conditionText = 'Clear sky';
  } else if (weatherCode >= 1 && weatherCode <= 3) {
    conditionText = 'Mainly clear, partly cloudy, and overcast';
  } else if (weatherCode === 45 || weatherCode === 48) {
    conditionText = 'Fog and depositing rime fog';
  } else if (weatherCode === 51 || weatherCode === 53 || weatherCode === 55) {
    conditionText = 'Drizzle: Light, moderate, and dense intensity';
  } else if (weatherCode === 56 || weatherCode === 57) {
    conditionText = 'Freezing Drizzle: Light and dense intensity';
  } else if (weatherCode === 61 || weatherCode === 63 || weatherCode === 65) {
    conditionText = 'Rain: Slight, moderate and heavy intensity';
  } else if (weatherCode === 66 || weatherCode === 67) {
    conditionText = 'Freezing Rain: Light and heavy intensity';
  } else if (weatherCode === 71 || weatherCode === 73 || weatherCode === 75) {
    conditionText = 'Snow fall: Slight, moderate, and heavy intensity';
  } else if (weatherCode === 77) {
    conditionText = 'Snow grains';
  } else if (weatherCode === 80 || weatherCode === 81 || weatherCode === 82) {
    conditionText = 'Rain showers: Slight, moderate, and violent';
  } else if (weatherCode === 85 || weatherCode === 86) {
    conditionText = 'Snow showers slight and heavy';
  } else if (weatherCode === 95) {
    conditionText = 'Thunderstorm: Slight or moderate';
  } else if (weatherCode === 96 || weatherCode === 99) {
    conditionText = 'Thunderstorm with slight and heavy hail';
  } else {
    conditionText = 'Unknown weather condition';
  }
  
  return conditionText;
};
// fetch temp data for the day
fetch('https://api.open-meteo.com/v1/forecast?latitude=25.7743&longitude=-80.1937&hourly=temperature_2m&temperature_unit=fahrenheit&forecast_days=1')
.then(response => {
  if (!response.ok) {
    throw new Error('Request failed');
  }
  return response.json();
})
.then(data => {
  let hourlyTemp = data.hourly.temperature_2m;
  console.log(hourlyTemp);
  displayTemp(hourlyTemp);
  let hours = data.hourly;
  console.log(hours);
})
.catch(error => {
  console.error('An error has occurred:', error);
});
function displayTemp(data){
  let tempSection = document.getElementById('temp-info');
  let tempList = tempSection.querySelector('ul');
  for (let i = 0; i < data.length; i++){
    let temp = document.createElement('li');
    temp.innerHTML = `${data[i]} <span>&deg;<span>F`;
    tempList.appendChild(temp);
  }
};