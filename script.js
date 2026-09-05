document.addEventListener("DOMContentLoaded", () => {
  const card = document.getElementById("card");
  const surpriseBtn = document.getElementById("surpriseBtn");

  // Initial welcome confetti burst
  triggerWelcomeConfetti();

  // Flip card on user interaction
  card.addEventListener("click", (e) => {
    if (e.target.id === "surpriseBtn") return;
    card.classList.toggle("flipped");
  });

  // Confetti celebration blast on button click
  surpriseBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    fireCelebrationBlast();
  });
});

function triggerWelcomeConfetti() {
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

