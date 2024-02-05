const url = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/303121?apikey=%0914wSpECtEQGFOurv9WiciZZgEqgqMhC3&language=es-es';  //Pronostico 5 dias

function pasarCelsius(fahrenheit) {
  var celsius = (5 / 9) * (fahrenheit - 32);
  return celsius.toFixed(1);
}

// Obtener la fecha actual
var fechaActual = new Date();
var diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
var numeroDia = fechaActual.getDay();
var dia1 = diasSemana[numeroDia];
var dia2 = diasSemana[(numeroDia+1)% 7];
var dia3 = diasSemana[(numeroDia+2)% 7];
var dia4 = diasSemana[(numeroDia+3)% 7];
var dia5 = diasSemana[(numeroDia+4)% 7];
// Mostrar el resultado
console.log('Hoy es ' + dia1);

//Poner dia de la semana actual al pronostico
document.getElementById('nav-dia1-tab').innerText = dia1;
document.getElementById('nav-dia2-tab').innerText = dia2;
document.getElementById('nav-dia3-tab').innerText = dia3;
document.getElementById('nav-dia4-tab').innerText = dia4;
document.getElementById('nav-dia5-tab').innerText = dia5;


// Dia 1
const fecha1 = document.getElementById('fecha1');
const temperatura1 = document.getElementById('temperatura1');
const min1 = document.getElementById('unidad1');
const day1 = document.getElementById('day1');
const nigth1 = document.getElementById('nigth1');
// Dia 2
const fecha2 = document.getElementById('fecha2');
const temperatura2 = document.getElementById('temperatura2');
const min2 = document.getElementById('unidad2');
const day2 = document.getElementById('day2');
const nigth2 = document.getElementById('nigth2');
// Dia 3
const fecha3 = document.getElementById('fecha3');
const temperatura3 = document.getElementById('temperatura3');
const min3 = document.getElementById('unidad3');
const day3 = document.getElementById('day3');
const nigth3 = document.getElementById('nigth3');
// Dia 4
const fecha4 = document.getElementById('fecha4');
const temperatura4 = document.getElementById('temperatura4');
const min4 = document.getElementById('unidad4');
const day4 = document.getElementById('day4');
const nigth4 = document.getElementById('nigth4');
// Dia 5
const fecha5 = document.getElementById('fecha5');
const temperatura5 = document.getElementById('temperatura5');
const min5 = document.getElementById('unidad5');
const day5 = document.getElementById('day5');
const nigth5 = document.getElementById('nigth5');

//
let unidad1 = document.getElementById('unidad1');
let unidad2 = document.getElementById('unidad2');
let unidad3 = document.getElementById('unidad3');
let unidad4 = document.getElementById('unidad4');
let unidad5 = document.getElementById('unidad5');


// Realizar la solicitud utilizando fetch
fetch(url)
  .then(response => {
    // Verificar si la solicitud fue exitosa (código 200)
    if (!response.ok) {
      throw new Error(`Error de red - ${response.status}`);
    }
    // Parsear la respuesta como JSON
    return response.json();
  })
  .then(data => {
    // Manejar los datos JSON aquí

    console.log(data);

    // Dia 1
    fecha1.innerHTML = data.DailyForecasts[0].Date.split("T")[0];
    temperatura1.innerHTML = pasarCelsius(data.DailyForecasts[0].Temperature.Maximum.Value);
    min1.innerHTML = pasarCelsius(data.DailyForecasts[0].Temperature.Minimum.Value);
    day1.innerHTML = data.DailyForecasts[0].Day.IconPhrase;
    nigth1.innerHTML = data.DailyForecasts[0].Night.IconPhrase;
    // Dia 2
    fecha2.innerHTML = data.DailyForecasts[1].Date.split("T")[0];
    temperatura2.innerHTML = pasarCelsius(data.DailyForecasts[1].Temperature.Maximum.Value);
    min2.innerHTML = pasarCelsius(data.DailyForecasts[1].Temperature.Minimum.Value);
    day2.innerHTML = data.DailyForecasts[1].Day.IconPhrase;
    nigth2.innerHTML = data.DailyForecasts[1].Night.IconPhrase;
    // Dia 3
    fecha3.innerHTML = data.DailyForecasts[2].Date.split("T")[0];
    temperatura3.innerHTML = pasarCelsius(data.DailyForecasts[2].Temperature.Maximum.Value);
    min3.innerHTML = pasarCelsius(data.DailyForecasts[2].Temperature.Minimum.Value);
    day3.innerHTML = data.DailyForecasts[2].Day.IconPhrase;
    nigth3.innerHTML = data.DailyForecasts[2].Night.IconPhrase;
    // Dia 4
    fecha4.innerHTML = data.DailyForecasts[3].Date.split("T")[0];
    temperatura4.innerHTML = pasarCelsius(data.DailyForecasts[3].Temperature.Maximum.Value);
    min4.innerHTML = pasarCelsius(data.DailyForecasts[3].Temperature.Minimum.Value);
    day4.innerHTML = data.DailyForecasts[3].Day.IconPhrase;
    nigth4.innerHTML = data.DailyForecasts[3].Night.IconPhrase;
    // Dia 5
    fecha5.innerHTML = data.DailyForecasts[4].Date.split("T")[0];
    temperatura5.innerHTML = pasarCelsius(data.DailyForecasts[4].Temperature.Maximum.Value);
    min5.innerHTML = pasarCelsius(data.DailyForecasts[4].Temperature.Minimum.Value);
    day5.innerHTML = data.DailyForecasts[4].Day.IconPhrase;
    nigth5.innerHTML = data.DailyForecasts[4].Night.IconPhrase; 
  })
  .catch(error => {
    // Manejar errores de red o del servidor
    console.error('Error:', error);
  });


// Cambiar el tema
let tema = document.getElementById('tema');
let main = document.getElementsByTagName('main')[0];

tema.addEventListener('change', function(){
  if (tema.value === "oscuro") {
    main.style.backgroundColor = "black";
    main.style.color = "white";
  } else {
    main.style.backgroundColor = "white";
    main.style.color = "black";
  }
});