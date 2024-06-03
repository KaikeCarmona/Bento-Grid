document.addEventListener("DOMContentLoaded", function() {
  function updateTime() {
      fetch('https://worldtimeapi.org/api/timezone/America/Sao_Paulo')
          .then(response => response.json())
          .then(data => {
              const dateTime = new Date(data.datetime);
              const timeString = dateTime.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
              document.querySelector('.horario').innerText = timeString;
          })
          .catch(error => {
              console.error('Erro ao buscar o horário:', error);
              document.querySelector('.time').innerText = 'Erro ao buscar o horário';
          });
  }
 
   updateTime();
  
   setInterval(updateTime, 1000);
});