const random = undefined => Math.floor(Math.random() * 255)
const moverandom = null => Math.floor(Math.random() * 1000)

var rotation = 360

$('#piano').addClass('spin')

const divs = ['room', 'new-room-btn', 'midi-btn', 'record-btn', 'synth-btn', 'sound-btn', 'client-settings-btn', 'status', 'volume']

setInterval(() => {
    if (rotation === 0) rotation = 360
    document.body.setAttribute("style", `-webkit-transform: rotate(${rotation}deg);color:rgb(${random()},${random()},${random()})`)
    rotation--
    document.getElementById('names').setAttribute('style', `color:rgb(${random()},${random()},${random()})`)
    document.querySelector('#piano canvas').setAttribute('style', `width: ${random() + 400}px; height: ${random() + 400}px;background-color:rgb(${random()},${random()},${random()})`)
    document.querySelector('#bottom div').setAttribute('style', `color:rgb(${random()},${random()},${random()});background-color:rgb(${random()},${random()},${random()});left:${moverandom()};right:${moverandom()},up:${moverandom};down:${moverandom()};`)
    document.querySelector('#chat ul').setAttribute('style', `color:rgb(${random()},${random()},${random()});left:${moverandom()};right:${moverandom()},up:${moverandom};down:${moverandom()};background-color:rgb(${random()},${random()},${random()});`)
    for (let div of divs) {
        document.getElementById(div).setAttribute('style', `left:${moverandom()};right:${moverandom()},up:${moverandom};down:${moverandom()};`)
    }
    for (let users in MPP.client.ppl) {
        document.getElementById(`namediv-${MPP.client.ppl[users].id}`).setAttribute('style', `background-color:rgb(${random()},${random()},${random()});left: ${moverandom()}%;right:${moverandom()}%;up:${moverandom()}%;down:${moverandom()}%`)
    }
}, 50)
