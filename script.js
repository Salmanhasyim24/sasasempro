const message = `sasaaa, how's ur day? i hope u are always well :)
aku tau sekarang semuanya sudah terasa berbeda, dan mungkin kita juga sudah tidak sedekat dulu.
 
aku menulis ini bukan untuk memaksamu kembali, tapi hanya ingin menyampaikan hal yang mungkin sudah lama ingin aku sampaikan.

terima kasih ya… aku benar-benar menghargai semua yang pernah kita lewati. aku juga bisa memahami kenapa sasa memilih jalan yang sekarang, dan aku menghormati itu sepenuhnya.

maaf, sa. kalo selama ini ada sikap atau caraku yang tanpa sadar menyakitimu, membuatmu kecewa, atau terasa membebani. aku menyadari banyak hal, dan itu jadi pelajaran penting buatku ke depannya.

tentang semua kenangan kita, aku menyimpannya sebagai sesuatu yang baik. terima kasih untuk semua waktu, cerita, dan hal-hal kecil yang pernah kita bagi.

kalo boleh aku minta tolong ke sasa, boleh berdiri sebentar dan pergi ke depan cermin, sebentar aja?
heii saa, lihat diri sasa di cermin, bukankah sasa sudah sangat hebat? jangan lupa untuk bilang terimakasih sama diri sasa sendiri ya? yang sudah kuat sampai sejauh ini, percayalah semua akan baik baik saja, semua yang sedang sasa usahakan satu persatu pasti akan Tuhan iyakan.

aku tulus berharap sasa selalu baik-baik saja, menemukan ketenangan, dan kebahagiaan dengan caramu sendiri.

tidak ada yang perlu sasa khawatirkan dari aku ya, sa. aku akan baik baik saja, dan akan melanjutkan langkahku kedepannya.

terima kasih sudah pernah hadir dalam hidupku.
senang mengenalmu, senang sekali sa

terima kasih sasa udah mengekspresikan perasaan sasa kemaren
thank u for a wonderful woman I've ever seen and thank u for always be a better person together
may Allah always bless u, happy terus ya 
i will be ur bloom and see u at the aisle, sasa
until our next eclipse :)

kalo ada apapa, tolong kasih tau aku ya, sa? aku selalu di dekatmu sasa, selalu.

jaga kesehatanmu selalu ya. have a peaceful day, mi amor.
`

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