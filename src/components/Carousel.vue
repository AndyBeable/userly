<template>
  <div class="carousel">
    <Card v-for="(user, index) in users" :key="index" :user="user" class="card" />
    <button class="prev" @click="prev" :disabled="page === 1">prev</button>
    <button class="next" @click="next">next</button>
  </div>
</template>

<script setup>
import { defineComponent, ref, onMounted } from 'vue'
import Card from './Card.vue'

defineComponent({
  name: 'Carousel'
})

const users = ref([])
const page = ref(1)

const getUsers = async () => {
  const response = await fetch(
    `https://randomuser.me/api/?inc=name,email,phone,picture,location&seed=abc&results=3&page=${page.value}`
  )
  const { results } = await response.json()
  users.value = results
}

const next = () => {
  page.value++
  getUsers()
}

const prev = () => {
  if (page.value > 1) {
    page.value--
    getUsers()
  }
}

onMounted(getUsers)
</script>

<style>
.carousel {
  display: flex;
  /* overflow: scroll; */
  position: relative;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 20px;
}

.prev,
.next {
  position: absolute;
  top: 60px;
}

.prev {
  left: 0;
}
.next {
  right: 0;
}
</style>
