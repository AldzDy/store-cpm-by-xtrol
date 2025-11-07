const roles = ["Web Developer", "Script Creator", "Cyberscurity", "Defacer"];
  const desc = "Welcome to my portfolio. My name is Reyvaldo Kurniawan. I want to be able to do Cybersecurity.";
  let roleIndex = 0, roleChar = 0, descChar = 0;

  function typeRole() {
    const el = document.getElementById('typing-role');
    if (roleChar < roles[roleIndex].length) {
      el.textContent += roles[roleIndex][roleChar++];
      setTimeout(typeRole, 100);
    } else {
      setTimeout(() => {
        el.textContent = "";
        roleChar = 0;
        roleIndex = (roleIndex + 1) % roles.length;
        typeRole();
      }, 1500);
    }
  }

  function typeDesc() {
    const el = document.getElementById('typing-desc');
    if (descChar < desc.length) {
      el.textContent += desc[descChar++];
      setTimeout(typeDesc, 40);
    }
  }

  function revealOnScroll() {
    document.querySelectorAll("section").forEach(sec => {
      const top = sec.getBoundingClientRect().top;
      if (top < window.innerHeight * 0.85) sec.classList.add("show");
    });
  }

  function toggleMenu() {
    document.getElementById('navMenu').classList.toggle('show');
  }

  window.addEventListener("scroll", revealOnScroll);
  window.addEventListener("load", () => {
    typeRole();
    typeDesc();
    revealOnScroll();
    setTimeout(() => {
      music.play().then(() => {
        musicBtn.classList.add("playing");
      }).catch(() => {});
    }, 1000);
  });

  const canvas = document.getElementById('stars');
  const ctx = canvas.getContext('2d');
  let w = canvas.width = window.innerWidth;
  let h = canvas.height = window.innerHeight;

  const stars = Array(100).fill().map(() => ({
    x: Math.random() * w,
    y: Math.random() * h,
    radius: Math.random() * 1.5,
    speed: Math.random() * 1 + 0.5
  }));

  function drawStars() {
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = '#ffffff';
    stars.forEach(star => {
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fill();
      star.y += star.speed;
      if (star.y > h) {
        star.y = 0;
        star.x = Math.random() * w;
      }
    });
    requestAnimationFrame(drawStars);
  }

  drawStars();
  window.addEventListener('resize', () => {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  });

  const music = document.getElementById("bgMusic");
  const musicBtn = document.querySelector(".music-player");

  function toggleMusic() {
    if (music.paused) {
      music.play();
      musicBtn.classList.add("playing");
    } else {
      music.pause();
      musicBtn.classList.remove("playing");
    }
  }
