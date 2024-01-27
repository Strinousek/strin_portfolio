<script setup lang="ts">
    import { mottos } from '../store/constants';
    const motto = mottos[Math.floor(Math.random() * mottos.length)];
</script>

<template>
    <div id="about__me" class="introduction__box">
        <h1 class="introduction__box__title">
            Jakub 'Strin' Mrkacek <span class="introduction__box__subtitle">Software Developer</span>
        </h1>
        <div class="introduction__box__description">
            <p class="introduction__box__info__title">Who am i?</p>
            <p>I am a 17 year old student from Czech Republic with passion in coding and programming.</p>
            <p class="introduction__box__info__title">My beginnings:</p>
            <p>In 2019, I started to script lua scripts for the GTA V platform FiveM. From there, my passion for computer science kept growing.</p>
            <p class="introduction__box__info__title">What are my intentions?</p>
            <p>I love to grow. Mentally, physically, socially and skill-wise. I love to learn new technologies either by myself or even better with fellow developers.</p>
            <p class="introduction__box__info__title">Where am I today?</p>
            <p>As of now I've been able to gather up knowledge and experience from both Back-end and Front-end perspectives. Which allows me to be free in my project making decisions. If you'd like to know more, see my tech. stack below</p>
            <p class="introduction__box__info__title">One of my favorite mottos:</p>
            <p>"{{ motto }}"</p>
        </div>
    </div>
</template>

<style scoped>
    .introduction__box {
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .introduction__box__title {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: fit-content;
        font-family: "Silkscreen";
        padding: 8px;
        background-color: #2d3436;
        color: #dfe6e9;
        margin-bottom: 16px;
    }

    .introduction__box__subtitle {
        color: #6c5ce7;
        font-size: 24px;
        margin-top: 4px;
    }

    .introduction__box__description {
        font-size: 18px;
    }

    .introduction__box__description > p {
        font-family: "Silkscreen";
        color: #dfe6e9;
    }

    .introduction__box__info__title {
        font-size: 24px;
        margin-bottom: 8px;
        white-space: nowrap;
    }

    .introduction__box__info__title::before {
        font-family: "FontAwesome";
        content: "\f101";
        margin-right: 8px;
    }

    .introduction__box__info__title:not(:first-of-type) {
        margin-top: 16px;
    }

    
    @media (max-width: 1248px) {
        .introduction__box {
            align-items: center;
        }

        .introduction__box__title {
            align-items: center;
        }

        .introduction__box__description {
            text-align: center;
        }

        .introduction__box__info__title::before {
            content: "\f054";
        }
        .introduction__box__info__title::after {
            font-family: "FontAwesome";
            content: "\f053";
            margin-left: 8px;
        }

        .introduction__box__info__title::before, .introduction__box__info__title::after {
            font-size: 16px;
        }
    }

    @media (max-width: 768px) {
        .introduction__box__title {
            text-align: center;
            font-size: 24px;
            margin-bottom: 8px;
        }
        .introduction__box__subtitle {
            text-align: center;
            margin-top: 4px;
            font-size: 18px;
        }

        .introduction__box__description {
            font-size: 16px;
        }

        .introduction__box__info__title {
            font-size: 18px;
            white-space: normal;
        }
        
        .introduction__box__info__title::after {
            content: "";
        }

        .introduction__box__info__title:not(:first-of-type) {
            margin-top: 20px;
        }
    }
</style>