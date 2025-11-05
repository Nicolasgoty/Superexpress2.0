// Atualiza automaticamente o ano
document.querySelector('[data-js-year]').textContent = new Date().getFullYear();

const precoKm = 2.6;
const resultado = document.getElementById('resultado');
const distanciaTexto = document.getElementById('distanciaTexto');

document.getElementById('calcular').addEventListener('click', () => {
  const coleta = document.getElementById('coleta').value.trim();
  const entrega = document.getElementById('entrega').value.trim();

  if (!coleta || !entrega) {
    alert('Por favor, preencha os endereços de coleta e entrega.');
    return;
  }

  const service = new google.maps.DistanceMatrixService();
  service.getDistanceMatrix({
    origins: [coleta],
    destinations: [entrega],
    travelMode: 'DRIVING',
    unitSystem: google.maps.UnitSystem.METRIC
  }, (response, status) => {
    if (status !== 'OK') {
      alert('Erro ao calcular distância. Verifique os endereços.');
      return;
    }

    const distance = response.rows[0].elements[0].distance.value / 1000;
    const total = distance * precoKm;

    resultado.textContent = `Valor total: R$ ${total.toFixed(2)}`;
    distanciaTexto.textContent = `Distância estimada: ${distance.toFixed(2)} km`;
  });
});
