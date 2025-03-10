let counterP1 = document.getElementById('counter-id1');
let counterP2 = document.getElementById('counter-id2')
let jscounter1 = 0
let jscpunter2 = 0


const counterNuber1 = setInterval(() => {
    jscounter1++
    counterP1.textContent = jscounter1

    if (jscounter1 >= 450) {
        clearInterval(counterNuber1)
    }
}, 0.5)


const counterNuber2 = setInterval(() => {
    jscpunter2++
    counterP2.textContent = jscpunter2
    if (jscpunter2 >= 100) {
        clearInterval(counterNuber2)
    }
}, 18)