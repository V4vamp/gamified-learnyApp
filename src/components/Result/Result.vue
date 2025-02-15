<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

// Retrieve score from localStorage (or replace with Vuex/Pinia if used)
const score = ref(0);
const router = useRouter();

onMounted(() => {
  const storedScore = localStorage.getItem('quizScore');
  if (storedScore) {
    score.value = parseInt(storedScore);
  }
});

const restartQuiz = () => {
  localStorage.setItem('quizScore', 0); // Reset score
  router.push('/question/1');
};
</script>

<template>
  <div class="quiz-container">
    <h2>Quiz Completed!</h2>
    <p>Your Score: {{ score }} / 100</p>
    <button @click="restartQuiz">Restart Quiz</button>
  </div>
</template>

<style scoped>
.quiz-container {
  text-align: center;
  padding: 20px;
}

button {
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
}
</style>
