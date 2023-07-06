function tuerAnAus() {
  if (tuerAnzeige === 0) {
    tuerAnzeige = 1;
    tuer.innerHTML = 'Schliessen';
    info.innerHTML += '</br>' + new Date(Date.now()).toLocaleString().slice(10, 19) + ': Tür Öffnen';
    element.scrollTop = element.scrollHeight;
    let randomError = Math.floor(Math.random() * 1000);
    if (randomError >= 999) {
        info.innerHTML += '</br>' + '<span class="error" name="1">ERROR CODE: 7</span>';
    }
  } else {
    tuerAnzeige = 0;
    tuer.innerHTML = 'Öffnen';
    info.innerHTML += '</br>' + new Date(Date.now()).toLocaleString().slice(10, 19) + ': Tür Schliessen';
    element.scrollTop = element.scrollHeight;
    let randomError = Math.floor(Math.random() * 1000);
    if (randomError >= 999) {
        info.name = '2';
        info.innerHTML += '</br>' + '<span class="error" name="2">ERROR CODE: 8</span>';
    }
    }
}