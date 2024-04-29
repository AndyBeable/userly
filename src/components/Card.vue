<template>
  <div class="user">
    <div class="user__content">
      <div>
        <img :src="props.user.picture.large" alt="Profile Image" class="user__image" />
      </div>
      <div class="user__details">
        <p class="user__name">{{ fullName }}</p>
        <p class="user__email">{{ props.user.email }}</p>
        <p class="user__phone">
          {{ props.user.phone }}
        </p>
        <p class="user__location">{{ location }}</p>
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
.user__content {
  background: rgba(255, 253, 253, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(227, 224, 224, 0.3);
  width: 350px;
  height: fit-content;
  border-radius: 8px;
  padding: 10px;
  text-align: center;
  background: #ededed;

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

.user__name {
  font-weight: 100;
  font-size: 1.25em;
  letter-spacing: 1px;
  color: $color-secondary;
  border-top: solid 1px white;
  padding-top: 10px;
}

.user__email,
.user__phone,
.user__location {
  color: $color-secondary;
  font-weight: 100;
}
</style>
