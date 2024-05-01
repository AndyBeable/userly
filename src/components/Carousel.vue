<template>
  <div class="carousel">
    <Card
      v-for="(user, index) in users"
      :key="index"
      :user="user"
      class="card"
      :background-color="props.backgroundColor"
    />
    <button class="button prev" @click="prev" :disabled="page === 1">
      <v-icon class="icon" name="bi-arrow-left" />
    </button>
    <button class="button next" @click="next">
      <v-icon class="icon" name="bi-arrow-right" />
    </button>
  </div>
</template>

<script setup>
import { defineComponent, ref, onMounted } from 'vue'
import Card from './Card.vue'

defineComponent({
  name: 'Carousel'
})

const props = defineProps(['backgroundColor'])

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

<style lang="scss">
.carousel {
  display: flex;
  overflow: hidden; /* Hide the overflow */
  position: relative;
  justify-content: center; /* Center items on the x-axis */
  align-items: center;
  height: 100vh;
  gap: 20px;
  padding: 0 20px; /* Add horizontal padding */
}

.card {
  flex: 0 0 auto; /* Make the card size based on its content */
  scroll-snap-align: start; /* Snap to the start */
}

.button {
  position: absolute;
  color: $color-secondary;
  top: 250px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  transition: transform 0.3s; /* New line */
}

.button .icon {
  transition: transform 0.3s ease-in-out;
}

.button:hover .icon {
  transform: translateX(-5px);
}

.button.next:hover .icon {
  transform: translateX(5px);
}

.prev {
  left: 0;
}

.next {
  right: 0;
}

@media (max-width: 600px) {
  .carousel {
    scroll-snap-type: x mandatory; /* Enable scroll snapping */
  }
  .card {
    flex: 0 0 100%; /* Make the card take up the full width of its container on mobile */
  }
  .button {
    top: auto;
    bottom: 20px;
  }
}
</style>
