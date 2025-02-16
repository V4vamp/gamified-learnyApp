<script setup>
import { Menu } from 'lucide-vue-next';
import { ref } from 'vue';

const showMenu = ref(false);
</script>
<template>
    <nav class="nav">
        <div class="nav-items">
            <div class="nav-logo">
                <img src="../../assets/logo.svg" alt="">
            </div>
            <div :class="['nav-links', { mobile: showMenu }]">
                <a href="https://www.learnlyapp.io/" class="link" target="_blank" rel="noopener noreferrer">Pricing</a>
                <a href="https://www.learnlyapp.io/organization-home" class="link" target="_blank"
                    rel="noopener noreferrer">For Creators</a>
                <a href="https://blog.learnlyapp.io/" class="link" target="_blank" rel="noopener noreferrer">Blogs</a>
            </div>
        </div>
        <div :class="['nav-buttons', {mobile: showMenu }]">
            <a href="https://learnlyapp.io/download" class="button">Download App</a>
            <a href="https://www.learnlyapp.io/request-demo" class="button">Request a Demo</a>
        </div>
        <Menu @click="showMenu = !showMenu" class="menu-icon" />
    </nav>
</template>

<style src="./nav.css" scoped></style>