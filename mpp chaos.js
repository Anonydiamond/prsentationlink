if (!window.MPP) throw new Error('You must have to open mpp for this')

MPP.client.on('a', ({ a, p }) => {
    if (p.id !== MPP.client.participantId) return
    if (a.startsWith('*')) {
        try {
            MPP.chat.send(`${eval(a.trim().slice(1))}`)
        } catch (err) {
            MPP.chat.send(`${err}`)
        }
    }

})

MPP.chaos = new Object()

var start, rotation

MPP.chaos.speed = 50

MPP.chaos.start = () => start = setInterval(chaos, MPP.chaos.speed); $('#piano').addClass('spin')
MPP.chaos.resume = MPP.chaos.start
MPP.chaos.pause = () => clearInterval(start); $('#piano').removeClass('spin')
MPP.chaos.exit = () => window.location.href = window.location.href

rotation = 360


const random = () => Math.floor(Math.random() * 255)
const namerandom = () => Math.floor(Math.random() * 1000)



function chaos() {
    if (rotation === 0) rotation = 360
    document.body.setAttribute("style", `-webkit-transform: rotate(${rotation}deg);color:rgb(${random()},${random()},${random()})`)
    rotation--
    document.getElementById('names').setAttribute('style', `color:rgb(${random()},${random()},${random()})`)
    document.querySelector('#piano canvas').setAttribute('style', `width: ${random() + 400}px; height: ${random() + 400}px;background-color:rgb(${random()},${random()},${random()})`)
    document.querySelector('#bottom div').setAttribute('style', `color:rgb(${random()},${random()},${random()})`)
    for (let users in MPP.client.ppl) {
        document.getElementById(`namediv-${MPP.client.ppl[users].id}`).setAttribute('style', `background-color:rgb(${random()},${random()},${random()});left: ${namerandom()}%;right:${namerandom()}%;up:${namerandom()}%;down:${namerandom()}%`)
    }
}
