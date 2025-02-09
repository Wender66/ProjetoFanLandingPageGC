function TrocarFoto(foto) {

let FotoAtiva = document.getElementById("FotoAtual")

FotoAtiva.style.opacity = '0';

setTimeout(() => {
    FotoAtiva.src = foto;
    FotoAtiva.style.opacity = '1';
  }, 500);

}