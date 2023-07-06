function erbeheben(e, input) {
    let code = (e.keyCode ? e.keyCode : e.which);
    if (code == 13) {
        let erbehvalue = document.getElementById('erbeh').value;
        if (erbehvalue === '1') {
            info.innerHTML += '</br>' + '<span class="errorbe">ERROR CODE: 1 behoben</span>';
            document.getElementById('erbeh').value = '';
            musik_btn.disabled = false;
        } else if (erbehvalue === '2') {
            info.innerHTML += '</br>' + '<span class="errorbe">ERROR CODE: 2 behoben</span>';
            document.getElementById('erbeh').value = '';
        } else if (erbehvalue === '3') {
            info.innerHTML += '</br>' + '<span class="errorbe">ERROR CODE: 3 behoben</span>';
            document.getElementById('erbeh').value = '';
        } else if (erbehvalue === '4') {
            info.innerHTML += '</br>' + '<span class="errorbe">ERROR CODE: 4 behoben</span>';
            document.getElementById('erbeh').value = '';
        } else if (erbehvalue === '5') {
            info.innerHTML += '</br>' + '<span class="errorbe">ERROR CODE: 5 behoben</span>';
            document.getElementById('erbeh').value = '';
        } else if (erbehvalue === '6') {
            info.innerHTML += '</br>' + '<span class="errorbe">ERROR CODE: 6 behoben</span>';
            document.getElementById('erbeh').value = '';
        } else if (erbehvalue === '7') {
            info.innerHTML += '</br>' + '<span class="errorbe">ERROR CODE: 7 behoben</span>';
            document.getElementById('erbeh').value = '';
        } else if (erbehvalue === '8') {
            info.innerHTML += '</br>' + '<span class="errorbe">ERROR CODE: 8 behoben</span>';
            document.getElementById('erbeh').value = '';
        }
    }
    let element = document.getElementById("infos");
    element.scrollTop = element.scrollHeight;
}