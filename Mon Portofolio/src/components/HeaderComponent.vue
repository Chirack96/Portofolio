<template>
  <Disclosure as="nav" class="bg-white">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <!-- Mobile menu button -->
        <DisclosureButton
          class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white sm:hidden">
          <span class="sr-only">Open main menu</span>
          <!-- Icons change based on menu state -->
          <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
          <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
        </DisclosureButton>
        <!-- Navigation Links - centered and responsive handling -->
        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <!-- Dynamically rendering links for different screen sizes -->
              <a v-for="item in navigation" :key="item.name" :href="item.href"
                :class="[item.current ?' text-black hover:text-white hover:bg-black' : 'text-black hover:bg-black hover:text-white', 'px-3 py-2 rounded-md text-sm font-medium']"
                :aria-current="item.current ? 'page' : undefined">
                {{ item.name }}
              </a>
            </div>
          </div>
        </div>
        
      </div>
    </div>
    <!-- Mobile Menu Panel -->
    <DisclosurePanel class="sm:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <a v-for="item in navigation" :key="item.name" :href="item.href"
          :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block px-3 py-2 rounded-md text-base font-medium']"
          :aria-current="item.current ? 'page' : undefined">
          {{ item.name }}
        </a>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';
import { defineComponent } from 'vue';

const navigation = [
  { name: 'HOME', href: '/home', current: true },
  { name: 'ABOUT', href: '/about', current: false },
  { name: 'PROJECTS', href: '/projects', current: false },
  { name: 'FORMATIONS', href: '/formations', current: false },
  { name: 'CONTACT', href: '/contact', current: false },
];

defineComponent({
  name: 'HeaderComponent',
});
</script>
