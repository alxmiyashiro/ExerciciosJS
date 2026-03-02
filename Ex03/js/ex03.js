let temperaturaCelsius = parseInt(Math.random()*100);
let temperaturaFahrenheit = (9 / 5) * temperaturaCelsius + 32;
console.log(temperaturaCelsius, temperaturaFahrenheit);

document.getElementById('temperaturaCelsius').textContent = `Temperatura em graus Celsius: ${temperaturaCelsius}ºC`;
document.getElementById('temperaturaFahrenheit').textContent = `Temperatura em graus Fahrenheit: ${temperaturaFahrenheit}ºF`;