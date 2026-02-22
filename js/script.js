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

if (document.getElementById("days")) {
  const now = new Date();
  const day = now.getDay();
  const diffToMonday = (8 - day) % 7 || 7;

  const targetDate = new Date();
  targetDate.setDate(now.getDate() + diffToMonday + 72);
  targetDate.setHours(0, 0, 0, 0);

  function updateCountdown() {
    const current = new Date();
    const diff = targetDate - current;

    if (diff <= 0) return;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("days").textContent = String(days).padStart(2, "0");
    document.getElementById("hours").textContent = String(hours).padStart(
      2,
      "0",
    );
    document.getElementById("minutes").textContent = String(minutes).padStart(
      2,
      "0",
    );
    document.getElementById("seconds").textContent = String(seconds).padStart(
      2,
      "0",
    );
  }

  setInterval(updateCountdown, 1000);
  updateCountdown();
}
