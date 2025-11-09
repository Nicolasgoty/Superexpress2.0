   // Atualiza automaticamente o ano
    document.querySelector('[data-js-year]').textContent = new Date().getFullYear();

    // Cálculo do valor da corrida
    const inputDist = document.getElementById('distancia');
    const resultado = document.getElementById('resultado');
    const precoKm = 2.6;
    inputDist.addEventListener('input', ()=>{
      const dist = parseFloat(inputDist.value);
      if(isNaN(dist) || dist < 0){
        resultado.textContent = 'Valor total: R$ 0,00';
        return;
      }
      const total = dist * precoKm;
      resultado.textContent = `Valor total: R$ ${total.toFixed(2)}`;
    });