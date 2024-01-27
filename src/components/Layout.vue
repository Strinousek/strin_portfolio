<script setup lang="ts">
    import Header from './Header.vue';
    import Footer from './Footer.vue';
</script>

<template>
  <Header/>
  <div class="content__container">
    <div class="content">
      <slot></slot>
    </div>
  </div>
  <Footer/>
</template>

<style scoped>
  .content__container {
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: #636e72;
    z-index: 1;
  }

  .content {
    height: 100%;
    width: 80%;
    padding: 36px;
  }

  @media (max-width: 768px) {
    .content {
      width: 90%;
      padding: 24px 16px;
    }
  }
</style>