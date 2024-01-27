<script setup lang="ts">
    import { technicalStack as stack } from "../store/constants";
</script>

<template>
    <div id="tech__stack" class="stack__box">
        <h1 class="stack__box__title">
            Tech. Stack
        </h1>
        <div class="stack__box__list">
            <div v-for="item in stack" class="stack__box__list__item">
                <i v-if="item.icon" 
                    v-bind:style="item.iconColor ? { color: item.iconColor } : undefined" 
                    v-bind:class="item.icon"
                    class="stack__box__list__item__icon" 
                ></i>
                <div v-else
                    v-bind:style="item.iconColor ? { color: item.iconColor } : undefined" 
                    class="stack__box__list__item__icon">
                    {{ item.textIcon }}
                </div>
                {{ item.title }}
            </div>
        </div>
    </div>
</template>

<style scoped>

    .stack__box {
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .stack__box__title {
        width: fit-content;
        white-space: nowrap;
        font-family: "Silkscreen";
        padding: 8px;
        background-color: #2d3436;
        color: #dfe6e9;
        margin-bottom: 16px;
    }

    .stack__box__list {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: auto; 
        gap: 8px;
        width: 100%;
    }

    .stack__box__list__item {
        display: flex;
        align-items: center;
        font-family: "Silkscreen";
        padding: 16px;
        font-size: 20px;
        background-color: #2d3436;
        color: #dfe6e9;
    }

    .stack__box__list__item__icon {
        font-size: 36px;
        padding: 8px;
        margin-right: 8px;
    }
    
    @media (max-width: 1248px) {

        .stack__box {
            align-items: center;
        }
        .stack__box__list {
            grid-template-columns: repeat(2, 50%);
        }
    }
    
    @media (max-width: 768px) {
        .stack__box__list {
            grid-template-columns: 100%;
        }
    }
</style>