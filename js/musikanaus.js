function musikAnAus() {
  if (musikAnzeige === 0) {
      musikAnzeige = 1;
      musik.innerHTML = 'Aus';
      info.innerHTML += '</br>' + new Date(Date.now()).toLocaleString().slice(10, 19) + ': Musik An';
      let randomError = Math.floor(Math.random() * 10);
      if (randomError >= 9) {
          info.innerHTML += '</br>' + '<span class="error" name="1">ERROR CODE: 1</span>';
          musik_btn.disabled = true;
      }
      element.scrollTop = element.scrollHeight;
  } else {
      musikAnzeige = 0;
      musik.innerHTML = 'An';
      info.innerHTML += '</br>' + new Date(Date.now()).toLocaleString().slice(10, 19) + ': Musik Aus';
      let randomError = Math.floor(Math.random() * 10);
      if (randomError >= 9) {
          info.name = '2';
          info.innerHTML += '</br>' + '<span class="error" name="2">ERROR CODE: 2</span>';
      }
      element.scrollTop = element.scrollHeight;
  }
}