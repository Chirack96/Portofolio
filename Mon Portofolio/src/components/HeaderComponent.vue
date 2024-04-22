<template>
  <Disclosure as="nav" class="bg-white">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="flex items-center">
          <a href="/home"><img src="@/assets/photo.jpg" alt=""
              class="h-10 w-10 rounded-full"></a>
          <span class="ml-3 font-bold text-lg text-violet-900 "><a href="/home">JACQUES GOUGOU</a></span>
        </div>

        <div class="absolute inset-y-0 right-0 flex items-center sm:hidden">
          <DisclosureButton
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="sr-only">Open main menu</span>

            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>

        <div class="hidden sm:flex sm:items-stretch sm:justify-end flex-1">
          <div class="flex space-x-4">

            <a v-for="item in navigation" :key="item.name" :href="item.href"
              :class="[item.current ? 'text-black hover:text-white hover:bg-black' : 'text-black hover:bg-black hover:text-white', 'px-3 py-2 rounded-md font-bold text-sm']"
              :aria-current="item.current ? 'page' : undefined">
              {{ item.name }}
            </a>
          </div>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <a v-for="item in navigation" :key="item.name" :href="item.href"
          :class="[item.current ? 'bg-black text-white' : 'text-black hover:bg-black hover:text-white', 'block px-3 py-2 rounded-md text-lg']"
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
import { defineComponent, ref } from 'vue';

const open = ref(false);
const navigation = [
  { name: 'HOME', href: '/home', current: true },
  { name: 'ABOUT', href: '/about', current: false },
  { name: 'PROJECTS', href: '/projects', current: false },
  { name: 'FORMATIONS', href: '/formations', current: false },
  { name: 'CONTACT', href: '/contact', current: false },
];

defineComponent({
  name: 'HeaderComponent',
  components: {
    DisclosureButton,
    DisclosurePanel,
    Bars3Icon,
    XMarkIcon
  }
});
</script>
