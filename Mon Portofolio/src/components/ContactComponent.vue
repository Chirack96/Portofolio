<template>
    <div>
        
        <form @submit.prevent="submitContactForm"
            class="max-w-lg mx-auto p-8 border rounded-lg shadow-lg animate-slideInRight">
            <div class="mb-6">
                <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                <input id="name" v-model="contactForm.name" type="text" required
                    class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
            </div>
            <div class="mb-6">
                <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                <input id="email" v-model="contactForm.email" type="email" required
                    class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
            </div>
            <div class="mb-6">
                <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" v-model="contactForm.message" required
                    class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    rows="4"></textarea>
            </div>
            <button type="submit"
                class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Submit
            </button>
        </form>
        
        <div class="max-w-lg mx-auto mt-8 flex justify-around animate-slideInLeft">
            <a href="www.linkedin.com" target="_blank">
                <img src="@/assets/linkedin.png" alt="LinkedIn" class="w-8 h-8">
            </a>
            <a href="www.github.com" target="_blank">
                <img src="@/assets/github.png" alt="GitHub" class="w-8 h-8">
            </a>
            <a href="www.twitter.com" target="_blank">
                <img src="@/assets/TWITTER.png" alt="Twitter" class="w-8 h-8">
            </a>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const contactForm = ref({
    name: '',
    email: '',
    message: ''
});

function submitContactForm() {
    console.log('Contact form data:', contactForm.value);

}
</script>

<style scoped>
@keyframes slideInRight {
    from {
        opacity: 0;
        transform: translateX(100px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes slideInLeft {
    from {
        opacity: 0;
        transform: translateX(-100px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.animate-slideInRight {
    animation: slideInRight 1s ease-out;
}

.animate-slideInLeft {
    animation: slideInLeft 1s ease-out;
}
</style>
