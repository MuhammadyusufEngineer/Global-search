<template>
  <div>
    <section class="relative z-10">
      <main
        class="min-h-[50vh] w-full !bg-no-repeat !bg-center !bg-contain bg-lightgreen border-b border-solid border-dark">
      </main>
    </section>
    <section class="w-full">
      <div class="container relative z-30">
        <div class="absolute w-full -top-20 p-7 z-20 bg-lightgreen rounded-lg outline-box">
          <div class="relative w-full h-10 rounded-lg p-2 bg-light mb-5 outline-box">
            <input class="w-full h-full text-xs text-dark outline-none bg-light placeholder:text-dark"
              placeholder="Search by city, adress, category, name..." type="text">
            <div class="absolute top-2 right-2 w-[35px] h-auto bg-light">
              <img src="@/assets/img/search.svg" alt="">
            </div>
          </div>
          <div
            class="flex items-center justify-between bg-light outline-box p-2 rounded-lg select-none transition-all duration-300 cursor-pointer"
            @click="toggleCollapse()">
            <p class="text-sm font-dark font-medium">Show all Categories</p>
            <div class="flex items-center gap-2">
              <p class="text-sm font-dark font-medium">Expand</p>
              <img src="@/assets/img/chevron-down.svg" class="w-4" alt="chevron down">
            </div>
          </div>
          <transition name="fade">
            <div class="flex flex-wrap flex-row gap-10 mt-5 categories-container duration-300" v-show="collapse" @click="collapse = !collapse">
              <div class="relative max-w-[64px] z-10  cursor-pointer hover:-translate-y-2 duration-300"
                v-for="card in categories" :key="card.id">
                <div
                  class="h-16 w-16 rounded-2xl flex items-center justify-center outline-box overflow-hidden p-2 bg-light">
                  <img :src="require(`@/assets/img/${card.id}.png`)" :alt="card.title">
                </div>
                <p class="mt-2 text-dark text-xs text-ellipsis whitespace-nowrap font-medium overflow-hidden">{{
                    card.title
                }}</p>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </section>
    <section class="w-full relative mt-[100px]">
      <div class="container">
        <div class="w-full flex items-center justify-between mb-5">
          <h1 class="text-3xl text-light font-medium">Companies, shops, and others</h1>
          <div class="flex items-center justify-between gap-2">
            <div class="cursor-pointer w-6">
              <img src="@/assets/img/list.svg" alt="list view icon" @click="chnageServiceGridOrList('list')">
            </div>
            <div class="cursor-pointer w-6">
              <img src="@/assets/img/grid.svg" alt="grid view icon" @click="chnageServiceGridOrList('grid')">
            </div>
          </div>
        </div>
        <transition name="fade" mode="out-in">
          <div>
            <div :key="view" class="flex flex-wrap justfiy-evenly gap-5" v-for="index in 10">
              <ServiceItem v-if="view === 'grid'" />
            </div>
          </div>
        </transition>
      </div>
    </section>
  </div>
</template>

<style>
main {
  background-image: url('@/assets/img/hero-light.png');
}

.dark-layer {
  background: linear-gradient(to top, rgba(0, 0, 0, .5) 5%, transparent 100%);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .3s ease;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active below version 2.1.8 */
  {
  opacity: 0;
}
</style>
<script>
import ServiceItem from '@/components/ServiceItemComponent.vue'

export default {
  name: 'IndexPage',
  components: {
    ServiceItem
  },
  data: () => {
    return {
      collapse: false,
      view: 'grid',
      categories: [
        { id: 1, title: 'Dental clinics' },
        { id: 2, title: 'Drug stores' },
        { id: 3, title: 'Medical clinics' },
        { id: 4, title: 'Karaokes' },
        { id: 5, title: 'Barbershops' },
        { id: 6, title: 'Mini markets' },
        { id: 7, title: 'Super markets' },
        { id: 8, title: 'Schools' },
        { id: 9, title: 'Cemetries' },
        { id: 10, title: 'Gun shops' },
        { id: 11, title: 'Aeroport' },
        { id: 12, title: 'Fire stations' },
        { id: 13, title: 'Banks' },
        { id: 14, title: 'Investment companys' },
        { id: 15, title: 'Financial companies' },
        { id: 16, title: 'Charities' },
        { id: 17, title: 'Fast Foods' },
        { id: 18, title: 'Companies' },
        { id: 19, title: 'Tele stations' },
      ]
    }
  },
  methods: {
    toggleCollapse() {
      this.collapse = !this.collapse
    },
    chnageServiceGridOrList(type) {
      this.view = type
    },
  }
}
</script>
