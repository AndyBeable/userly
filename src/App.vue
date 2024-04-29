<template>
  <main>
    <h1>Userly</h1>
    <Carousel />
  </main>
</template>

<script setup>
import Carousel from './components/Carousel.vue'
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900');

*,
*::before,
*::after {
  box-sizing: border-box;
}

html,
body {
  font-family: 'Roboto';
  margin: 0;
}

h1 {
  margin: 0;
  padding: 20px;
  color: $color-secondary;
}

#app {
  font-family: 'Montserrat', sans-serif;
}

main {
  /* background: orange; */
}
</style>
