<script setup>
import { ArrowLeft, CircleCheckBig, CircleAlert } from 'lucide-vue-next';
import { useRoute, useRouter } from 'vue-router';
import { ref, watch } from 'vue';
import { questions } from "@/data/questions.js";

const router = useRouter();
const route = useRoute();


const currentIndex = ref(parseInt(route.params.id) - 1);
const question = ref(questions[currentIndex.value]);
const selectedAnswer = ref(null);
const score = ref(0);
const isCorrect = ref(null);

const selectAnswer = (option) => {
    selectedAnswer.value = option;
    isCorrect.value = option === question.value.correct;
};

watch(
    () => route.params.id,
    (newId) => {
        currentIndex.value = parseInt(newId) - 1;
        question.value = questions[currentIndex.value];
        selectedAnswer.value = null;
        isCorrect.value = null;
    }
);

const nextQuestion = () => {
    if (selectedAnswer.value === question.value.correct) {
        score.value += 20;
        localStorage.setItem("quizScore", score.value);
    }

    const nextIndex = currentIndex.value + 1;
    if (nextIndex < questions.length) {
        router.push(`/question/${nextIndex + 1}`);
    } else {
        router.push("/results");
    }
};

const back = () => {
    router.go(-1);
};

const getLetter = (index) => String.fromCharCode(65 + index);

</script>

<template>
    <div class="quiz-container">
        <header @click="back" class="icon-wrapper">
            <ArrowLeft class="icon" />
        </header>
        <main class="quiz-main">
            <div class="info-bar">
                <span>Goal: 100 points</span>
                <span>Current Points: {{ score }}</span>
            </div>
            <div class="quiz-area">
                <h2>Question {{ currentIndex + 1 }}</h2>
                <h3>
                    {{ question.text }}
                </h3>
                <section class="options">
                    <span v-for="(option, index) in question.options" :key="option">
                        <button @click="selectAnswer(option)" :class="{
                            correct: selectedAnswer === option && isCorrect,
                            incorrect: selectedAnswer === option && isCorrect === false
                        }">
                            <h4>{{ getLetter(index) }}. {{ option }}</h4>

                            <CircleCheckBig v-if="selectedAnswer === option && isCorrect" class="correct-icon" />

                            <CircleAlert v-if="selectedAnswer === option && isCorrect === false" class="wrong-icon" />
                        </button>
                    </span>
                </section>
            </div>
            <footer>
                <span class="">
                    <span v-if="isCorrect" class="correct-message">
                        <CircleCheckBig class="correct-icon" />
                        <p>{{ question.success }}</p>
                    </span>
                    <span v-if="selectedAnswer && !isCorrect" class="wrong-message">
                        <CircleAlert class="wrong-icon" />
                        <p>Think again! {{ question.error }}</p>
                    </span>
                </span>
                <button @click="nextQuestion" :disabled="!selectedAnswer">Next</button>
            </footer>
        </main>
    </div>
</template>
<style src="./quiz.css" scoped></style>