<script setup lang="ts">
  import { scrollToElement } from "../utils/scroll";
</script>

<template>
    <div class="footer__container">
        <h1 class="footer__title" @click="scrollToElement('app')">strin.dev</h1>
        <h3 class="footer__subtitle">Website made by Jakub Mrkacek</h3>
        <h3 class="footer__subtitle">Made In Vue3</h3>
    </div>
</template>


<style scoped>
    .footer__container {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: #2d3436;
        padding: 16px 24px;
        -webkit-box-shadow: 0px 0px 30px 14px #2D3436; 
        box-shadow: 0px 0px 30px 14px #2D3436;
        z-index: 99;
    }

    .footer__title {
        color: #dfe6e97a;
        font-family: "Silkscreen";
        border-radius: 4px;
        padding: 8px;
        transition: 0.2s all;
        text-align: center;
    }

    .footer__title:hover {
        cursor: pointer;
        text-shadow: 2px 2px 15px #6C5CE7;
    }

    .footer__subtitle {
        text-align: center;
        color: #dfe6e949;
        font-family: "Silkscreen";
    }
</style>