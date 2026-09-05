document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  const surpriseBtn = document.getElementById("surpriseBtn");

  // Welcome Confetti
  triggerConfetti();

  // Flip Card On Click for all teacher cards
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
    });
  });

  // Top Celebration Button
  surpriseBtn.addEventListener("click", () => {
    fireCelebrationBlast();
  });
});

function triggerConfetti() {
  confetti({
    particleCount: 70,
    spread: 60,
    origin: { y: 0.6 }
  });
}

function fireCelebrationBlast() {
  const count = 200;
  const defaults = { origin: { y: 0.7 } };

  function fire(particleRatio, opts) {
    confetti(Object.assign({}, defaults, opts, {
      particleCount: Math.floor(count * particleRatio)
    }));
  }

  fire(0.25, { spread: 26, startVelocity: 55 });
  fire(0.2, { spread: 60 });
  fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
  fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
  fire(0.1, { spread: 120, startVelocity: 45 });
}
