const ano=document.getElementById("ano");
const anoAtual=new Date();
ano.innerHTML=anoAtual.getFullYear();

const relogio=document.getElementById("relogio");

function atualizarRelogio(){
    const atual=new Date();
    const h=String(atual.getHours()).padStart(2, '0');
    const min=String(atual.getMinutes()).padStart(2, '0');
    const seg=String(atual.getSeconds()).padStart(2, '0');

    relogio.textContent= `${h}:${min}:${seg}`;
}

atualizarRelogio();
setInterval(atualizarRelogio, 1000);

addEventListener('click', function(){
    
});

function copiarTexto(email) {
  navigator.clipboard.writeText(email)
    .then(() => {
      console.log("Texto copiado com sucesso!");
    })
    .catch(err => {
      console.error("Erro ao copiar:", err);
    });
}
copiarTexto("gyugym2@gmai.com");
