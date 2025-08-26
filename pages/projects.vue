<template>
  <div class="pt-16">
    <!-- Page Header -->
    <section class="section-padding bg-gray-50">
      <div class="container-max text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          My Projects
        </h1>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          A comprehensive showcase of my work spanning web applications, 
          mobile apps, AI solutions, and open-source contributions.
        </p>
        <div class="w-20 h-1 bg-primary-600 rounded-full mx-auto mt-6"></div>
      </div>
    </section>

    <!-- Projects Section -->
    <Projects />
    
    <!-- CTA Section -->
    <section class="section-padding bg-primary-600">
      <div class="container-max text-center">
        <h2 class="text-3xl font-bold text-white mb-4">
          Ready to Start Your Project?
        </h2>
        <p class="text-primary-100 mb-8 max-w-2xl mx-auto">
          Let's discuss your ideas and create something amazing together. 
          I'm always excited to work on new challenges.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="secondary" size="lg" icon="lucide:message-circle">
            Start a Conversation
          </Button>
          <Button variant="outline" size="lg" icon="lucide:calendar" class="text-white border-white hover:bg-white hover:text-primary-600">
            Schedule a Call
          </Button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Projects - Muhammad Hamza | Brainity Solutions',
  meta: [
    {
      name: 'description',
      content: 'Explore my portfolio of web applications, mobile apps, AI solutions, and open-source projects. See how I create innovative digital solutions.'
    }
  ]
})
</script>
