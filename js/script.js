const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

/* CONTADOR FAKE */

const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 15);

function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;
  if (diff <= 0) return;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  const d = document.getElementById("days");
  const h = document.getElementById("hours");
  const m = document.getElementById("minutes");
  const s = document.getElementById("seconds");

  if (d) d.textContent = String(days).padStart(2, "0");
  if (h) h.textContent = String(hours).padStart(2, "0");
  if (m) m.textContent = String(minutes).padStart(2, "0");
  if (s) s.textContent = String(seconds).padStart(2, "0");
}

setInterval(updateCountdown, 1000);
updateCountdown();
