document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  const surpriseBtn = document.getElementById("surpriseBtn");

  // Soft Pink Confetti Burst on Page Load
  triggerWelcomeConfetti();

  // Flip Card On Tap
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

function triggerWelcomeConfetti() {
  confetti({
    particleCount: 65,
    spread: 60,
    origin: { y: 0.6 },
    colors: ['#f43f5e', '#fda4af', '#fb7185', '#ffffff']
  });
}

function fireCelebrationBlast() {
  const count = 220;
  const defaults = { 
    origin: { y: 0.7 },
    colors: ['#f43f5e', '#fb7185', '#fda4af', '#ec4899', '#ffffff']
  };

  function fire(particleRatio, opts) {
    confetti(Object.assign({}, defaults, opts, {
      particleCount: Math.floor(count * particleRatio)
    }));
  }

  fire(0.25, { spread: 26, startVelocity: 55 });
  fire(0.2, { spread: 60 });
  fire(0.35, { spread: 100, decay: 0.91, scalar: 0.85 });
  fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
  fire(0.1, { spread: 120, startVelocity: 45 });
}
