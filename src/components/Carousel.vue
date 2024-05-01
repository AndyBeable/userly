<template>
  <div class="carousel">
    <div v-if="isLoading" class="carousel__loading">Loading</div>
    <Card
      v-else
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
const isLoading = ref(false)

const getUsers = async () => {
  isLoading.value = true

  const response = await fetch(
    `https://randomuser.me/api/?inc=name,email,phone,picture,location&seed=abc&results=3&page=${page.value}`
  )
  const { results } = await response.json()
  users.value = results

  isLoading.value = false
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
  overflow: hidden;
  position: relative;
  justify-content: center;
  height: 100vh;
  gap: 20px;
  /* padding: 0 20px; */
}

.carousel__loading {
  font-size: 24px;
}

.carousel__loading:after {
  overflow: hidden;
  display: inline-block;
  vertical-align: bottom;
  -webkit-animation: ellipsis steps(4, end) 900ms infinite;
  animation: ellipsis steps(4, end) 900ms infinite;
  content: '\2026';
  width: 0px;
}

@keyframes ellipsis {
  to {
    width: 1.25em;
  }
}

@-webkit-keyframes ellipsis {
  to {
    width: 1.25em;
  }
}

.card {
  flex: 0 0 auto;
  scroll-snap-align: start;
}

.button {
  position: absolute;
  color: $color-secondary;
  top: 20%;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  transition: transform 0.3s;
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
  left: 5%;
}

.next {
  right: 5%;
}

@media (max-width: 600px) {
  .carousel {
    scroll-snap-type: x mandatory;
  }
  .card {
    flex: 0 0 100%;
  }

  .button {
    top: 60%;
  }
}
</style>
