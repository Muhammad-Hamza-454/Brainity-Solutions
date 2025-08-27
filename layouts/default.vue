<template>
  <div class="min-h-screen bg-white">
    <!-- Navigation -->
    <AppNavbar />
    
    <!-- Main Content -->
    <main>
      <slot />
    </main>
    
    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
// Global layout with enhanced navigation and footer
useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'preconnect', 
      href: 'https://fonts.gstatic.com',
      crossorigin: ''
    }
  ]
})
</script>
