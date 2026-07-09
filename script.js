/* ==========================================
   KAWAII ANIMATIONS & EFFECTS
========================================== */

// Cute items list for floating background elements
const cuteItems = ["💖", "🎀", "🌸", "✨", "🩷", "⭐", "☁️", "🍓"];

// 1. Floating Emojis Background Effect
function createFloat() {
  const item = document.createElement("div");
  item.className = "decoration";
  item.innerHTML = cuteItems[Math.floor(Math.random() * cuteItems.length)];
  
  item.style.left = Math.random() * 100 + "vw";
  item.style.fontSize = (20 + Math.random() * 30) + "px";
  item.style.animationDuration = (5 + Math.random() * 5) + "s";

  document.body.appendChild(item);

  setTimeout(() => {
    item.remove();
  }, 10000);
}

setInterval(createFloat, 600);


// 2. High-Performance Canvas Sparkle Trail (Glitch-Free)
const canvas = document.getElementById('sparkleCanvas');
if (canvas) {
  const ctx = canvas.getContext('2d');

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  const particles = [];
  const symbols = ['✨', '💖', '🌸', '💕', '⭐', '🍓'];

  let lastTime = 0;
  document.addEventListener('mousemove', (e) => {
    const now = Date.now();
    if (now - lastTime < 30) return;
    lastTime = now;

    particles.push({
      x: e.clientX,
      y: e.clientY,
      size: Math.random() * 8 + 14,
      text: symbols[Math.floor(Math.random() * symbols.length)],
      opacity: 1,
      speedY: Math.random() * 1.5 + 0.5,
      speedX: (Math.random() - 0.5) * 1.5
    });
  });

  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.y -= p.speedY;
      p.x += p.speedX;
      p.opacity -= 0.03;

      if (p.opacity <= 0) {
        particles.splice(i, 1);
        continue;
      }

      ctx.globalAlpha = p.opacity;
      ctx.font = `${p.size}px sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(p.text, p.x, p.y);
    }

    requestAnimationFrame(animateParticles);
  }
  animateParticles();
}

/* ==========================================
   CLICK TO FLIP CARD FUNCTION
========================================== */
function toggleFlip(element) {
  element.classList.toggle("flipped");
}

function happiness() {
  alert("💖 Welcome to our little happiness corner 🎀");
}
/* ==========================================
   INTERACTIVE SKY (NIGHT MODE)
========================================== */

function toggleTheme() {
  document.body.classList.toggle('night-mode');
  
  const button = document.getElementById('themeToggle');
  // Update button text based on mode
  if (button) {
    button.innerText = document.body.classList.contains('night-mode') ? '☀️ Day' : '🌙 Night';
  }
}

// Generate stars for the night sky
function createStars() {
  for (let i = 0; i < 50; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.width = Math.random() * 3 + 'px';
    star.style.height = star.style.width;
    star.style.left = Math.random() * 100 + 'vw';
    star.style.top = Math.random() * 100 + 'vh';
    star.style.zIndex = '0'; // Keeps stars behind other content
    document.body.appendChild(star);
  }
}

// Initialize stars when the page loads
createStars();