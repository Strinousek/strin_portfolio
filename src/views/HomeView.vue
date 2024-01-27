<script setup lang="ts">
    import IntroductionBox from '../components/IntroductionBox.vue';
    import StackBox from '../components/StackBox.vue';
    import ProjectsBox from '../components/ProjectsBox.vue';
</script>

<template>
    <IntroductionBox/>
    <StackBox/>
    <ProjectsBox/>
</template>

<style scoped>
    div:not(:first-child) {
        margin-top: 24px;
    }
</style>