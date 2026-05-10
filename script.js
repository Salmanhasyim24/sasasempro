const message = `sasaaa, how's ur day? i hope u are always well :)
aku tau sekarang semuanya sudah terasa berbeda, dan mungkin kita juga sudah tidak sedekat dulu. 
 
aku menulis ini bukan untuk memaksamu kembali dan mengubah keputusanmu, tapi hanya ingin menyampaikan hal yang mungkin sudah lama ingin aku sampaikan.

terima kasih ya… aku benar-benar menghargai semua yang pernah kita lewati. aku juga bisa memahami kenapa sasa memilih jalan yang sekarang, dan aku menghormati itu sepenuhnya.

maaf, sa. kalo selama ini ada sikap serta caraku yang tanpa sadar menyakiti sasa, membuat sasa kecewa, ngga nyaman, buat sasa overthinking dan itu membuat perasaan sasa kerasa menjadi beban. aku menyadari banyak hal, dan itu jadi pelajaran penting buatku ke depannya
maaf juga karena setelah lebaran kemarin aku sempat menghilang tanpa penjelasan
beberapa bulan terakhir ada banyak hal yang terjadi di keluargaku (bibi dan nenek) dan orang-orang sekitarku (kedua temanku) dipanggil duluan, jadi aku sedang berusaha menenangkan diriku sendiri sampai saat ini, lagi mencoba menjalani semuanya pelan pelan

tentang semua kenangan kita, aku menyimpannya sebagai sesuatu yang baik. terima kasih untuk semua waktu, cerita, dan hal hal besar yang pernah kita lewatin bersama
mungkin terlihat sederhana, tapi semuanya berarti buat aku

kalo boleh aku minta tolong ke sasa, boleh berdiri sebentar dan pergi ke depan cermin, sebentar aja?
heii saa, lihat diri sasa di cermin, bukankah sasa sudah sangat hebat? jangan lupa untuk bilang terimakasih sama diri sasa sendiri ya? yang sudah kuat sampai sejauh ini, percayalah semua akan baik baik saja, semua yang sedang sasa usahakan satu persatu pasti akan Tuhan iyakan.

aku berharap sasa selalu baikbaik saja, menemukan ketenangan, kebahagiaan, merasa aman dan nyaman menjadi diri sendiri

untuk sekarang dan kedepannya tidak ada yang perlu sasa khawatirkan. aku akan baik baik saja, dan aku harap sasa juga gitu
sasa akan melanjutkan perjalanan cerita kedepannya, dan aku pun seperti itu

aku mau ucapin pertama
happy graduation and congrats, sasa
aku tau, pasti sidang yang akan sasa jalani berjalan lancar

terima kasih sudah pernah hadir dalam hidupku.
senang mengenalmu, senang sekali sa

terima kasih sasa udah mengekspresikan perasaan sasa kemaren
thank u for a wonderful woman I've ever seen
i will be ur bloom and see u at the aisle, sasa
until our next eclipse :)

kalo ada apapa atau beban yang dipikul sasa berat, tolong kasih tau aku ya, sa? i'm here, always here

jaga kesehatanmu selalu ya. have a peaceful life, mi amor.
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