function addZero(i) {
    if (i < 10) {
        i = '0' + i;
    }
    return i;
}

function dec2bin(dec) {
    return (dec >>> 0).toString(2);
}

function formatBinary(bin) {
    let indexMaxSize = 4;
    if (document.getElementById('main').classList.contains('sixbit')) {
        indexMaxSize = 6;
    }

    for (let index = bin.length; index < indexMaxSize; index++) {
        bin = '0' + bin;
    }
    return bin;
}

let indexToReload = 0;

function changeTheThings() {
    // Get a new Date object every time the function is called
    const d = new Date();
    let h = addZero(d.getHours()).toString().split('');
    let m = addZero(d.getMinutes()).toString().split('');
    let s = addZero(d.getSeconds()).toString().split('');

    if (document.getElementById('main').classList.contains('sixbit')) {
        h = addZero(d.getHours()).toString();
        m = addZero(d.getMinutes()).toString();
        s = addZero(d.getSeconds()).toString();
    }

    let arrayOfThings = [
        formatBinary(dec2bin(h[0])).split(''),
        formatBinary(dec2bin(h[1])).split(''),
        formatBinary(dec2bin(m[0])).split(''),
        formatBinary(dec2bin(m[1])).split(''),
        formatBinary(dec2bin(s[0])).split(''),
        formatBinary(dec2bin(s[1])).split('')
    ];

    if (document.getElementById('main').classList.contains('sixbit')) {
        arrayOfThings = [
            formatBinary(dec2bin(h)).split(''),
            formatBinary(dec2bin(m)).split(''),
            formatBinary(dec2bin(s)).split('')
        ];
    }

    arrayOfThings.forEach(element => {
        element.forEach(el => {
            if (parseInt(el) === 1) {
                document.getElementById(indexToReload).classList.add('on');
            } else {
                document.getElementById(indexToReload).classList.remove('on');
            }

            indexToReload++;

            if (indexToReload >= arrayOfThings.flat().length) {
                indexToReload = 0;
            }
        });
    });
}

changeTheThings();

setInterval(changeTheThings, 1000);
