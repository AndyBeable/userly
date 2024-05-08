<template>
  <main class="container">
    <div class="userly">
      <div class="userly__header">
        <v-icon class="icon" name="bi-person-circle" />
        <h1>Userly</h1>
      </div>
      <p class="userly__intro">
        A free, open-source API for generating random user data. Like Lorem Ipsum, but for people.
      </p>
      <ColorPicker @color-selected="updateColor" />
    </div>

    <Carousel :background-color="backgroundColor" />
  </main>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import Carousel from './components/Carousel.vue'
import ColorPicker from './components/ColorPicker.vue'

const backgroundColor = ref(localStorage.getItem('backgroundColor') || '')

const updateColor = (color) => {
  backgroundColor.value = color
  localStorage.setItem('backgroundColor', color)
}

watch(backgroundColor, (newColor) => {
  localStorage.setItem('backgroundColor', newColor)
})

onMounted(() => {
  const storedColor = localStorage.getItem('backgroundColor')
  if (storedColor) {
    backgroundColor.value = storedColor
  }
})
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

.container {
  padding: 20px 20px;
}

.userly {
  max-width: 600px;
  margin: auto;
  font-weight: 500;

  &__header {
    display: flex;
    align-items: center;
    gap: 5px;
    margin: 0;
  }
}

#app {
  font-family: 'Montserrat', sans-serif;
}

@media (min-width: 600px) {
  .userly {
    max-width: 60%;
    margin: 0 170px;
  }
}
</style>
