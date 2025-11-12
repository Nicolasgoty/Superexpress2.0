document.addEventListener('DOMContentLoaded', () => {
  // atualiza ano se existir
  const yearEl = document.querySelector('[data-js-year]');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const linkServicos = document.getElementById('btnServicos');
  const radioSim = document.getElementById('sim');
  const radioNao = document.getElementById('nao');

  if (!linkServicos) return; // nada a fazer sem o botão/link

  // encontra ou cria a caixa de mensagem logo abaixo do bloco de termos
  let msgBox = document.getElementById('mensagem-termos');
  if (!msgBox) {
    msgBox = document.createElement('div');
    msgBox.id = 'mensagem-termos';
    // insere depois do linkServicos (ou no final do parent)
    linkServicos.parentNode.insertBefore(msgBox, linkServicos.nextSibling);
  }

  // estilização básica (você pode mover para o CSS)
  msgBox.style.marginTop = '10px';
  msgBox.style.padding = '8px 12px';
  msgBox.style.borderRadius = '6px';
  msgBox.style.display = 'none';
  msgBox.style.fontWeight = '500';

  function showMessage(text, type = 'info') {
    msgBox.textContent = text;
    msgBox.style.display = 'block';
    if (type === 'erro') {
      msgBox.style.background = '#f8d7da';
      msgBox.style.color = '#721c24';
      msgBox.style.border = '1px solid #f5c6cb';
    } else if (type === 'aviso') {
      msgBox.style.background = '#fff3cd';
      msgBox.style.color = '#856404';
      msgBox.style.border = '1px solid #ffeeba';
    } else { // sucesso / info
      msgBox.style.background = '#d4edda';
      msgBox.style.color = '#155724';
      msgBox.style.border = '1px solid #c3e6cb';
    }
  }

  function clearMessage() {
    msgBox.style.display = 'none';
    msgBox.textContent = '';
  }

  // Sempre previne o comportamento padrão (para termos total controle)
  linkServicos.addEventListener('click', (e) => {
    e.preventDefault();

    clearMessage();

    const sim = !!(radioSim && radioSim.checked);
    const nao = !!(radioNao && radioNao.checked);

    if (!sim && !nao) {
      showMessage('⚠️ Por favor, selecione uma opção para os termos de uso.', 'aviso');
      return;
    }

    if (nao) {
      showMessage('🚫 Você precisa aceitar os termos de uso para continuar.', 'erro');
      return;
    }

    // se passou aqui, sim === true
    showMessage('✅ Obrigado por aceitar os termos! Redirecionando...', 'sucesso');

    // redireciona manualmente (evita race conditions). Delay pequeno para o usuário ver a mensagem.
    const href = linkServicos.getAttribute('href') || 'servicos.html';
    setTimeout(() => {
      window.location.href = href;
    }, 700);
  }, { passive: false });
});