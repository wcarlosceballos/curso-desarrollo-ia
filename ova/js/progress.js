// progress.js — muestra el porcentaje de avance
document.addEventListener('DOMContentLoaded', () => {
  const el = document.getElementById('progreso-valor');
  if(el) el.textContent = getProgressPercent() + '%';
  const bar = document.getElementById('progreso-barra');
  if(bar) bar.value = getProgressPercent();
});
