<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import Confetti from "@/components/Animations/Confetti.vue";

const score = ref(0);
const router = useRouter();

onMounted(() => {
  const storedScore = localStorage.getItem("quizScore");
  if (storedScore) {
    score.value = parseInt(storedScore);
  }
});

const restartQuiz = () => {
  localStorage.setItem("quizScore", 0);
  router.push("/question/1");
};
</script>

<template>
  <div class="result-container">
    <h2>Quiz Completed!</h2>
    <p>Your Score: {{ score }} / 100</p>

    <p v-if="score >= 80" class="pass-message">
      🎉 Congratulations! You passed the Quiz! 🎉
    </p>
    <p v-else class="fail-message">
      ❌ You did not score the required points. Try again by clicking the button below.
    </p>

    <button @click="restartQuiz">Restart Quiz</button>
    <Confetti v-if="score >= 80" />
        
  </div>
</template>

<style src="./result.css" scoped>

</style>
