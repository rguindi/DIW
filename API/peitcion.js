const url = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/303121?apikey=%0914wSpECtEQGFOurv9WiciZZgEqgqMhC3&language=es-es';  //Pronostico 5 dias
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
const unidad1 = document.getElementById('unidad1');
const day1 = document.getElementById('day1');
const nigth1 = document.getElementById('nigth1');
// Dia 2
const fecha2 = document.getElementById('fecha2');
const temperatura2 = document.getElementById('temperatura2');
const unidad2 = document.getElementById('unidad2');
const day2 = document.getElementById('day2');
const nigth2 = document.getElementById('nigth2');
// Dia 3
const fecha3 = document.getElementById('fecha3');
const temperatura3 = document.getElementById('temperatura3');
const unidad3 = document.getElementById('unidad3');
const day3 = document.getElementById('day3');
const nigth3 = document.getElementById('nigth3');
// Dia 4
const fecha4 = document.getElementById('fecha4');
const temperatura4 = document.getElementById('temperatura4');
const unidad4 = document.getElementById('unidad4');
const day4 = document.getElementById('day4');
const nigth4 = document.getElementById('nigth4');
// Dia 5
const fecha5 = document.getElementById('fecha5');
const temperatura5 = document.getElementById('temperatura5');
const unidad5 = document.getElementById('unidad5');
const day5 = document.getElementById('day5');
const nigth5 = document.getElementById('nigth5');





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
    fecha1.innerHTML = data.DailyForecasts[0].Date;
    temperatura1.innerHTML = data.DailyForecasts[0].Temperature.Maximum.Value;
    unidad1.innerHTML = data.DailyForecasts[0].Temperature.Maximum.Unit;
    day1.innerHTML = data.DailyForecasts[0].Day.IconPhrase;
    nigth1.innerHTML = data.DailyForecasts[0].Night.IconPhrase;
    // Dia 2
    fecha2.innerHTML = data.DailyForecasts[1].Date;
    temperatura2.innerHTML = data.DailyForecasts[1].Temperature.Maximum.Value;
    unidad2.innerHTML = data.DailyForecasts[1].Temperature.Maximum.Unit;
    day2.innerHTML = data.DailyForecasts[1].Day.IconPhrase;
    nigth2.innerHTML = data.DailyForecasts[1].Night.IconPhrase;
    // Dia 3
    fecha3.innerHTML = data.DailyForecasts[2].Date;
    temperatura3.innerHTML = data.DailyForecasts[2].Temperature.Maximum.Value;
    unidad3.innerHTML = data.DailyForecasts[2].Temperature.Maximum.Unit;
    day3.innerHTML = data.DailyForecasts[2].Day.IconPhrase;
    nigth3.innerHTML = data.DailyForecasts[2].Night.IconPhrase;
    // Dia 4
    fecha4.innerHTML = data.DailyForecasts[3].Date;
    temperatura4.innerHTML = data.DailyForecasts[3].Temperature.Maximum.Value;
    unidad4.innerHTML = data.DailyForecasts[3].Temperature.Maximum.Unit;
    day4.innerHTML = data.DailyForecasts[3].Day.IconPhrase;
    nigth4.innerHTML = data.DailyForecasts[3].Night.IconPhrase;
    // Dia 5
    fecha5.innerHTML = data.DailyForecasts[4].Date;
    temperatura5.innerHTML = data.DailyForecasts[4].Temperature.Maximum.Value;
    unidad5.innerHTML = data.DailyForecasts[4].Temperature.Maximum.Unit;
    day5.innerHTML = data.DailyForecasts[4].Day.IconPhrase;
    nigth5.innerHTML = data.DailyForecasts[4].Night.IconPhrase; 
  })
  .catch(error => {
    // Manejar errores de red o del servidor
    console.error('Error:', error);
  });

  
