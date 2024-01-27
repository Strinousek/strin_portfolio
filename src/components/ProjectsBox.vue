<script setup lang="ts">
    import { projects } from '../store/constants';
    import { dateToString, getDateMonthDifference } from "../utils/date";

    const openNewTab = (url?: string) => {
        if(!url)
            return;
        window.open(url, "_blank")
    };
</script>

<template>
    <div id="projects" class="projects__box">
        <h1 class="projects__box__title">
            Projects
        </h1>
        <div class="projects__box__list">
            <div v-for="project in projects" class="projects__box__list__item">
                <h2 v-bind:class="project.url ? 'projects__box__list__item__title--clickable' : 'projects__box__list__item__title'" @click="openNewTab(project.url)">
                    {{ project.title }}
                    <span v-if="project.company"> ({{ project.company }})</span>
                </h2>
                <div v-if="project.from" class="projects__box__list__item__date">
                    {{ dateToString(project.from) }} - {{ 
                        project.to ? dateToString(project.to) : "ON-GOING"
                    }} ({{ 
                        getDateMonthDifference(project.from, project.to ?? new Date())
                    }}m)
                </div>
                <div v-if="project.description" class="projects__box__list__item__description">
                    {{ project.description }}
                </div>
                <div v-if="project.technologiesUsed" class="projects__box__list__item__technologies">
                    {{ project.technologiesUsed.join(", ") }}
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .projects__box {
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .projects__box__title {
        width: fit-content;
        white-space: nowrap;
        font-family: "Silkscreen";
        padding: 8px;
        background-color: #2d3436;
        color: #dfe6e9;
        margin-bottom: 16px;
    }

    .projects__box__list {
        display: grid;
        grid-template-columns: repeat(2, 50%);
        grid-template-rows: auto; 
        gap: 8px;
        width: 100%;
    }

    .projects__box__list__item {
        font-family: "Silkscreen";
        padding: 16px;
        font-size: 20px;
        background-color: #2d3436;
        color: #dfe6e9;
    }

    .projects__box__list__item__title, .projects__box__list__item__title--clickable {
        width: fit-content;
        margin: 8px 0 12px 0;
        transition: 0.2s all;
    }

    .projects__box__list__item__title--clickable:hover {
        cursor: pointer;
        text-shadow: 2px 2px 15px #6C5CE7;
    }

    .projects__box__list__item__date {
        font-size: 16px;
        margin-bottom: 8px;
    }

    .projects__box__list__item__description {
        font-size: 18px;
        margin: 12px 0px;
    }

    .projects__box__list__item__technologies {
        font-size: 16px;
    }
    
    @media (max-width: 1248px) {

        .projects__box__list__item {
            padding: 8px;
        }
        .projects__box {
            align-items: center;
        }
    }
    
    @media (max-width: 768px) {
        .projects__box__list {
            grid-template-columns: 100%;
        }

        .projects__box__list__item {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
        }

        .projects__box__list__item__title, .projects__box__list__item__title--clickable {
            font-size: 24px;
        }
        .projects__box__list__item__date {
            font-size: 12px;
        }
        .projects__box__list__item__description {
            font-size: 16px;
        }
        .projects__box__list__item__technologies {
            font-size: 12px;
        }

        .projects__box__list__item__title, .projects__box__list__item__title--clickable,
        .projects__box__list__item__date, .projects__box__list__item__description,
        .projects__box__list__item__technologies {
            text-align: center;
        }
    }
</style>