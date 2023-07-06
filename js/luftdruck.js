let element = document.getElementById("infos");

function luftdruck() {
  if (luftdruck === 0) {
      luftdruck = 1;
      musik.innerHTML = 'Aus';
      info.innerHTML += '</br>' + new Date(Date.now()).toLocaleString().slice(11, 19) + ': Musik An';
      element.scrollTop = element.scrollHeight;
      let randomError = Math.floor(Math.random() * 10);
      if (randomError >= 9) {
          info.innerHTML += '</br>' + '<span class="error" name="1">ERROR CODE: 1</span>';
      }
  } else {
      musikAnzeige = 0;
      musik.innerHTML = 'An';
      info.innerHTML += '</br>' + new Date(Date.now()).toLocaleString().slice(11, 19) + ': Musik Aus';
      element.scrollTop = element.scrollHeight;
      let randomError = Math.floor(Math.random() * 10);
      if (randomError >= 9) {
          info.name = '2';
          info.innerHTML += '</br>' + '<span class="error" name="2">ERROR CODE: 2</span>';
      }
  }
}