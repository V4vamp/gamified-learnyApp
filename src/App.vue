<script setup>
import SignUp from "./components/form/SignUp.vue";
import Start from "./components/Start/Start.vue";
</script>

<template>
  <div id="app">
    <Nav />
    <main>
      <router-view></router-view> <!-- Renders the current page -->
    </main>
  </div>
</template>

<style scoped></style>
