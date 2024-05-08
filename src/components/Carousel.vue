<template>
  <div class="carousel">
    <div v-if="isLoading" class="carousel__loading">Loading</div>
    <div v-else-if="errorMessage">{{ errorMessage }}</div>
    <Card
      v-else
      v-for="(user, index) in displayedUsers"
      :key="index"
      :user="user"
      class="card"
      :background-color="props.backgroundColor"
    />
    <button
      aria-label="Show next results"
      class="button previous"
      @click="prev"
      :disabled="page === 1"
    >
      <v-icon class="icon" name="bi-arrow-left" />
    </button>
    <button aria-label="Show previous results" class="button next" @click="next">
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

const allUsers = ref([])
const displayedUsers = ref([])
const page = ref(1)
const isLoading = ref(false)
const errorMessage = ref('')

const getUsers = async () => {
  isLoading.value = true

  try {
    const response = await fetch(
      `https://randomuser.me/api/?inc=name,email,phone,picture,location&nat=us,gb&seed=abc&results=100&page=${page.value}`
    )

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const { results } = await response.json()
    allUsers.value = results
    displayedUsers.value = allUsers.value.slice(0, 3)
  } catch (error) {
    console.error('There was an error with your fetch operation: ', error)
    errorMessage.value = 'There was an error loading the data.'
  } finally {
    isLoading.value = false
  }
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
  cursor: pointer;
}

.button .icon {
  transition: transform 0.3s ease-in-out;
}

.button:active {
  transform: scale(0.9);
}

.button:hover:active .icon {
  transform: translateX(-5px) scale(0.9);
}

.button.next:hover:active .icon {
  transform: translateX(5px) scale(0.9);
}

.previous {
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
    top: 55%;
  }
}
</style>
