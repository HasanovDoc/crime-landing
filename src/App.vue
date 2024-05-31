<template>
  <div class="crime_list">
    <CrimeComponents 
    v-for="item in dates"
    :key="item.name"
    :crimeName="item.name"
    :articles="item.articles"/>
  </div>
</template>

<script setup>
import CrimeComponents from './components/CrimeComponents.vue';
import {dates} from './data'

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
}

.crime_list{
  box-sizing: border-box;
  width: 100%;
  min-height: 100vh;
  background-image: url('./assets/background_crime_2.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  /* margin-left: 200px; */
  display: flex;
  flex-direction: column;
  gap: 6vh;
  padding: 15vh 10vw;
}
</style>
