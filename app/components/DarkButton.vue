<template>
    <div class="bg-green outline outline-[1px] outline-dark text-light outline-text rounded-lg h-10 flex items-center justify-center align-middle px-3 !leading-[1.2] font-black text-sm select-none cursor-pointer hover:bg-green/70 duration-300">
        Log In
    </div>
</template>
<script>
export default {
    name: 'DarkButton',
    props: {
        bgColor: String
    }
}
</script>