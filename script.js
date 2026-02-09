const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const music = document.getElementById("bgMusic");

// 🎵 Music start on first tap
// 🎵 Music Toggle

const musicToggle = document.getElementById("musicToggle");

let isPlaying = false;

musicToggle.addEventListener("click", () => {
  if (!isPlaying) {
    music.play();
    musicToggle.textContent = "🔇 Music OFF";
    isPlaying = true;
  } else {
    music.pause();
    musicToggle.textContent = "🔊 Music ON";
    isPlaying = false;
  }
});


/* 💖 Slideshow */
const images = [
  "image1.jpeg",
  "image2.jpeg",
  "image3.jpg",
  "image4.jpg",
  "image5.jpg",
  "image6.jpg",
  "image7.jpg",
  "image8.jpg",
  "image9.jpg",
  "image10.jpg"
];

let currentIndex = 0;
const slideImage = document.getElementById("slideImage");

setInterval(() => {
  slideImage.style.opacity = 0;

  setTimeout(() => {
    currentIndex = (currentIndex + 1) % images.length;
    slideImage.src = images[currentIndex];
    slideImage.style.opacity = 1;
  }, 300);

}, 2000);

/* 😏 Savage NO Button */
const noTexts = [
  "Are you sure? 😏",
  "Think again 😂",
  "Nice try 🙈",
  "No option removed 😌",
  "YES hi better hai 😁"
];

let noIndex = 0;

function moveNo() {
  noBtn.textContent = noTexts[noIndex % noTexts.length];
  noIndex++;
  noBtn.style.left = Math.random() * 200 + "px";
  noBtn.style.top = Math.random() * 40 + "px";
}

noBtn.addEventListener("mouseover", moveNo);
noBtn.addEventListener("touchstart", moveNo);

/* 🎉 YES Click */
yesBtn.addEventListener("click", () => {

  document.body.innerHTML = `
    <div class="celebration">
      <h1 class="yay-text">YAYYYY 💖😍</h1>
      <p class="yay-sub">
        Officially my Valentine 💘<br><br>
        Love your angry face btw Q2 😁😂<br>
           Thank You for being my Setting ^-^ <333
      </p>
    </div>
  `;

  startFireworks();
});


/* 🎉 Confetti */
function confettiBlast() {
  for (let i = 0; i < 120; i++) {
    const conf = document.createElement("div");
    conf.className = "confetti";
    conf.style.left = Math.random() * window.innerWidth + "px";
    conf.style.top = "-10px";
    conf.style.background = `hsl(${Math.random()*360},100%,60%)`;
    document.body.appendChild(conf);
    setTimeout(() => conf.remove(), 3000);
  }
}

/* 🌹 Falling Roses */
setInterval(() => {
  const rose = document.createElement("div");
  rose.className = "rose";
  rose.innerHTML = "🌹";
  rose.style.left = Math.random() * window.innerWidth + "px";
  document.body.appendChild(rose);
  setTimeout(() => rose.remove(), 6000);
}, 500);

// 🎥 Video Unmute
const video = document.getElementById("loveVideo");
const unmuteBtn = document.getElementById("unmuteBtn");

unmuteBtn.addEventListener("click", () => {
  video.muted = false;
  video.play();
  unmuteBtn.textContent = "❤️ Playing with Sound";
});

function startFireworks() {

  for (let i = 0; i < 60; i++) {

    const firework = document.createElement("div");
    firework.className = "firework";

    firework.style.left = Math.random() * window.innerWidth + "px";
    firework.style.top = Math.random() * window.innerHeight + "px";

    firework.style.background = `hsl(${Math.random()*360},100%,60%)`;

    document.body.appendChild(firework);

    setTimeout(() => {
      firework.remove();
    }, 1200);
  }

  setInterval(() => {
    for (let i = 0; i < 20; i++) {
      const spark = document.createElement("div");
      spark.className = "firework";
      spark.style.left = Math.random() * window.innerWidth + "px";
      spark.style.top = Math.random() * window.innerHeight + "px";
      spark.style.background = `hsl(${Math.random()*360},100%,60%)`;
      document.body.appendChild(spark);

      setTimeout(() => spark.remove(), 1000);
    }
  }, 800);
}
