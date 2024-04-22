<template>
  <div>
    <h1>props.user.name</h1>
  </div>
</template>

<script setup>
import { defineComponent } from 'vue'

defineComponent({
  name: 'UserCard'
})

const props = defineProps(['user'])
console.log(props.user)
</script>

<style></style>
