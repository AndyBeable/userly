<template>
  <main>
    <Carousel />
  </main>
</template>

<script setup>
import Carousel from './components/Carousel.vue'
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

html,
body {
  font-family: 'Roboto';
}

#app {
  font-family: 'Roboto', sans-serif;
}

main {
  background: orange;
}
</style>
