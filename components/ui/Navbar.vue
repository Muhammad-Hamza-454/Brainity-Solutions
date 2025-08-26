<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
    <div class="container-max">
      <div class="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center space-x-2 group">
          <div class="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center group-hover:bg-primary-700 transition-colors">
            <Icon name="lucide:brain-circuit" class="w-5 h-5 text-white" />
          </div>
          <span class="text-xl font-bold text-gray-900">Brainity</span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink
            v-for="item in navigationItems"
            :key="item.name"
            :to="item.href"
            class="text-gray-600 hover:text-primary-600 font-medium transition-colors duration-200"
            active-class="text-primary-600"
          >
            {{ item.name }}
          </NuxtLink>
        </div>

        <!-- Theme Toggle & Mobile Menu Button -->
        <div class="flex items-center space-x-4">
          <!-- Theme Toggle -->
          <button
            @click="toggleDarkMode"
            class="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-200"
            aria-label="Toggle dark mode"
          >
            <Icon :name="isDark ? 'lucide:sun' : 'lucide:moon'" class="w-5 h-5" />
          </button>

          <!-- Mobile Menu Button -->
          <button
            @click="toggleMobileMenu"
            class="md:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-200"
            aria-label="Toggle menu"
          >
            <Icon :name="isMobileMenuOpen ? 'lucide:x' : 'lucide:menu'" class="w-5 h-5" />
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div
        v-show="isMobileMenuOpen"
        class="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md"
      >
        <div class="px-4 py-6 space-y-4">
          <NuxtLink
            v-for="item in navigationItems"
            :key="item.name"
            :to="item.href"
            @click="closeMobileMenu"
            class="block text-gray-600 hover:text-primary-600 font-medium py-2 transition-colors duration-200"
            active-class="text-primary-600"
          >
            {{ item.name }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const { isDark, toggleDarkMode } = useDarkMode()

const isMobileMenuOpen = ref(false)

const navigationItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' }
]

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

// Close mobile menu when clicking outside
onMounted(() => {
  document.addEventListener('click', (e) => {
    const nav = document.querySelector('nav')
    if (nav && !nav.contains(e.target as Node)) {
      isMobileMenuOpen.value = false
    }
  })
})
</script>
