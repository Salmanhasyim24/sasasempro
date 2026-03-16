const message = `Aku tau mungkin sekarang semuanya sudah terasa berbeda.

Mungkin kita sudah tidak sedekat dulu.

Aku tidak menulis ini untuk memaksamu kembali.

Aku hanya ingin mengatakan sesuatu
yang mungkin seharusnya sudah aku katakan sejak lama.

Maaf Sa.

Maaf kalo selama ini ada sikapku
yang tanpa sadar menyakitimu
atau membuatmu kecewa.

Terima kasih, terima kasih
untuk semua waktu,
cerita,
dan kenangan yang pernah ada.

Aku tetap berharap
kamu selalu baik-baik saja
dan menemukan kebahagiaanmu sendiri.

jaga kesehatannya ya, Have a peaceful day, Sasaa!`

let i = 0
const speed = 60

function openLetter(){

document.querySelector(".envelope").classList.add("open")

document.getElementById("letter").style.display="block"

document.getElementById("music").play()

typeWriter()

}

function typeWriter(){

if(i < message.length){

document.getElementById("text").innerHTML += message.charAt(i)

i++

setTimeout(typeWriter, speed)

}else{

document.getElementById("signature").style.opacity = 1

document.getElementById("memory").style.opacity = 1

}

}