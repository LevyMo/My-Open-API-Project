
fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,rain')
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