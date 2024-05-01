<template>
  <div class="color__picker">
    <p>Choose your card's background color</p>
    <div class="color__picker__buttons">
      <button
        class="color__picker--button"
        v-for="(color, index) in colors"
        :key="index"
        @click="selectedColor(color.hex)"
        :style="{ 'background-color': color.hex }"
        :aria-label="`Select ${color.name} color`"
      ></button>
    </div>
  </div>
</template>

<script setup>
import { defineComponent } from 'vue'

defineComponent({
  name: 'ColorPicker'
})

const emit = defineEmits(['color-selected'])

const colors = [
  { name: 'red', hex: '#f99595d7' },
  { name: 'blue', hex: '#9fd8fbdf' },
  { name: 'yellow', hex: '#fcf649c2' },
  { name: 'green', hex: '#b8f97ce3' },
  { name: 'default', hex: '#f5f5f5' }
]

const selectedColor = (color) => {
  emit('color-selected', color)
}
</script>

<style lang="scss" scoped>
.color__picker {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  /* padding: 0 20px; */
  margin-bottom: 40px;

  &__buttons {
    display: flex;
    justify-content: space-between;
  }

  &--button {
    border: none;
    border-radius: 50%;
    height: 20px;
    width: 20px;
    cursor: pointer;
  }
}

@media (min-width: 600px) {
  .color__picker__buttons {
    width: 400px;
    justify-content: unset;
    gap: 15px;
  }
}
</style>
