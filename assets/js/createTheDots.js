function addElement() {
    let el;
    let idIndex = 0
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 6; index++) {
            el = document.createElement('div')
            el.setAttribute('id', idIndex)
            el.classList.add('case')
            
            document.getElementById("main").appendChild(el)
            idIndex++
        }
    }
}

addElement()
