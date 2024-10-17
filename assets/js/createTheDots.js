function removeElements() {
    const myNode = document.getElementById('main');
    myNode.innerHTML = '';
    
    document.getElementById('main').classList.toggle('sixbit')
}

function addElement() {
    let el
    let idIndex = 0
    let nbElements = 24
    let text = [8, 4, 2, 1]
    let textModulo = 4

    if (document.getElementById('main').classList.contains('sixbit')) {
        // text = [128, 64 ,32, 16, 8, 4, 2, 1]
        // textModulo = 8
        text = [32, 16, 8, 4, 2, 1]
        textModulo = 6
        nbElements = 18
    }

    for (let i = 0; i < nbElements; i++) {
        el = document.createElement('div')
        el.setAttribute('id', idIndex)
        el.classList.add('case')
        // el.innerText = text[i%textModulo]
        
        document.getElementById("main").appendChild(el)
        idIndex++
    }
}

addElement()
