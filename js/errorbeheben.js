function erbeheben(e, input) {
    let code = (e.keyCode ? e.keyCode : e.which);
    if (code == 13) {
        let erbehvalue = document.getElementById('erbeh').value;
        if (erbehvalue === '1') {
            info.innerHTML += '</br>' + '<span class="errorbe">ERROR CODE: 1 behoben</span>';
            document.getElementById('erbeh').value = '';
        } else if (erbehvalue === '2') {
            info.innerHTML += '</br>' + '<span class="errorbe">ERROR CODE: 2 behoben</span>';
            document.getElementById('erbeh').value = '';
        } else if (erbehvalue === '3') {
            info.innerHTML += '</br>' + '<span class="errorbe">ERROR CODE: 3 behoben</span>';
            document.getElementById('erbeh').value = '';
        }
    }
    let element = document.getElementById("infos");
    element.scrollTop = element.scrollHeight;
}