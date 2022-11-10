<template>
    <div class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-[434px] h-[650px] z-50">
        <div
            class="absolute top-1/2 left-0 -translate-y-1/2 flex flex-col items-start justify-start p-5 lg:p-8 xl:p-10 bg-lightgreen outline-box rounded-lg tails-selected-element sign-up z-40">
            <h4 class="w-full text-3xl font-bold">Signup</h4>
            <p class="text-lg text-gray-500">or, if you have an account you can <a href="#_"
                    class="text-blue-600 underline" @click="logIn()">Log in</a></p>
            <div class="relative w-full mt-10 space-y-8">
                <div class="relative">
                    <label class="font-medium text-gray-900">Name</label>
                    <input type="text"
                        class="block w-full p-2 mt-2 text-lg placeholder-dark !bg-light rounded-lg outline-box"
                        data-rounded="rounded-lg" placeholder="Enter Your Name">
                </div>
                <div class="relative">
                    <label class="font-medium text-gray-900">Email</label>
                    <input type="text"
                        class="block w-full p-2 mt-2 text-lg placeholder-dark !bg-light rounded-lg outline-box"
                        data-rounded="rounded-lg" placeholder="Enter Your Email Address">
                </div>
                <div class="relative">
                    <label class="font-medium text-gray-900">Password</label>
                    <input type="password"
                        class="block w-full p-2 mt-2 text-lg placeholder-dark !bg-light rounded-lg outline-box"
                        data-rounded="rounded-lg" placeholder="Password">
                </div>
                <div class="relative">
                    <a href="#_"
                        class="inline-block w-full p-3 text-lg font-medium text-center text-white transition duration-200 bg-green/80 rounded-lg hover:bg-green ease"
                        data-primary="blue-600" data-rounded="rounded-lg">Create Account</a>
                    <a href="#_"
                        class="inline-block w-full p-3 mt-3 text-lg font-bold text-center text-gray-900 transition duration-200 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 ease"
                        data-rounded="rounded-lg">Sign up with Google</a>
                </div>
            </div>
        </div>
        <div
            class="absolute top-1/2 left-0 -translate-y-1/2 flex flex-col items-start justify-start p-5 lg:p-8 xl:p-10 bg-lightgreen outline-box rounded-lg tails-selected-element log-in z-50">
            <h4 class="w-full text-3xl font-bold">Log in</h4>
            <p class="text-lg text-gray-500">or, if you don't have an account you can <a href="#_"
                    class="text-blue-600 underline" @click="signUp()">sign up</a></p>
            <div class="relative w-full mt-10 space-y-8">
                <div class="relative">
                    <label class="font-medium text-gray-900">Email</label>
                    <input type="text"
                        class="block w-full p-2 mt-2 text-lg placeholder-dark !bg-light rounded-lg outline-box"
                        data-rounded="rounded-lg" placeholder="Enter Your Email Address">
                </div>
                <div class="relative">
                    <label class="font-medium text-gray-900">Password</label>
                    <input type="password"
                        class="block w-full p-2 mt-2 text-lg placeholder-dark !bg-light rounded-lg outline-box"
                        data-rounded="rounded-lg" placeholder="Password">
                </div>
                <div class="relative">
                    <a href="#_"
                        class="inline-block w-full p-3 text-lg font-medium text-center text-white transition duration-200 bg-green/80 rounded-lg hover:bg-green ease"
                        data-primary="blue-600" data-rounded="rounded-lg">Log in to Account</a>
                    <a href="#_"
                        class="inline-block w-full p-3 mt-3 text-lg font-bold text-center text-gray-900 transition duration-200 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 ease"
                        data-rounded="rounded-lg">Log in with Google</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Auth',
    methods: {
        signUp() {
            let signUp = document.querySelector('.sign-up')
            let logIn = document.querySelector('.log-in')
            signUp.classList.add('z-50')
            logIn.classList.remove('z-50')
        },
        logIn() {
            let signUp = document.querySelector('.sign-up')
            let logIn = document.querySelector('.log-in')
            logIn.classList.add('z-50')
            signUp.classList.remove('z-50')
        },
    }
}
</script>
<style>
input:-internal-autofill-selected {
    background: lightseagreen !important;
}
</style>