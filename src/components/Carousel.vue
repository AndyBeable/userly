<template>
  <!-- <div v-if="error">Error: {{ error }}</div> -->
  <!-- <div v-if="isFetching">loading...</div> -->
  <div class="carousel">
    <Card v-for="(user, index) in users" :key="index" :user="user" />
  </div>
  <!-- {{ data }} -->
</template>

<script setup>
import { defineComponent, defineExpose, ref, onMounted } from 'vue'
import { useFetch } from '@vueuse/core'
import Card from './Card.vue'

defineComponent({
  name: 'Carousel'
})

const users = ref([])

const getUsers = async () => {
  const response = await fetch('https://randomuser.me/api/?results=3')
  const { results } = await response.json()
  users.value = results

  console.log(users.value, 'users ref')
}

onMounted(getUsers)

getUsers()

// // onMounted(() => {
// //   execute()
// // })
</script>

<style>
.carousel {
  display: flex;
  overflow: hidden;
}
</style>
