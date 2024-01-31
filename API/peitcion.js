const url = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/303121?apikey=%0914wSpECtEQGFOurv9WiciZZgEqgqMhC3&language=es-es';

// Dia 1
const fecha1 = document.getElementById('fecha1');
const temperatura1 = document.getElementById('temperatura1');
const unidad1 = document.getElementById('unidad1');





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
    
  })
  .catch(error => {
    // Manejar errores de red o del servidor
    console.error('Error:', error);
  });

  
