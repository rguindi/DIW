const url = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/303121?apikey=%0914wSpECtEQGFOurv9WiciZZgEqgqMhC3&language=es-es';

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
  })
  .catch(error => {
    // Manejar errores de red o del servidor
    console.error('Error:', error);
  });

  
