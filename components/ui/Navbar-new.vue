<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
    <div class="container-max">
      <div class="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center space-x-3 group">
          <div class="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center group-hover:bg-primary-700 transition-colors">
            <Icon name="lucide:brain-circuit" class="w-6 h-6 text-white" />
          </div>
          <span class="text-xl font-bold text-gray-900">Brainity Solutions</span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <a
            v-for="item in navigationItems"
            :key="item.name"
            :href="item.href"
            class="text-gray-600 hover:text-primary-600 font-medium transition-colors duration-200"
            @click.prevent="scrollToSection(item.href)"
          >
            {{ item.name }}
          </a>
        </div>

        <!-- CTA Button & Mobile Menu Button -->
        <div class="flex items-center space-x-4">
          <!-- CTA Button -->
          <Button 
            variant="primary" 
            class="hidden sm:inline-flex"
            icon="lucide:phone"
            @click="scrollToContact"
          >
            Get in Touch
          </Button>

          <!-- Mobile Menu Button -->
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="md:hidden text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Icon :name="mobileMenuOpen ? 'lucide:x' : 'lucide:menu'" class="w-6 h-6" />
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-if="mobileMenuOpen" class="md:hidden">
        <div class="px-4 pt-2 pb-3 space-y-1 bg-white border-b border-gray-200">
          <a
            v-for="item in navigationItems"
            :key="item.name"
            :href="item.href"
            class="block px-3 py-2 text-gray-600 hover:text-primary-600 font-medium transition-colors duration-200"
            @click="handleMobileNavClick(item.href)"
          >
            {{ item.name }}
          </a>
          <!-- Mobile CTA -->
          <div class="px-3 py-2">
            <Button 
              variant="primary" 
              size="sm"
              icon="lucide:phone"
              class="w-full justify-center"
              @click="handleMobileNavClick('#contact')"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const mobileMenuOpen = ref(false)

const navigationItems = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' }
]

const scrollToSection = (href: string) => {
  if (href === '#') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }
  
  const elementId = href.replace('#', '')
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const scrollToContact = () => {
  scrollToSection('#contact')
}

const handleMobileNavClick = (href: string) => {
  mobileMenuOpen.value = false
  scrollToSection(href)
}
</script>
