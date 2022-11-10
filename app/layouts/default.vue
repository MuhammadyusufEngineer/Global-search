<template>
    <div class="min-h-screen relative">
        <div class="cursor"></div>
        <Header />
        <Nuxt />
        <Footer />
    </div>
</template>
<script>
import Header from '@/components/HeaderComponent.vue'
import Footer from '@/components/FooterComponent.vue'
export default {
    components: {
        Header,
        Footer
    },
}
</script>