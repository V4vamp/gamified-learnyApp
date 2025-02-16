<script setup>
import { MoveLeft, CircleHelp, RefreshCw, MoveRight } from "lucide-vue-next";
import Alarm from "@/components/Icons/Alarm.vue";
import { useRoute, useRouter } from "vue-router";
import { ref, watch, onMounted, onUnmounted } from "vue";
import { previewQuestions } from "@/data/questions.js";

const router = useRouter();
const route = useRoute();
const currentIndex = ref(parseInt(route.params.id) - 1);
const question = ref(previewQuestions[currentIndex.value]);

watch(
  () => route.params.id,
  (newId) => {
    currentIndex.value = parseInt(newId) - 1;
    question.value = { ...previewQuestions[currentIndex.value] };
  }
);

const draggedTerm = ref(null);
const userAnswers = ref({});

const startDrag = (term) => {
  draggedTerm.value = term;
};

const dropDefinition = (termKey) => {
  if (!draggedTerm.value) return;

  const isCorrect = draggedTerm.value === termKey;

  userAnswers.value[termKey] = {
    term: draggedTerm.value,
    correct: isCorrect,
  };

  draggedTerm.value = null;
};

const nextQuestion = () => {
  const nextIndex = currentIndex.value + 1;
  if (nextIndex < previewQuestions.length) {
    router.push(`/course-preview/${nextIndex + 1}`);
  } else {
    router.push("/results");
  }
};

const back = () => {
  router.go(-1);
};

const reset = () => {
  userAnswers.value = {};
};

const timeLeft = ref(60);
let timer = null;

const startTimer = () => {
  if (timer) clearInterval(timer);
  timeLeft.value = 60;

  timer = setInterval(() => {
    if (timeLeft.value > 0) {
      timeLeft.value--;
    } else {
      nextQuestion();
    }
  }, 1000);
};

watch(
  () => route.params.id,
  (newId) => {
    currentIndex.value = parseInt(newId) - 1;
    question.value = previewQuestions[currentIndex.value];
    startTimer();
  }
);

onMounted(startTimer);

onUnmounted(() => clearInterval(timer));

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const secs = (seconds % 60).toString().padStart(2, "0");
  return `${minutes}:${secs}`;
};
</script>

<template>
  <div class="preview-container">
    <header>
      <span @click="back" class="icon-wrap">
        <MoveLeft class="icon" />
      </span>
      <h2>Course Preview</h2>
      <span class="icon-wrap">
        <CircleHelp class="icon" />
      </span>
    </header>
    <main>
      <section class="top-section">
        <div class="left-section">
          <h4>Lesson 1.{{ currentIndex + 1 }}</h4>
          <div class="progress-view">
            <span
              v-for="(item, index) in previewQuestions.length"
              :key="index"
              class="progress"
              :class="{ active: index <= currentIndex }"
            ></span>
          </div>
        </div>
        <div
          class="right-section"
          :class="{ warning: timeLeft <= 15, pulsing: timeLeft <= 15 }"
        >
          <Alarm class="time" />
          <h6>{{ formatTime(timeLeft) }}</h6>
        </div>
      </section>
      <section class="quiz-section">
        <h3>{{ question.topic }}!</h3>

        <div class="definitions">
          <span
            v-for="[termKey, definition] in Object.entries(
              question.definations
            )"
            :key="termKey"
            @dragover.prevent
            @drop="dropDefinition(termKey)"
            class="definition"
            :class="{
              correct: userAnswers[termKey]?.correct,
              incorrect: userAnswers[termKey]?.correct === false,
            }"
          >
            <span class="dragged" v-if="userAnswers[termKey]">
              {{ userAnswers[termKey].term }}
              {{ userAnswers[termKey].correct ? "✅" : "❌" }}
            </span>
            <span v-else>
              {{ definition }}
            </span>
          </span>
        </div>

        <h4>{{ question.question }}</h4>

        <div class="terms">
          <span
            draggable="true"
            @dragstart="startDrag(term)"
            v-for="term in question.terms"
            :key="term"
            class="term"
          >
            {{ term }}
          </span>
        </div>
      </section>
    </main>
    <footer>
      <button class="reset" @click="reset">
        <RefreshCw class="icon" />
      </button>
      <button @click="nextQuestion">
        Continue
        <MoveRight />
      </button>
    </footer>
  </div>
</template>

<style src="./preview.css" scoped>

</style>
