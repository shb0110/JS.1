alert("salom hush kelibsiz")
const ism = prompt("ismingiz nima?")
console.log(ism)
document.write(`<h1>sizning ismingiz <mark>${ism}</mark> </h1>`)
alert(`salom  ${ism} hush kelibsiz`)

const yosh = prompt("yoshingiz nechida?")
console.log(yosh)
document.write(`<h1>sizning yoshingiz  <strong>${yosh}</strong> </h1>`)
confirm(`salom ${ism} yoshingiz  ${yosh} mi?`)

const joy = prompt("qayerda yashaysiz?")
console.log(joy)
document.write(`<h1>sizning manzilingiz <mark> ${joy}</mark></h1>`)
confirm(`salom ${ism} yoshingiz ${yosh} mi?.siz ${joy} da yashaysizmi?`)

const fish = prompt("tug'ilgan samangiz? masalam:yil.oy.kun")
console.log(fish)
confirm(`salom ${ism} yoshingiz ${yosh} mi?.siz ${joy} da yashaysizmi? va ${fish} manashu yilda tugilgansizmi?`)
document.write(`<h1>tug'ilgan samanasi <strong>${fish}</strong></h1>`)
