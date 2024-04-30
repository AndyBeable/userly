<template>
  <main>
    <div class="userly">
      <h1 class="userly__header">Userly</h1>
      <p class="userly__intro">
        A free, open-source API for generating random user data. Like Lorem Ipsum, but for people.
      </p>
    </div>
    <ColorPicker />
    <Carousel />
  </main>
</template>

<script setup>
import Carousel from './components/Carousel.vue'
import ColorPicker from './components/ColorPicker.vue'
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
  color: $color-secondary;
}

.userly {
  padding: 20px 20px;

  &__header {
    margin: 0;
  }
}

#app {
  font-family: 'Montserrat', sans-serif;
}

main {
  /* background: orange; */
}
</style>
