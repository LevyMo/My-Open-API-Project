
fetch('https://api.open-meteo.com/v1/forecast?latitude=27.4467&longitude=-80.3256&hourly=temperature_2m,rain&temperature_unit=fahrenheit')
  .then(response => {
    if (!response.ok) {
      throw new Error('Request failed');
    }
    return response.json();
  })
  .then(data => {
    let hourlyTemp = data.hourly.temperature_2m;
    let hourlyRain = data.hourly.rain;
    console.log(hourlyTemp);
    console.log(hourlyRain);
  })
  .catch(error => {
    console.error('An error has occurred:', error);
  });