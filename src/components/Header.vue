<script setup lang="ts">
  import { useRouter } from 'vue-router';
  import { scrollToElement } from "../utils/scroll";

  const router = useRouter();
</script>

<template>
  <div class="header__container">
    <h1 class="header__title" @click="router.push({name: 'Home'})">strin.dev</h1>
    <div class="navigation__container">
      <div class="navigation__button" @click="scrollToElement('about__me')">About Me</div>
      <div class="navigation__button" @click="scrollToElement('tech__stack')">Tech. Stack</div>
      <div class="navigation__button" @click="scrollToElement('projects')">Projects</div>
    </div>
  </div>
</template>

<style scoped>
  .header__container {
    position: relative;
    display: flex;
    justify-content: space-between;
    background-color: #2d3436;
    padding: 16px 24px;
    -webkit-box-shadow: 0px 0px 30px 14px #2D3436; 
    box-shadow: 0px 0px 30px 14px #2D3436;
    z-index: 99;
  }

  .header__title {
    color: #dfe6e9;
    font-family: "Silkscreen";
    border-radius: 4px;
    padding: 8px;
    transition: 0.2s all;
  }

  .header__title:hover {
    cursor: pointer;
    text-shadow: 2px 2px 15px #6C5CE7;
  }

  .navigation__container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .navigation__button {
    font-size: 24px;
    margin: 0 16px;
    color: #dfe6e9;
    font-family: "Silkscreen";
    transition: 0.2s all;
    text-align: center;
  }

  .navigation__button:hover {
    cursor: pointer;
    text-shadow: 2px 2px 15px #6C5CE7;
  }

  @media (max-width: 1248px) {
    .navigation__button {
      font-size: 20px;
      margin: 0 12px;
      white-space: nowrap;
    }
  }

  @media (max-width: 768px) {
    .header__container {
      flex-direction: column;
      align-items: center;
    }
    .header__title {
      font-size: 24px;
      padding: 0 0 8px 0;
      margin-bottom: 8px;
    }
    .navigation__button {
      font-size: 14px;
      margin: 0 12px;
      white-space: nowrap;
    }
  }
</style>