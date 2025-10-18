function setMask(input, maskFn){
  input.addEventListener('input', function(){
    this.value = maskFn(this.value.replace(/\D/g,''));
  });
}
function cpfMask(v){return v.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/,'$1.$2.$3-$4');}
function telMask(v){return v.replace(/(\d{2})(\d{5})(\d{4})/,'($1) $2-$3');}
function cepMask(v){return v.replace(/(\d{5})(\d{3})/,'$1-$2');}
window.onload=function(){setMask(document.getElementById('cpf'),cpfMask);setMask(document.getElementById('telefone'),telMask);setMask(document.getElementById('cep'),cepMask);}