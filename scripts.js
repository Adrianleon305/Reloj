const time = document.getElementById("time");
const day = document.getElementById("day");
const midday = document.getElementById("midday");


let clock = setInterval(function() {
    let date_now = new Date();
    let hr = date_now.getHours();
    let min = date_now.getMinutes();
    let sec = date_now.getSeconds();
    let middayValue = "AM";

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    day.textContent = days[date_now.getDay()];

    if (hr >= 12) {
        middayValue = "PM";
    }

    if (hr == 0) {
        hr = 12;
    } else if (hr > 12) {
        hr -= 12;
    }

    hr = hr < 10 ? "0" + hr : hr;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    time.textContent = hr + ":" + min + ":" + sec;
    midday.textContent = middayValue;


}, 1000);

// Recargar la página cada hora (3600000 milisegundos = 1 hora)
function reloadPage() {
  setTimeout(() => {
      location.reload();
  }, 3600000); // 3600000 milisegundos = 1 hora
}

// Llamar a la función para comenzar a recargar la página
reloadPage();









// COKIES
// Función para formatear el tiempo en HH:MM:SS
function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// Función para actualizar el temporizador y guardar en cookies
function updateTimer() {
    const currentTime = parseInt(localStorage.getItem('time') || '0');
    const newTime = currentTime + 1;
    localStorage.setItem('time', newTime.toString());
    const formattedTime = formatTime(newTime);
    document.querySelector('.timer').textContent = formattedTime;
}

// Carga inicial del temporizador desde las cookies
const initialTime = parseInt(localStorage.getItem('time') || '0');
const formattedInitialTime = formatTime(initialTime);
document.querySelector('.timer').textContent = formattedInitialTime;

// Actualizar el temporizador cada segundo
setInterval(updateTimer, 1000);














          // Variable para almacenar el título original
          var originalTitle = document.title;

          // Función para cambiar el título cuando el cursor sale de la página
          function changeTitle() {
            document.title = "🕑mira la hora 🕙";
          }
      
          // Función para restaurar el título original cuando el cursor entra a la página
          function restoreTitle() {
            document.title = originalTitle;
          }
      
          // Evento que se activa cuando el cursor sale de la página
          document.body.addEventListener("mouseout", changeTitle);
      
          // Evento que se activa cuando el cursor entra a la página
          document.body.addEventListener("mouseover", restoreTitle);
      