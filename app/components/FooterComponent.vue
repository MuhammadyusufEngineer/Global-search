<template>
    <footer class="bg-green !text-white relative bottom-0 left-0 w-full py-5 z-20">
        <div class="container">
            <div class="flex items-center justify-between">
                <div class="flex items-center justify-center gap-5">
                    <div class="flex items-center justify-center w-28">
                        <img src="@/assets/img/footer-logo.svg" alt="logo">
                    </div>
                    <div class="flex items-center gap-2">
                        <p class="text-sm">&copy; Globar Search {{ new Date().getFullYear() }} </p>
                    </div>
                </div>
                <div class="flex items-center gap-5 text-sm">
                    <NuxtLink to="/"><span class="hover-animation">Home</span></NuxtLink>
                    <NuxtLink to="/"><span class="hover-animation">About</span></NuxtLink>
                    <NuxtLink to="/"><span class="hover-animation">Careers</span></NuxtLink>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
    name: 'Footer'
}
</script>