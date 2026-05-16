/* =========================
   PRINT PHOTOBOX
========================= */

function buildPrintLayout(images){

    const printArea =
    document.getElementById("print-area");

    printArea.innerHTML = "";

    // 1 halaman = 4 foto
    for(let i = 0; i < images.length; i += 4){

        const strip =
        document.createElement("div");

        strip.className = "print-strip";

        const chunk =
        images.slice(i, i + 4);

        chunk.forEach(src => {

            const photo =
            document.createElement("div");

            photo.className = "print-photo";

            photo.innerHTML = `
                <img src="${src}">
                <div class="print-caption">
                    Kenangan Sasa 💗
                </div>
            `;

            strip.appendChild(photo);

        });

        printArea.appendChild(strip);

    }

}

/* =========================
   PRINT ALL
========================= */

function printAllPhotos(){

    const images =
    [...document.querySelectorAll(".photo-card img")]
    .map(img => img.src);

    buildPrintLayout(images);

    setTimeout(()=>{
        window.print();
    },300);

}

/* =========================
   PRINT SELECTED
========================= */

function printSelectedPhotos(){

    const cards =
    [...document.querySelectorAll(".photo-card")];

    const selected = [];

    cards.forEach(card=>{

        const checked =
        card.querySelector(".photo-check").checked;

        if(checked){

            selected.push(
                card.querySelector("img").src
            );

        }

    });

    if(selected.length === 0){

        alert("Pilih foto dulu ya 💗");
        return;

    }

    buildPrintLayout(selected);

    setTimeout(()=>{
        window.print();
    },300);

}