<script setup>
import confetti from "canvas-confetti";
import { onMounted } from "vue";

const startConfetti = () => {
  var duration = 60 * 1000;
  var animationEnd = Date.now() + duration;
  var defaults = { startVelocity: 20, spread: 460, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  var interval = setInterval(function () {
    var timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    var particleCount = 150 * (timeLeft / duration);
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
    });
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
    });
  }, 250);
};


onMounted(startConfetti);
</script>

<template>
  <div></div>
</template>
