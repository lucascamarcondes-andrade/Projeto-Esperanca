document.addEventListener('DOMContentLoaded', function() {
  const masks = {
    cpf: value => value
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2'),
    telefone: value => value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d{4})$/, '$1-$2'),
    cep: value => value
      .replace(/\D/g, '')
      .replace(/(\d{5})(\d{3})$/, '$1-$2')
  };
  document.querySelectorAll('input[data-mask]').forEach(input => {
    input.addEventListener('input', e => {
      const field = e.target.getAttribute('data-mask');
      e.target.value = masks[field](e.target.value);
    });
  });
});
