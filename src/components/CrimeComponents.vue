<template>
    <div class="spoiler-container">
        <div class="spoiler-button_h1" @click="isSpolireH1 = !isSpolireH1">{{ props.crimeName }}</div>
        <v-spoiler v-model="isSpolireH1">
            <div class="articles__list">
                <div class="articles__item"
                    :class="isSpolireH2[index] ? 'articles__item_active': ''"
                    v-for="(item, index) in articles"
                    :key="item.name"
                    @click="toggleSpoiler(index)"
                >
                    <div 
                        class="spoiler-button_h2" 
                    >{{ item.name }}</div>
                    <v-spoiler v-model="isSpolireH2[index]">
                        <div class="article_result">{{ item.result }}</div>
                    </v-spoiler>
                </div>
            </div>
        </v-spoiler>
    </div>
</template>

<script setup>
import VSpoiler from 'v-spoiler';
import 'v-spoiler/dist/v-spoiler.css';
import { ref, defineProps } from 'vue';

const isSpolireH1 = ref(false)
const isSpolireH2 = ref([])

const props = defineProps({
    crimeName: String,
    articles: {
        name: String,
        result: String
    }
});

const toggleSpoiler = (index) => {
    if (isSpolireH2.value[index] === undefined) {
        isSpolireH2.value[index] = true;
    } else {
        isSpolireH2.value[index] = !isSpolireH2.value[index];
    }
}

</script>

<style scoped>
.spoiler-container {
    max-width: 60vw;
    display: flex;
    flex-direction: column;
}

.spoiler-button_h1 {
    border-radius: 2px;
    cursor: pointer;
    border: 1px solid gray;
    background-color: rgba(128, 128, 128, 0.532);
    backdrop-filter: blur(5px);
    box-shadow: black 0px 0px 5px;
    width: 52vw;
    font-size: 2rem;
    color: white;
    &:hover{
        background-color: rgba(128, 128, 128, 0.65);
    }
    &:active{
        box-shadow: black 0px 0px 10px;
    }
}

.articles__list {
    box-sizing: border-box;
    color: white;
    margin-top: 10px;
    max-width: 52vw;
    text-align: left;
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    /* padding: 0; */
}

.articles__item {
    cursor: pointer;
    align-items: center;
    text-align: left;
    margin: 0 auto;
    position: relative;
    background-color: rgba(255, 255, 255, 0.378);
    backdrop-filter: blur(4px);
    border-radius: 2px;
    &:hover{
        box-shadow: black 0px 0px 5px;
    }
    &::before{
        transition: ease 0.4s;
        content: '\00BB';
        position: absolute;
        left: -2%;
    }
}

.articles__item::marker {
    color: red;
}

.articles__item_active{
    &::before{
        /* content: '\00BB';
        position: absolute;
        left: -2%; */
        transform: rotate(90deg);
    }
}

.spoiler-button_h2 {
    color: black;
    font-weight: bold;
}

.article_result{
    white-space: pre-line;
    /* margin-top: 10px; */
    padding: 10px 10px;
}
</style>