
fetch('https://api.open-meteo.com/v1/forecast?latitude=27.4467&longitude=-80.3256&hourly=temperature_2m,weather_code&temperature_unit=fahrenheit&forecast_days=1')
  .then(response => {
    if (!response.ok) {
      throw new Error('Request failed');
    }
    return response.json();
  })
  .then(data => {
    let hourlyTemp = data.hourly.temperature_2m;
    let hourlyCode = data.hourly.weather_code;
    console.log(hourlyTemp);
    console.log(hourlyCode);
    displayCondition(hourlyCode);
    displayTemp(hourlyTemp);
  })
  .catch(error => {
    console.error('An error has occurred:', error);
  });
function displayCondition(data){
  let codeSection = document.getElementById('code-info');
  let codeList = codeSection.querySelector('ul');
  for (let i = 0; i < data.length; i++){
    let code = document.createElement('li');
    code.innerHTML = `Hour ${i + 1}: ${data[i]}`;
    codeList.appendChild(code);
  }
};
function displayTemp(data){
  let tempSection = document.getElementById('temp-info');
  let tempList = tempSection.querySelector('ul');
  for (let i = 0; i < data.length; i++){
    let temp = document.createElement('li');
    temp.innerHTML = `Hour ${i + 1}: ${data[i]} <span>&deg;<span>F`;
    tempList.appendChild(temp);
  }
};