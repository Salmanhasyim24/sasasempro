const message = `sasaaa, how's ur day? i hope u are always well :)
aku tau sekarang semuanya sudah terasa berbeda, dan mungkin kita juga udah tidak sedekat dulu. 
 
aku menulis ini bukan untuk memaksamu kembali dan mengubah keputusan sasa, tapi hanya ingin menyampaikan hal yang mungkin sudah lama ingin aku sampaikan.

terima kasih ya… aku benar-benar menghargai semua yang pernah kita lewati. aku juga bisa memahami kenapa sasa memilih jalan yang sekarang, dan aku menghormati itu sepenuhnya.

kalo sasa mau memberi aku kesempatan, sal mau minta maaf ke sasa lebih baik, tentunya dengan menutup semuanya dengan baik dan tenang

maaf, sa. maaf, kalo selama ini ada sikap serta caraku yang tanpa sadar menyakiti sasa, membuat sasa kecewa, nikin sasa ngga nyaman (khususnya, ajak sasa begadang terus), buat sasa overthinking dan itu membuat perasaan sasa terasa menjadi beban. aku menyadari banyak hal, dan itu jadi pelajaran penting buatku ke depannya

maaf juga karena setelah lebaran kemarin aku sempat menghilang tanpa penjelasan
beberapa bulan terakhir dari bulan ferbuari sampai bulan ini, bulan mei tepatnya ada banyak hal yang terjadi di keluargaku (bibi, nenek, dan omku) yang ada di soreang dan orang-orang sekitarku (kedua teman) dipanggil Tuhan duluan, jadi aku sedang berusaha menenangkan diriku sendiri sampai saat ini, aku lagi mencoba menjalani semuanya pelan pelan

tentang semua kenangan kita, aku menyimpannya sebagai sesuatu yang baik. terima kasih untuk semua waktu, cerita, dan hal hal besar yang pernah kita lewatin bersama
mungkin terlihat sederhana, tapi semuanya berarti buat aku

kalo boleh aku minta tolong ke sasa, sasa boleh berdiri sebentar dan pergi ke depan cermin, sebentar aja?
heii saa, lihat diri sasa di cermin.... 
bukankah sasa sudah sangat hebat? jangan lupa untuk bilang terimakasih sama diri sasa sendiri ya? yang sudah kuat sampai sejauh ini, percayalah semua akan baik baik saja, semua yang sedang sasa usahakan satu persatu pasti akan Tuhan iyakan

aku harap sasa selalu baik baik saja, menemukan ketenangan, kebahagiaan, merasa aman dan nyaman menjadi diri sasa sendiri

untuk sekarang dan kedepannya tidak ada yang perlu sasa khawatirkan. aku akan baik baik saja, dan aku pastikan sasa juga seperti itu (tentunya tidak bertemu lagi dengan seseorang yang tidak dewasa seperti sall)
sasa akan melanjutkan perjalanan cerita kedepannya, dan aku pun seperti itu

so next time, when u're tired, when something is bothering ur mind, or when ur heart feels heavy please tell sall, friends, or someone who will be with sasa in the future, okaii? just because u're afraid of burdening me yaa. because honestly, the thing that worries me the most is ur silence, saa
dan mungkin kemaren aku malah terus menerus bertanya pada sasa, apakah sasa bener bener baik baik aja dan aku kepengen terselasaikan dengan terburu buru untuk dibahas yang buat sasa ngerasa ditekan oleh sal, karena di lubuk hati aku, aku tau ketika balasan sasa semakin singkat, ketika energi sasa berubah, ketika senyumam sasa terasa dipaksakan, atau ketika sasa berusaha keras untuk bersikap normal, sasa mungkin berpikir sasa menyembunyikannya dengan baik, tapi aku bisa negrasain ketika ada yang salah dengan sasa, kadang-kadang aku berharap sasa bisa melihat diri sasa seperti aku melihat sasa, sasa bukanlah beban bagiku 
ur feelings, ur stress, ur tears, ur overthinking, none of those things will ever make me love u less. if anything, it makes me want to hold u closer and protect u even more, because when i love someone, i don't only love the easy parts of them, i love every part, including the broken and exhausted ones too

terakhir dari aku, terima kasih sudah pernah hadir dalam hidupku, sa
bahagia dan senang mengenalmu, senang sekali

terima kasih sasa, sasa udah mengekspresikan perasaan sasa kemaren
thank u for a wonderful woman i've ever seen
i will be ur bloom and see u at the aisle, sasa
until our next eclipse :)

happy graduation and congrats, sasa
aku tau, pasti hasil sidang sasa berjalan lancar dan memuaskan
i'm so proud of u, sa 
selalu bangga dengan sasa
jaga kesehatanmu selalu ya,
i love u, elisa sulistiawati
have a peaceful life, mi amor.
`

let i = 0
const speed = 55


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