<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-blue-50"></div>
    
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-10 -left-10 w-72 h-72 bg-primary-200/20 rounded-full animate-bounce-slow"></div>
      <div class="absolute top-1/2 -right-10 w-96 h-96 bg-blue-200/20 rounded-full animate-bounce-slow" style="animation-delay: -1s;"></div>
      <div class="absolute -bottom-10 left-1/2 w-80 h-80 bg-purple-200/20 rounded-full animate-bounce-slow" style="animation-delay: -2s;"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 container-max section-padding text-center">
      <div class="animate-fade-in">
        <!-- Greeting -->
        <p class="text-primary-600 font-medium text-lg mb-4 animate-slide-up">
          👋 Hello, I'm
        </p>

        <!-- Name -->
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 animate-slide-up" style="animation-delay: 0.1s;">
          Muhammad Hamza
        </h1>

        <!-- Title -->
        <h2 class="text-xl md:text-2xl lg:text-3xl text-gray-600 mb-8 animate-slide-up" style="animation-delay: 0.2s;">
          Full-Stack Developer & <br class="hidden sm:inline"> Creative Problem Solver
        </h2>

        <!-- Description -->
        <p class="text-lg text-gray-700 max-w-2xl mx-auto mb-12 leading-relaxed animate-slide-up" style="animation-delay: 0.3s;">
          I craft innovative digital solutions with cutting-edge technology. 
          Specializing in modern web development, mobile apps, and AI integration 
          to bring your ideas to life.
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style="animation-delay: 0.4s;">
          <Button 
            variant="primary" 
            size="lg"
            icon="lucide:rocket"
            @click="scrollToProjects"
          >
            View My Work
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            icon="lucide:download"
            @click="downloadResume"
          >
            Download Resume
          </Button>
        </div>

        <!-- Social Links -->
        <div class="flex justify-center space-x-6 mt-12 animate-slide-up" style="animation-delay: 0.5s;">
          <a
            v-for="social in socialLinks"
            :key="social.name"
            :href="social.url"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-500 hover:text-primary-600 transition-colors duration-200"
            :aria-label="social.name"
          >
            <Icon :name="social.icon" class="w-6 h-6" />
          </a>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="lucide:chevron-down" class="w-6 h-6 text-gray-400" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const socialLinks = [
  {
    name: 'GitHub',
    icon: 'lucide:github',
    url: 'https://github.com/Muhammad-Hamza-454'
  },
  {
    name: 'LinkedIn',
    icon: 'lucide:linkedin',
    url: 'https://linkedin.com/in/muhammad-hamza-454'
  },
  {
    name: 'Twitter',
    icon: 'lucide:twitter',
    url: 'https://twitter.com/hamza_454'
  },
  {
    name: 'Email',
    icon: 'lucide:mail',
    url: 'mailto:hamza@brainitysolutions.com'
  }
]

const scrollToProjects = () => {
  const projectsSection = document.getElementById('projects')
  if (projectsSection) {
    projectsSection.scrollIntoView({ behavior: 'smooth' })
  }
}

const downloadResume = () => {
  // Replace with actual resume URL
  window.open('/resume.pdf', '_blank')
}
</script>
