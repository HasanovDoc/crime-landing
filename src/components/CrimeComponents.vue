<template>
    <div>
        <button @click="SpolireH1 = !SpolireH1">{{ 'Нажми' }}</button>
        <v-spoiler v-model="SpolireH1">
            <div>
                {{"Преступления против жизни и здоровья"}}
            </div>
        </v-spoiler>
    </div>
</template>

<script setup>
import VSpoiler from 'v-spoiler';
import 'v-spoiler/dist/v-spoiler.css';
import { ref } from 'vue';

const SpolireH1 = ref(false)

</script>

<style scoped></style>