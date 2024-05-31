import { createApp } from 'vue'
import App from './App.vue'
import VSpoiler from 'v-spoiler';
import 'v-spoiler/dist/v-spoiler.css';

const app = createApp(App);
app.component('VSpoiler', VSpoiler);
app.mount('#app');