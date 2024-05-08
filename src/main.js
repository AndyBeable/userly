import { createApp } from 'vue'
import App from './App.vue'

import { OhVueIcon, addIcons } from 'oh-vue-icons'
import {
  BiArrowLeft,
  BiArrowRight,
  MdEmailOutlined,
  BiTelephone,
  CoLocationPin,
  BiPersonCircle
} from 'oh-vue-icons/icons'

addIcons(BiArrowLeft, BiArrowRight, MdEmailOutlined, BiTelephone, CoLocationPin, BiPersonCircle)

const app = createApp(App)

app.component('v-icon', OhVueIcon)

app.mount('#app')
