document.querySelector('[data-js-year]').textContent = new Date().getFullYear();

    const linkServicos = document.getElementById('btnServicos');

    linkServicos.addEventListener('click', (e)=>{
      const sim = document.getElementById('sim').checked;
      const nao = document.getElementById('nao').checked;

      if(!sim && !nao){
        alert('Por favor, selecione uma opção para os termos de uso.');
        e.preventDefault();
      } else if(nao){
        alert('Você precisa aceitar os termos de uso para continuar.');
        e.preventDefault();
      }
    });