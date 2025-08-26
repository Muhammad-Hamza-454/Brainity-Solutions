<template>
  <div>
    <!-- Hero Section -->
    <Hero />
    
    <!-- About Section -->
    <About />
    
    <!-- Skills Section -->
    <Skills />
    
    <!-- Projects Section -->
    <Projects />
    
    <!-- Contact Section -->
    <Contact />
  </div>
</template>

<script setup lang="ts">
// Set page meta
useHead({
  title: 'Muhammad Hamza - Full-Stack Developer | Brainity Solutions',
  meta: [
    {
      name: 'description',
      content: 'Full-Stack Developer specializing in modern web development, mobile apps, and AI integration. Creating innovative digital solutions with cutting-edge technology.'
    },
    {
      name: 'keywords',
      content: 'Full-Stack Developer, Web Development, Mobile Apps, Vue.js, React, Node.js, TypeScript, AI Integration'
    },
    // Open Graph
    { property: 'og:title', content: 'Muhammad Hamza - Full-Stack Developer' },
    { property: 'og:description', content: 'Creating innovative digital solutions with cutting-edge technology' },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: '/og-image.png' },
    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Muhammad Hamza - Full-Stack Developer' },
    { name: 'twitter:description', content: 'Creating innovative digital solutions with cutting-edge technology' },
    { name: 'twitter:image', content: '/og-image.png' }
  ]
})
</script>
