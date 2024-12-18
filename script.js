// script.js
const relogio = document.getElementById('relogio');
const toggleThemeBtn = document.getElementById('toggle-theme');

// Função para atualizar o horário
function atualizarRelogio() {
  const agora = new Date();
  const horas = String(agora.getHours()).padStart(2, '0');
  const minutos = String(agora.getMinutes()).padStart(2, '0');
  const segundos = String(agora.getSeconds()).padStart(2, '0');

  relogio.textContent = `${horas}:${minutos}:${segundos}`;
}

// Atualiza o relógio a cada segundo
setInterval(atualizarRelogio, 1000);

// Alternar entre modo claro e escuro
toggleThemeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggleThemeBtn.textContent = 
    document.body.classList.contains('dark') ? 'Modo Claro' : 'Modo Escuro';
});

// Inicia o relógio imediatamente
atualizarRelogio();
