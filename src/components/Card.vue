<template>
  <div class="user">
    <div class="user__content" :style="{ background: props.backgroundColor }">
      <div>
        <img :src="props.user.picture.large" alt="Profile Image" class="user__image" />
      </div>
      <div class="user__details">
        <p class="user__name">{{ fullName }}</p>
        <p class="user__email">
          <v-icon class="icon" name="md-email-outlined" />
          {{ props.user.email }}
        </p>
        <p class="user__phone">
          <v-icon class="icon" name="bi-telephone" />
          {{ props.user.phone }}
        </p>
        <p class="user__location">
          <v-icon class="icon" name="co-location-pin" />
          {{ location }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineComponent, defineProps, computed } from 'vue'

defineComponent({
  name: 'Card'
})

const props = defineProps(['user', 'backgroundColor'])

const fullName = computed(() => {
  return props.user.name.first + ' ' + props.user.name.last
})

const location = computed(() => {
  return props.user.location.city + ', ' + props.user.location.country
})
</script>

<style lang="scss">
.user__content {
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border: 1px solid rgba(227, 224, 224, 0.3);
  max-width: 100%;
  height: fit-content;
  border-radius: 8px;
  padding: 10px 10px;
  text-align: center;
  background: #ededed;
  font-weight: 300;

  @media screen and (min-width: 600px) {
    width: 350px;
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
  padding-top: 10px;
}

.user__name {
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
}
</style>
