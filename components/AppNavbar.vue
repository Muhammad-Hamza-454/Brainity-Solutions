<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-200/50 transition-all duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <NuxtLink to="/" class="flex-shrink-0 animate-fadeInLeft">
          <div class="flex items-center space-x-2">
            <div class="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center hover-scale">
              <Icon name="lucide:brain-circuit" size="24" class="text-white" />
            </div>
            <span class="text-xl font-bold text-gradient">Brainity Solutions</span>
          </div>
        </NuxtLink>
        
        <!-- Desktop Navigation -->
        <div class="hidden md:block animate-fadeInUp animate-delay-100">
          <div class="flex items-center space-x-8">
            <NuxtLink to="/" class="nav-link" :class="{ active: $route.path === '/' }">Home</NuxtLink>
            <NuxtLink to="/about" class="nav-link" :class="{ active: $route.path === '/about' }">About</NuxtLink>
            <NuxtLink to="/services" class="nav-link" :class="{ active: $route.path === '/services' }">Services</NuxtLink>
            <NuxtLink to="/contact" class="nav-link" :class="{ active: $route.path === '/contact' }">Contact</NuxtLink>
          </div>
        </div>
        
        <!-- CTA Button -->
        <div class="hidden md:block animate-fadeInRight animate-delay-200">
          <UiButton size="sm" @click="$router.push('/contact')">
            <Icon name="lucide:phone" size="16" class="mr-2" />
            Get Quote
          </UiButton>
        </div>
        
        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="text-gray-700 hover:text-blue-600 transition-colors duration-300 focus-visible">
            <Icon :name="mobileMenuOpen ? 'lucide:x' : 'lucide:menu'" size="24" />
          </button>
        </div>
      </div>
    </div>
    
    <!-- Mobile Navigation -->
    <div v-show="mobileMenuOpen" class="md:hidden bg-white border-t border-gray-200 animate-fadeInUp">
      <div class="px-4 pt-2 pb-6 space-y-2">
        <NuxtLink 
          to="/" 
          class="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-300 font-medium" 
          @click="mobileMenuOpen = false"
        >
          Home
        </NuxtLink>
        <NuxtLink 
          to="/about" 
          class="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-300 font-medium" 
          @click="mobileMenuOpen = false"
        >
          About
        </NuxtLink>
        <NuxtLink 
          to="/services" 
          class="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-300 font-medium" 
          @click="mobileMenuOpen = false"
        >
          Services
        </NuxtLink>
        <NuxtLink 
          to="/contact" 
          class="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-300 font-medium" 
          @click="mobileMenuOpen = false"
        >
          Contact
        </NuxtLink>
        <div class="pt-4">
          <UiButton size="sm" @click="$router.push('/contact'); mobileMenuOpen = false" class="w-full">
            <Icon name="lucide:phone" size="16" class="mr-2" />
            Get Quote
          </UiButton>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const mobileMenuOpen = ref(false)

// Close mobile menu when route changes
watch(() => useRoute().path, () => {
  mobileMenuOpen.value = false
})

// Close mobile menu when clicking outside
onMounted(() => {
  document.addEventListener('click', (e) => {
    const nav = document.querySelector('nav')
    if (nav && !nav.contains(e.target as Node)) {
      mobileMenuOpen.value = false
    }
  })
})
</script>
