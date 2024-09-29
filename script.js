 // Función para obtener la hora actual y actualizar el DOM
function actualizarReloj() {
    // Obtenemos la fecha y hora actual
    const ahora = new Date();
    let horas = ahora.getHours();
    let minutos = ahora.getMinutes();
    let segundos = ahora.getSeconds();

    // Formateamos las horas, minutos y segundos para que siempre tengan dos dígitos
    horas = (horas < 10) ? '0' + horas : horas;
    minutos = (minutos < 10) ? '0' + minutos : minutos;
    segundos = (segundos < 10) ? '0' + segundos : segundos;

    // Concatenamos la hora en formato HH:MM:SS
    const horaActual = `${horas}:${minutos}:${segundos}`;

    // Actualizamos el contenido del div con la hora actual
    document.getElementById('reloj').innerHTML = horaActual;
}

// Llamamos a la función actualizarReloj cada segundo (1000ms)
setInterval(actualizarReloj, 1000);

// Llamamos a la función inmediatamente para mostrar la hora sin esperar un segundo
actualizarReloj();