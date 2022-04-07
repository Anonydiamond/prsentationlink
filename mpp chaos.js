if (!MPP) throw new Error('You must have to open mpp for this')


var t = 360


const random = () => Math.floor(Math.random() * 255)
const namerandom = () => Math.floor(Math.random() * 1000)

$('#piano').addClass('spin')


setInterval(() => {
    if (t === 0) t = 360
    document.body.setAttribute("style", `-webkit-transform: rotate(${t}deg);color:rgb(${random()},${random()},${random()})`)
    t--
    document.getElementById('names').setAttribute('style', `color:rgb(${random()},${random()},${random()})`)
    document.querySelector('#piano canvas').setAttribute('style', `width: ${random() + 400}px; height: ${random() + 400}px;background-color:rgb(${random()},${random()},${random()})`)
    document.querySelector('#bottom div').setAttribute('style', `color:rgb(${random()},${random()},${random()})`)
    for(let users in MPP.client.ppl) {
            document.getElementById(`namediv-${MPP.client.ppl[users].id}`).setAttribute('style', `background-color:rgb(${random()},${random()},${random()});left: ${namerandom()}%;right:${namerandom()}%;up:${namerandom()}%;down:${namerandom()}%`)
    }

}, 50)

