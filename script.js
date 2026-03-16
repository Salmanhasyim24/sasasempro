const message = `Aku tahu mungkin sekarang semuanya sudah terasa berbeda.

Mungkin kita sudah tidak sedekat dulu.
Mungkin sekarang terasa seperti dua orang yang pernah saling mengenal saja.

Aku tidak tahu apakah halaman ini akan kamu lihat sampai selesai.

Tapi aku tetap ingin mengatakan sesuatu yang mungkin
seharusnya sudah aku katakan dari dulu.

Maaf.

Maaf kalau selama ini ada sikapku
yang tanpa sadar menyakitimu,
membuatmu kecewa,
atau membuat keadaan menjadi tidak seperti yang seharusnya.

Aku tidak menulis ini untuk memaksamu kembali.

Aku hanya ingin kamu tahu
bahwa semua kenangan yang pernah ada
tetap berarti buat aku.

Dan jika pada akhirnya kita memang hanya
menjadi bagian dari cerita masa lalu masing-masing,

aku tetap berharap kamu selalu bahagia
di jalanmu yang sekarang.

Terima kasih untuk semua yang pernah ada.

— dari seseorang yang pernah peduli.`

let i = 0
const speed = 30

function typeWriter(){

if(i < message.length){

document.getElementById("letter-text").innerHTML += message.charAt(i)

i++

setTimeout(typeWriter, speed)

}

}

window.onload = typeWriter