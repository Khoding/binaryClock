function removeElements() {
    const myNode = document.getElementById('main');
    myNode.innerHTML = '';

    document.getElementById('main').classList.toggle('sixbit');
}

function addElement() {
    let el;
    let elSpan;
    let idIndex = 0;
    let nbElements = 24;
    let text = [8, 4, 2, 1];
    let textModulo = 4;

    // 6 bit or 4 bit mode
    let currentMode = localStorage.getItem('mode') || '6 bit';
    if (currentMode === '6 bit') {
        document.getElementById('main').classList.add('sixbit');
    } else {
        document.getElementById('main').classList.remove('sixbit');
    }

    // Show numbers toggle
    let showNumbers = localStorage.getItem('showNumbers') || 'false';
    if (showNumbers === 'false') {
        document.getElementById('main').classList.add('hideSpan');
    } else {
        document.getElementById('main').classList.remove('hideSpan');
    }

    if (document.getElementById('main').classList.contains('sixbit')) {
        text = [32, 16, 8, 4, 2, 1];
        textModulo = 6;
        nbElements = 18;
    }

    for (let i = 0; i < nbElements; i++) {
        el = document.createElement('div');
        el.setAttribute('id', idIndex);
        el.classList.add('case');
        elSpan = document.createElement('span');
        elSpan.innerText = text[i % textModulo];
        el.appendChild(elSpan);

        document.getElementById('main').appendChild(el);
        idIndex++;
    }
}

addElement();
