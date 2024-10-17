function addZero(i) {
    if (i < 10) {i = "0" + i}

    return i;
}

const d = new Date();
let h = addZero(d.getHours()).toString().split('');
let m = addZero(d.getMinutes()).toString().split('');
let s = addZero(d.getSeconds()).toString().split('');

function dec2bin(dec) {
    return (dec >>> 0).toString(2);
}

function formatBinary(bin) {
    for (let index = bin.length; index < 4; index++) {
        bin = '0' + bin;
    };

    return bin
}

arrayOfThings = [formatBinary(dec2bin(h[0])).split(''), formatBinary(dec2bin(h[1])).split(''), formatBinary(dec2bin(m[0])).split(''), formatBinary(dec2bin(m[1])).split(''), formatBinary(dec2bin(s[0])).split(''), formatBinary(dec2bin(s[1])).split('')]

function changeTheFuckingThings() {
    let index = 0;
    arrayOfThings.forEach(element => {
        element.forEach(el => {
            if (parseInt(el) === 1) {
                document.getElementById(index).classList.toggle('on')
            }

            index++
        });
    });
}

changeTheFuckingThings()

setTimeout(function(){
    window.location.reload(1);
 }, 1000);
 