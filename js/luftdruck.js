function luftdruckAnAus() {
  if (luftdruckAnzeige === 0) {
    luftdruckAnzeige = 1;
    luftdruck.innerHTML = 'Erhöhen';
    info.innerHTML += '</br>' + new Date(Date.now()).toLocaleString().slice(10, 19) + ': Luftdruck Ablassen';
    element.scrollTop = element.scrollHeight;
    let randomError = Math.floor(Math.random() * 1000);
    if (randomError >= 999) {
        info.innerHTML += '</br>' + '<span class="error" name="1">ERROR CODE: 5</span>';
    }
  } else {
    luftdruckAnzeige = 0;
    luftdruck.innerHTML = 'Ablassen';
    info.innerHTML += '</br>' + new Date(Date.now()).toLocaleString().slice(10, 19) + ': Luftdruck Erhöhen';
    element.scrollTop = element.scrollHeight;
    let randomError = Math.floor(Math.random() * 1000);
    if (randomError >= 999) {
        info.name = '2';
        info.innerHTML += '</br>' + '<span class="error" name="2">ERROR CODE: 6</span>';
    }
    }
}