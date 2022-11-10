<template>
  <nav class="fixed top-0 left-0 w-full py-1 bg-lightgreen border-b border-solid border-dark z-50">
    <div class="container flex items-center justify-between">
      <div class="w-24 h-12 p-2">
        <img src="~/assets/img/logo-no-background.svg" alt="logo global search">
      </div>
      <div>
        <ul class="flex items-center gap-5">
          <li>
            <NuxtLink to="/" class="hover-animation">About</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/" class="hover-animation">Feature</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/" class="hover-animation">Careers</NuxtLink>
          </li>
          <li>
            <Dropdown :ph="'Davlatni tanlang'" />
          </li>
          <li>
            <Dropdown :ph="'Viloyatni tanlang'" />
          </li>
          <li>
            <Dropdown :ph="'Tumanni tanlang'" />
          </li>
        </ul>
      </div>
      <DarkButton @click="showAuth()" />
    </div>
    <Auth v-show="auth" />
  </nav>
</template>
<script>
import DarkButton from '@/components/DarkButton.vue'
import Dropdown from '@/components/DropdownComponent.vue'
import Auth from '@/components/AuthComponent.vue'
export default {
  name: 'HeaderComponent',
  components: {
    DarkButton,
    Dropdown,
    Auth
  },
  props: {
    ph: {
      type: String,
      default: ''
    }
  },
  data: () => {
    return {
      auth: true
    }
  },
  methods: {
    showAuth() {
      this.auth = !this.auth
    }
  }
}
</script>