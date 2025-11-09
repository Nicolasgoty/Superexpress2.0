// Atualiza ano (se existir)
try {
  const yearEl = document.querySelector('[data-js-year]');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
} catch (e) { /* ignore */ }
// Config
const precoKm = 2.6;
const resultado = document.getElementById('resultado');
const distanciaTexto = document.getElementById('distanciaTexto');
const btnCalcular = document.getElementById('calcular');
const loadingEl = document.getElementById('loading');
const distanciaManualInput = document.getElementById('distanciaManual');
const btnAplicarManual = document.getElementById('aplicarManual');
let map = null;
let directionsService = null;
let directionsRenderer = null;
let apiAvailable = false; // Flag para rastrear se API carregou
// util
function setLoading(on) {
  if (!loadingEl || !btnCalcular) return;
  loadingEl.classList.toggle('hidden', !on);
  btnCalcular.disabled = on;
}
function formatBRL(v){ return new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(v); }
