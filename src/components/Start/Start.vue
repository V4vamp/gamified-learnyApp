<script setup>
import { useRouter } from "vue-router";
import Nav from "../Nav/Nav.vue";

const router = useRouter();

const startQuiz = () => {
  router.push("/quiz"); // Navigate to the Quiz Page
};

</script>

<template>
    <Nav />
    <div class="start-container">
        <h2>Start</h2>
        <p>Click the button below to start the quiz.</p>
        <button @click="startQuiz">Start Quiz</button>
        <p>Or</p>
        <button
        @click="() => router.push('/course-preview/1')"
        >
            Go to Course Preview
        </button>
    </div>
</template>

<style src="./start.css" scoped></style>
