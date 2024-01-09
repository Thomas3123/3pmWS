const body = document.body;
const pagTitle = document.getElementsByName('pag-title');
const botDesc = document.getElementById('bot-desc');
const botLinks = document.getElementById('bot-links');

function showDesc() {
  if (botDesc.style.display == 'none' && botLinks.style.display == 'none') {
    botDesc.style.display = 'block';
    botLinks.style.display = 'flex';
  }
  else if (botDesc.style.display == 'block' && botLinks.style.display == 'flex') {
    botDesc.style.display = 'none';
    botLinks.style.display = 'none';
  }
}

  function leerTexto() {
    var texto = "Este es el texto que quiero que se lea.";
    var voz = new SpeechSynthesisUtterance(texto);
    window.speechSynthesis.speak(voz);
  }
