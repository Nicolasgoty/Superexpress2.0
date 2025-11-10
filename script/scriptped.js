 // Atualiza automaticamente o ano
    document.querySelector('[data-js-year]').textContent = new Date().getFullYear();

    // Envia formulário via Formspree
    const form = document.getElementById('formCadastro');
    const msg = document.getElementById('mensagem');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const res = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        msg.textContent = '✅ Pedido enviado com sucesso! Em breve entraremos em contato.';
        msg.style.color = '#22c55e';
        form.reset();
      } else {
        msg.textContent = '❌ Ocorreu um erro ao enviar. Tente novamente.';
        msg.style.color = 'red';
      }
    });