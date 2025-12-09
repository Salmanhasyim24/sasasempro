// ======== Carousel logic (drag + active card + dots) ========
const container = document.getElementById("carouselContainer");
const wrapper   = document.getElementById("carouselWrapper");
const cards     = Array.from(document.querySelectorAll(".option-card"));
const dots      = Array.from(document.querySelectorAll(".dot"));

let isDown = false;
let startX = 0;
let startScroll = 0;

function setActive(index) {
  cards.forEach(c => c.classList.remove("active"));
  dots.forEach(d => d.classList.remove("active"));

  const i = Math.max(0, Math.min(index, cards.length - 1));
  cards[i].classList.add("active");
  dots[i].classList.add("active");

  // blur transition (cute focus effect)
  wrapper.classList.add("blur");
  setTimeout(() => wrapper.classList.remove("blur"), 240);
}

function getIndexFromScroll() {
  // approximate active index based on scroll position
  const cardWidth = cards[0]?.getBoundingClientRect().width || 1;
  return Math.round(container.scrollLeft / (cardWidth + 16)); // 16 = gap
}

container.addEventListener("mousedown", (e) => {
  isDown = true;
  startX = e.pageX - container.offsetLeft;
  startScroll = container.scrollLeft;
});

container.addEventListener("mouseleave", () => { isDown = false; });
container.addEventListener("mouseup", () => { isDown = false; });

container.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - container.offsetLeft;
  const walk = (x - startX) * 1.35;
  container.scrollLeft = startScroll - walk;
});

container.addEventListener("scroll", () => {
  setActive(getIndexFromScroll());
});

// dots click (optional for desktop)
dots.forEach(d => {
  d.addEventListener("click", () => {
    const idx = Number(d.dataset.index || 0);
    const cardWidth = cards[0]?.getBoundingClientRect().width || 1;
    container.scrollTo({ left: idx * (cardWidth + 16), behavior: "smooth" });
    setActive(idx);
  });
});

// init
setActive(0);

// ======== Petals (simple SVG) ========
const petalContainer = document.getElementById("petalContainer");

function spawnPetal(){
  const petal = document.createElement("div");
  petal.style.position = "absolute";
  petal.style.left = Math.random() * 100 + "vw";
  petal.style.top = "-60px";
  petal.style.width = "22px";
  petal.style.height = "22px";
  petal.style.opacity = "0.9";
  petal.style.pointerEvents = "none";
  petal.innerHTML = `
    <svg viewBox="0 0 24 24" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2c3 0 6 2.5 6 6 0 4-3 7-6 7S6 12 6 8c0-3.5 3-6 6-6Z"
            fill="#ff9ec9" opacity="0.9"/>
      <path d="M12 15c3 0 6 2.5 6 6 0 4-3 7-6 7S6 25 6 21c0-3.5 3-6 6-6Z"
            fill="#ff6fa8" opacity="0.6"/>
    </svg>
  `;

  const duration = 4 + Math.random() * 3; // 4–7s
  petal.style.transition = `transform ${duration}s linear, opacity ${duration}s linear`;

  petalContainer.appendChild(petal);

  requestAnimationFrame(() => {
    petal.style.transform = `translateY(110vh) rotate(${(Math.random() * 220 - 110)}deg)`;
    petal.style.opacity = "0";
  });

  setTimeout(() => petal.remove(), duration * 1000);
}

setInterval(spawnPetal, 650);
