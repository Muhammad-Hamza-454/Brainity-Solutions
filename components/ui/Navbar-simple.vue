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
          <a href="#" class="text-gray-600 hover:text-primary-600 font-medium transition-colors duration-200">Home</a>
          <a href="#about" class="text-gray-600 hover:text-primary-600 font-medium transition-colors duration-200">About</a>
          <a href="#services" class="text-gray-600 hover:text-primary-600 font-medium transition-colors duration-200">Services</a>
          <a href="#contact" class="text-gray-600 hover:text-primary-600 font-medium transition-colors duration-200">Contact</a>
        </div>

        <!-- CTA Button & Mobile Menu Button -->
        <div class="flex items-center space-x-4">
          <!-- CTA Button -->
          <button class="hidden sm:inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none px-4 py-2 text-sm bg-primary-600 text-white hover:bg-primary-700">
            <Icon name="lucide:phone" class="w-4 h-4 mr-2" />
            Get in Touch
          </button>

          <!-- Mobile Menu Button -->
          <button class="md:hidden text-gray-600 hover:text-gray-900 transition-colors">
            <Icon name="lucide:menu" class="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
// Simple navbar component
</script>
