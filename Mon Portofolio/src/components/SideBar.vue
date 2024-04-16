<template>
    <Disclosure as="div" class="relative min-h-screen">
        <Disclosure.Button class="px-4 py-2 text-white bg-blue-500 hover:bg-blue-700">
            {{ open ? 'Close' : 'Menu' }}
        </Disclosure.Button>
        <Disclosure.Panel class="absolute w-64 bg-gray-800 text-white h-full transition-transform transform"
            :class="{ 'translate-x-0': open, '-translate-x-full': !open }">
            <div class="p-5">
                <h2 class="text-lg font-semibold">Social Media</h2>
                <ul class="mt-4 space-y-2">
                    <li>
                        <a href="https://www.linkedin.com/in/yourprofile" target="_blank"
                            class="block hover:text-gray-300">
                            LinkedIn
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/yourusername" target="_blank" class="block hover:text-gray-300">
                            GitHub
                        </a>
                    </li>
                    <li>
                        <!-- Ajoutez d'autres réseaux sociaux ici -->
                    </li>
                </ul>
            </div>
        </Disclosure.Panel>
    </Disclosure>
</template>

<script setup>
import { Disclosure } from '@headlessui/vue';
</script>

<style scoped>
.disclosure-panel {
    transition: transform 300ms;
}
</style>
