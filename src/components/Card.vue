<template>
  <div class="user">
    <h1>{{ user.name.first }}</h1>
  </div>
</template>

<script setup>
import { defineComponent, defineProps } from 'vue'

defineComponent({
  name: 'Card'
})

const props = defineProps(['user'])
</script>

<style>
.user {
  background-color: red;
  display: flex;
  flex-direction: row;
  margin: 2rem;
}
</style>
