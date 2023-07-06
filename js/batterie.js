function batterieRunter() {batterie.value -= 0.1};

let batterieZyklus = null;

function motor() {
    if (motorAnzeige === 0) {
        batterieZyklus = setInterval(batterieRunter, 100);
        motorText.innerHTML = 'Stoppen';
        motorAnzeige = 1;
        info.innerHTML += '</br>' + new Date(Date.now()).toLocaleString().slice(10, 19) + ': Motor An';
        let randomError = Math.floor(Math.random() * 100);
        if (randomError >= 99) {
            info.innerHTML += '</br>' + '<span class="error" name="1">ERROR CODE: 3</span>';
        }
        console.log(motorAnzeige)
    } else {
        clearInterval(batterieZyklus);
        motorText.innerHTML = 'Starten';
        motorAnzeige = 0;
        info.innerHTML += '</br>' + new Date(Date.now()).toLocaleString().slice(10, 19) + ': Motor Aus';
        let randomError = Math.floor(Math.random() * 100);
        if (randomError >= 99) {
            info.innerHTML += '</br>' + '<span class="error" name="1">ERROR CODE: 4</span>';
        }
        console.log(motorAnzeige)
    }
    let element = document.getElementById("infos");
    element.scrollTop = element.scrollHeight;
}