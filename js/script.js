const header = document.querySelector(".header");

/* HEADER SCROLL */
window.addEventListener("scroll", () => {
  if (header) {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }
});

/* SPLASH COM CLIQUE + ESPERA 4s */

window.addEventListener("DOMContentLoaded", () => {
  const splash = document.querySelector(".splash");
  const audio = document.getElementById("ritualSound");

  const splashShown = sessionStorage.getItem("mushiSplashShown");

  if (!splash || splashShown) {
    if (splash) splash.style.display = "none";
    return;
  }

  splash.addEventListener("click", () => {
    if (audio) {
      audio.volume = 0.9;
      audio.play();
    }

    splash.querySelector(".splash-text").textContent =
      "CARREGANDO EXPERIÊNCIA...";

    setTimeout(() => {
      splash.classList.add("hidden");

      setTimeout(() => {
        splash.style.display = "none";
        sessionStorage.setItem("mushiSplashShown", "true");
      }, 1500);
    }, 4000); // espera 4 segundos após clique
  });
});

/* CONTADOR (somente se existir) */

/* ================= COUNTDOWN SEGURO ================= */

// Função para garantir que os elementos existem
function getEl(id) {
  return document.getElementById(id);
}

// Verifica se existe pelo menos o days (evita rodar em páginas erradas)
if (getEl("days")) {

  // Data alvo (06 de Maio de 2026 - 00:00:00 GMT-3 Brasil)
  const targetDate = new Date(Date.UTC(2026, 4, 6, 3, 0, 0));
  // (3h UTC = 00h no Brasil - GMT-3)

  function updateCountdown() {

    const now = new Date();
    const diff = targetDate.getTime() - now.getTime();

    // Se já passou a data → zera tudo
    if (diff <= 0) {
      ["days","hours","minutes","seconds"].forEach(id => {
        const el = getEl(id);
        if (el) el.textContent = "00";
      });
      return;
    }

    // Cálculos seguros
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    // Atualiza DOM com segurança
    if (getEl("days")) getEl("days").textContent = String(days).padStart(2,"0");
    if (getEl("hours")) getEl("hours").textContent = String(hours).padStart(2,"0");
    if (getEl("minutes")) getEl("minutes").textContent = String(minutes).padStart(2,"0");
    if (getEl("seconds")) getEl("seconds").textContent = String(seconds).padStart(2,"0");

  }

  // Atualização suave
  updateCountdown();
  setInterval(updateCountdown, 1000);

}
/* ================= HERO ARM FIXO + SCROLL SUAVE ================= */

window.addEventListener("DOMContentLoaded", () => {
  const arm = document.querySelector(".hero-arm");
  const container = document.querySelector(".hero-arm-container");

  if (!arm || !container) return;

  setTimeout(() => {
    arm.classList.add("visible");
  }, 800);

  if (window.innerWidth > 768) {
    window.addEventListener("scroll", () => {
      const scroll = window.scrollY;
      container.style.transform = `translateY(${scroll * -0.05}px)`;
    });
  }
});
