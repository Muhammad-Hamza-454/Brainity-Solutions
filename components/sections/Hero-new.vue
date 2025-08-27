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
        <!-- Main Headline -->
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 animate-slide-up">
          <span class="text-primary-600">Brainity Solutions</span>
        </h1>
        
        <h2 class="text-2xl md:text-3xl lg:text-4xl text-gray-700 mb-4 animate-slide-up" style="animation-delay: 0.1s;">
          Transforming Ideas into Digital Excellence
        </h2>

        <!-- Subtext -->
        <p class="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed animate-slide-up" style="animation-delay: 0.2s;">
          We build secure, scalable, and user-friendly digital solutions for businesses worldwide.
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style="animation-delay: 0.3s;">
          <Button 
            variant="primary" 
            size="lg"
            icon="lucide:briefcase"
            @click="scrollToServices"
          >
            Our Services
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            icon="lucide:phone"
            @click="scrollToContact"
          >
            Contact Us
          </Button>
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
const scrollToServices = () => {
  const servicesSection = document.getElementById('services')
  if (servicesSection) {
    servicesSection.scrollIntoView({ behavior: 'smooth' })
  }
}

const scrollToContact = () => {
  const contactSection = document.getElementById('contact')
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
