<template>
  <div class="card">
    <div class="content">
      <div class="image">
        <img :src="props.user.picture.large" alt="Profile Image" />
      </div>
      <div class="text">
        <p class="name">{{ fullName }}</p>
        <p class="name">{{ props.user.email }}</p>
        <p class="name">
          {{ props.user.phone }}
        </p>
        <p class="name">{{ location }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineComponent, defineProps, computed } from 'vue'

defineComponent({
  name: 'Card'
})

const props = defineProps(['user'])

const fullName = computed(() => {
  return props.user.name.first + ' ' + props.user.name.last
})

const location = computed(() => {
  return props.user.location.city + ',' + props.user.location.country
})
</script>

<style lang="scss">
.user {
  display: flex;
  flex-direction: column;
  margin: 2rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);

  @media screen and (min-width: 768px) {
    min-width: 400px;
  }
}

.user__image {
  height: auto;
  width: 120px;
  border-radius: 50%;

  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5px;
}

.card {
  width: 350px;
  height: fit-content;
  border-radius: 20px;
  padding: 10px;
  text-align: center;
  background: #ededed;
}

.content {
  margin: 15px 2px;
}

.image img {
  height: auto;
  width: 120px;
  border-radius: 50%;

  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5px;
}

.name {
  font-size: 1.25em;
  font-weight: bolder;
  letter-spacing: 1px;
  color: $color-secondary;
}
</style>
